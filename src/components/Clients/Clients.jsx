import React, { useState } from "react";
import "./Clients.css";
import CarouselImage1 from "../../assets/caraouselImage.jpg";
import CarouselImage2 from "../../assets/caraouselImage.jpg";
import CarouselImage3 from "../../assets/caraouselImage.jpg";

const Clients = ({ id }) => {
  const [currentClient, setCurrentClient] = useState(0);

  const clients = [
    {
      name: "Thomas Rudnick",
      position: "Web Development",
      image: CarouselImage1,
      description:
        "The European languages are members of the same family Their separate existence is a myth For science music, sport, etc, europe their pronunciation and their most European languages common book is a treatise on the theory book is the theory of popular words.",
    },
    {
      name: "Thomas Rudnick",
      position: "Creative Design",
      image: CarouselImage2,
      description:
        "The European languages are members of the same family Their separate existence is a myth For science music, sport, etc, europe their pronunciation and their most European languages common book is a treatise on the theory book is the theory of popular words.",
    },
    {
      name: "Naomi Smith",
      position: "Marketing Services",
      image: CarouselImage3,
      description:
        "The European languages are members of the same family Their separate existence is a myth For science music, sport, etc, europe their pronunciation and their most European languages common book is a treatise on the theory book is the theory of popular words.",
    },
  ];

  const handleClick = (index) => {
    setCurrentClient(index);
  };

  return (
    <section className="section_fifth" id={id}>
      <div className="container_fifth">
        <div className="fifth_head">
          <h3 className="fifth_text">Our Clients</h3>
          <p className="fifth_para">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        <div className="carousel_container">
          <div className="carousel_content">
            <img
              src={clients[currentClient].image}
              alt="carousel"
              className="image_style"
            />
            <p className="carousel_para">
              {clients[currentClient].description}
            </p>
            <h6 className="carousel_head">{clients[currentClient].name}</h6>
            <p className="carousel_position">
              Job position{" "}
              <span className="span_text">
                {clients[currentClient].position}
              </span>
            </p>
          </div>

          <div className="carousel_lines">
            {clients.map((client, index) => (
              <div
                key={index}
                className={`carousel_line ${
                  index === currentClient ? "active" : ""
                }`}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
