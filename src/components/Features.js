import React from 'react';
import './Feature.css';

const features = [
  { title: 'Barcode Scanner', icon: '🔍' },
  { title: 'Smart Notifications', icon: '🔔' },
  { title: 'Wishlist & Collections', icon: '🛍️' },
  { title: 'Style Suggestions', icon: '🎨' },
  { title: 'In-app Checkout', icon: '🛒' },
  { title: 'Mall Locator', icon: '📍' },
];

const Features = () => (
  <section className="features-section">
    <h2 className="features-title">Key Features</h2>
    <div className="features-grid">
      {features.map((feature) => (
        <div className="feature-card" key={feature.title}>
          <div className="feature-icon">{feature.icon}</div>
          <h3 className="feature-name">{feature.title}</h3>
        </div>
      ))}
    </div>
  </section>
);

export default Features;

