
import React from 'react';
import { Link } from 'react-router-dom';
import JuliaImages from '../../assets/images/products/productImages';  // Assuming JuliaImages has hero and featured images
import './Home.css';
function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section text-center text-light" style={{
        backgroundColor: '#e8b4bc',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#8B013',
      }}>
        <div className="container">
          <h1 className="display-4 font-weight-bold">Julia Raskin Style</h1>
          <p className="lead">Discover the latest in fashion with a unique and personalized touch.</p>
          <Link to="/shop" className="btn btn-primary btn-lg mt-3">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products py-5">
        <div className="container">
          <h2 className="text-center mb-5">STYLE on COLLECTION</h2>
          <div className="row">
            {/* Sample Products - replace with dynamic data */}
            {[
              { id: 1, name: 'product1', price: 120, image: 'product1' },
              { id: 2, name: 'product2', price: 85, image: 'product2' },
              { id: 3, name: 'product3', price: 45, image: 'product3' },
            ].map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <div className="card">
                  <img src={JuliaImages[product.image]} className="card-img-top" alt={product.name} />
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">${product.price}</p>
                    <Link to={`/shop/${product.id}`} className="btn btn-outline-primary">
                      View Product
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Banner Section */}
      <section className="about-banner py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-4">About Julia Raskin Style</h2>
          <p className="lead">
            Founded by Julia Raskin, our brand is committed to offering a curated collection of fashion pieces 
            that empower you to look and feel your best. Join us on a journey to discover your unique style.
          </p>
          <Link to="/about" className="btn btn-secondary mt-3">
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
