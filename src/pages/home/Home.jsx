import React from "react";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import { cards, projects } from "../../data";
import CatCard from "../../components/catCard/CatCard";
import ProdCard from "../../components/prodCard/ProdCard";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard item={card} key={card.id} />
        ))}
      </Slide>

      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelane talent at your fingertips..</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high quality service at every price point. No hourly rates,
              just project based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high quality service at every price point. No hourly rates,
              just project based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high quality service at every price point. No hourly rates,
              just project based pricing.
            </p>
          </div>

          <div className="item">
            <video controls>
              <source
                type="video/mp4"
                src="https://www.youtube.com/watch?v=Q2qpOeY4CZA"
              ></source>
            </video>
          </div>
        </div>
      </div>

      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              <i>fiverr</i> Business
            </h1>
            <h1>A Business solution designed for teams</h1>
            <p>
              Upgrade to curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Liverr Business</button>
          </div>

          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((pro) => (
          <ProdCard item={pro} key={pro.id} />
        ))}
      </Slide>
    </div>
  );
}

export default Home;
