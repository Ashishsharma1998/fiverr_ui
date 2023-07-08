import React from "react";
import { Link } from "react-router-dom";
import "./ProdCard.scss";

export default function ProdCard({ item }) {
  return (
    <Link to="/" className="link">
      <div className="prodCard">
        <img src={item.img} alt="" />
        <div className="info">
          <img src={item.pp} alt="" />
          <div className="text">
            <h2>{item.cat}</h2>
            <span>{item.username}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
