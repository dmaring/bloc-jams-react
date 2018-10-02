import React from 'react';

const Landing = () => (
  <section className="landing">
    <h1 className="hero-title">Turn the music up!</h1>

    <section className="selling-points">
      <div clasName="point">
        <h2 className="point-title">Choose your music</h2>
        <p className="point-description">The world is full of music; why should you let someone else choose it for you?</p>
      </div>
      <div className="point">
        <h2 className="point-title">Unlimited, streaming, ad-free</h2>
        <p className="point-description">No arbitrary limits. No distractions.</p>
      </div>
      <div className="point">
        <h2 className="point-title">Mobile enabled</h2>
        <p className="point-description">List to your music on the go.</p>
      </div>
    </section>
  </section>
);

export default Landing;
