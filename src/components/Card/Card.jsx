import React from "react";
import "./Card.css";

const Card = ({ icon, title, description }) => {
  return (
    <div className="card_container">
      {icon}
      <h5 className="card_heading">{title}</h5>
      <p className="card_para">{description}</p>
    </div>
  );
};

export default Card;
