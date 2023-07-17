import React, { useState } from "react";
import "./Gigs.scss";
import { gigs } from "../../data";
import GigCard from "../../components/gigCard/GigCard";

function Gigs() {
  const [open, setOpen] = useState(false);
  const [sort, reSort] = useState("sales");

  const handleClick = (type) => {
    reSort(type);
    setOpen(false);
  };

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadCrumbs">
          Fiverr &gt; Graphic & Designing &gt;
        </span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with fiverr AI artists
        </p>

        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">SortBy</span>
            <span className="sortType">
              {sort === "sales" ? "Newest" : "Best Selling"}
            </span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => handleClick("createdAt")}>
                    Best Selling
                  </span>
                ) : (
                  <span onClick={() => handleClick("sales")}>Newest</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map((gig) => {
            return <GigCard key={gig.id} item={gig} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Gigs;
