import React from "react";
import "./Pricing.css";
import PricingCard from "../PricingCard/PricingCard";

const Pricing = ({ id }) => {
  const pricingData = [
    {
      heading: "Deluxe",
      description: "Perfect For Freelancer",
      price: 59,
      bandwidthFeatures: [
        { bandwidth: "Bandwidth", value: "1GB" },
        { bandwidth: "Onlinespace", value: "500MB" },
        { bandwidth: "Support", value: "NO" },
        { bandwidth: "Domain", value: "1" },
        { bandwidth: "Hidden Fees", value: "NO" },
      ],
    },
    {
      heading: "Economy",
      description: "Perfect For Freelancer",
      price: 79,
      bandwidthFeatures: [
        { bandwidth: "Bandwidth", value: "2GB" },
        { bandwidth: "Onlinespace", value: "1GB" },
        { bandwidth: "Support", value: "YES" },
        { bandwidth: "Domain", value: "3" },
        { bandwidth: "Hidden Fees", value: "NO" },
      ],
    },
    {
      heading: "Ultimate",
      description: "Perfect For Freelancer",
      price: 99,
      bandwidthFeatures: [
        { bandwidth: "Bandwidth", value: "3GB" },
        { bandwidth: "Onlinespace", value: "2GB" },
        { bandwidth: "Support", value: "YES" },
        { bandwidth: "Domain", value: "Unlimited" },
        { bandwidth: "Hidden Fees", value: "NO" },
      ],
    },
  ];

  return (
    <section className="section_six" id={id}>
      <div className="container_six">
        <div className="center_textSix">
          <h3 className="key_textSix">Pricing Plan</h3>
          <p className="key_paraSix">
            Condimentum auctor ante sed interdum proin viverra sed lectus et
            iaculis maecenas tortor lorem bibendum pretium.
          </p>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "5rem" }}>
        {pricingData.map((data, index) => (
          <PricingCard
            key={index}
            heading={data.heading}
            description={data.description}
            price={data.price}
            bandwidthFeatures={data.bandwidthFeatures}
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
