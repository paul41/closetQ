import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Hero.css'
const HeroSection = () => (
    <section className="hero-section">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={4000}
        transitionTime={600}
      >
        <div className="carousel-slide">
          <img src="/images/slide1.png" alt="Style Inspiration" />
          {/* <p className="legend">Scan & Style Instantly</p> */}
        </div>
        <div className="carousel-slide">
          <img src="/images/slide2.png" alt="Smart Notifications" />
          {/* <p className="legend">Get Smart Alerts for Deals</p> */}
        </div>
        <div className="carousel-slide">
          <img src="/images/slide3.png" alt="Wishlist" />
          {/* <p className="legend">Build Your Dream Closet</p> */}
        </div>
      </Carousel>
    </section>
  );

export default HeroSection;
