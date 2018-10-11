import React from 'react';

const Landing = () => (
  <section className="landing">
    <div className="container">
      <div className="jumbotron hero-jumbotron">
        <h1 className="display-4 text-left">Turn the music up!</h1>
      </div>
    </div>

    <section className="selling-points container">
      <div className="row">
        <div className="col-md">
          <div className="card text-white bg-success">
            <div className="card-header">Choose your music</div>
            <div className="card-body">
              <p className="card-text">The world is full of music; why should you let someone else choose it for you?</p>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="card text-white bg-primary">
            <div className="card-header">Unlimited, streaming, ad-free</div>
            <div className="card-body">
              <p className="card-text">No arbitrary limits. No distractions</p>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="card text-white bg-danger">
            <div className="card-header">Mobile enabled</div>
            <div className="card-body">
              <p className="card-text">List to your music on the go.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
);

export default Landing;
