import React from "react";

function Hero() {
  return (
    <div id="home" className="hero-dashboard">
      {/*
        image may will be in the background with content on within the block itself
        it will be wrapped
      */}

      <div className="hero-dashboard-box-content">
        <h1>deGspot</h1>
        <p>
          Remeber this is basically going to be a one page application. Just
          scroll down and save this or book mark this. I will update this a
          little better if anything.
        </p>
        <button>⬇️⬇️⬇️</button>
      </div>
    </div>
  );
}

export default Hero;
