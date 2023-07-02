import React from "react";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>Find the perfect freelance Services for your business </h1>
          <div className="search">
            <div className="searchInput">
              <img src="" alt="" />
              <input type="text" placeholder="try, building mobile app" />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web design</button>
            <button>Word press</button>
            <button>Logo design</button>
            <button>AI Services</button>
          </div>
        </div>

        <div className="right"></div>
      </div>
    </div>
  );
}

export default Featured;
