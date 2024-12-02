// client/src/pages/AboutMe/AboutMe.js

import React from 'react';
import JuliaImages from '../../assets/images/about/JuliaImages';

function AboutMe() {
  return (
    <div className="container text-center my-5">
      <h1>Style On from Julia Raskin</h1>
      
      <div className="text-center my-4">
        <img
          src={JuliaImages.juliaPortrait}  // Access the portrait image
          alt="Julia Raskin"
          className="img-fluid rounded-circle"
          style={{ width: '350px', height: '450px' }}
        />
      </div>

      <p>
     

Hello! I’m Julia Raskin, a stylist, passionate fashion lover, and an avid traveler who thrives on exploring the beauty of Europe’s cities, cultures, and style landscapes. My journey in fashion began with a desire to blend unique aesthetics from diverse cultures into my own personal style—a mix of sophistication, comfort, and creativity.

I had the pleasure of calling Madrid my home for several years, and the vibrant Spanish capital left an indelible mark on my style. Madrid’s unique blend of tradition and modernity inspired me to embrace bold colors, intricate patterns, and a timeless yet effortless style. From the elegance of Barrio de Salamanca to the bohemian vibes of Malasaña, each neighborhood added a new layer to my fashion perspective.

Now based in Israel, I continue to draw from my experiences and travels across Europe, integrating them into my work and daily life. Living in Israel has introduced me to a new fusion of trends, combining Mediterranean flair with contemporary global influences. This mix allows me to bring a fresh perspective to my styling work, balancing international trends with local sensibilities.

As a stylist, my goal is to help people discover their authentic style, feel confident, and express themselves through clothing that aligns with who they are. Whether I’m working on editorial projects, personal styling, or simply sharing fashion insights, my aim is to inspire confidence and individuality in everyone I meet.

I’d love to connect with you and share my journey through fashion, travel, and style.
      </p>

     

     

      <div
        className="container about-background my-4"
        style={{
          backgroundImage: `url(${JuliaImages.backgroundImage})`,  // Use background image from JuliaImages
          backgroundSize: 'cover',
          
          height: '300px',
          borderRadius: '8px',
        }}
      > <div className="text-center my-4">
        <img
          src={JuliaImages.brandLogo}  // Access the brand logo image
          alt="Julia Raskin Style Logo"
          className="img-fluid rounded-circle"
          style={{ maxWidth: '150px' }}
        />
      </div>
        <p>
          <h3>
        Our mission is to bring you the latest in fashion with a unique and personalized touch. I believe in empowering
        individuals through style and providing high-quality products that make you feel confident and stylish.
        </h3>
      </p>
      </div>
    </div>
  );
}

export default AboutMe;
