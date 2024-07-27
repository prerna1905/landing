import React from "react";
import './PricingCard.css'
import Icon from "@mdi/react";
import { mdiCheckCircleOutline } from "@mdi/js";

const PricingCard = ({ heading, description, price, bandwidthFeatures }) => {

  const BandwidthFeature = ({ bandwidth, value }) => {
    return (
      <div className="band_text">
        <Icon path={mdiCheckCircleOutline} size={1} color="red" />
        <p className="width_text">
          {bandwidth}:{" "}
          <span style={{ fontWeight: "bolder", marginLeft: "0.2rem" }}>
            {value}
          </span>
        </p>
      </div>
    );
  };

  return (
    <div className="card_containerSix">
      <h4 className="card_headingSix">{heading}</h4>
      <p className="card_paraSix">{description}</p>
      <div className="dollar_container">
        <h2 className="pricing_text">
          <span className="dollar_text">$</span>
          {price}
          <span className="plan_text">Per/month</span>
        </h2>
      </div>
      {bandwidthFeatures.map((feature, index) => (
        <BandwidthFeature
          key={index}
          bandwidth={feature.bandwidth}
          value={feature.value}
        />
      ))}
      <div className="now_button">
        <p className="now_text">Join Now</p>
      </div>
    </div>
  );
};

export default PricingCard;
