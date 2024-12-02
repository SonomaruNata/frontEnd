import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ShoppingSchool.css';

const ShoppingSchool = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch articles from the backend
    axios.get('/routes/articles')
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  return (
    <div className="shopping-school-container">
      <h1>Welcome to Shopping School</h1>
      <p>
        Learn the art of shopping like a pro! Whether you're mastering the latest fashion trends
        or hunting for the best deals, our school will guide you every step of the way.
      </p>

      <div className="articles-section">
        <h2>Shopping Tips & Guides</h2>
        {articles.length > 0 ? (
          articles.map((article) => (
            <div key={article._id} className="article-card">
              <h3>{article.title}</h3>
              <p>{article.content.substring(0, 200)}...</p>
              <p className="author">By: {article.author?.username || 'Unknown'}</p>
            </div>
          ))
        ) : (
          <p>No articles found for Shopping School.</p>
        )}
      </div>
    </div>
  );
};

export default ShoppingSchool;
