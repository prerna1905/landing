import React, { useState } from "react";
import "./ThirdComponent.css";
import logo from "../../assets/mainImage.png";

const ThirdComponent = () => {
  const [openDropdown, setOpenDropdown] = useState(1);

  const toggleDropdown = (dropdownNumber) => {
    setOpenDropdown(dropdownNumber === openDropdown ? null : dropdownNumber);
  };

  return (
    <section className="section_third">
      <div className="container_third">
        <div className="flex_container">
          <div className="image_container">
            <img src={logo} alt="mainImage" />
          </div>
          <div className="image_container">
            <div className="dropText">
              <h5
                className="headingText"
                onClick={() => toggleDropdown(1)}
                style={{ cursor: "pointer" }}
              >
                Where can I get some?
                {openDropdown === 1 && (
                <p className="toggle_text">
                  Vulputate lobortis tincidunt porttitor massa morbi suscipit mollis luctus ornare vulputate.
                </p>
              )}
              </h5>  
            </div>
            <div className="dropText">
              <h5
                className="headingText"
                onClick={() => toggleDropdown(2)}
                style={{ cursor: "pointer" }}
              >
                Where does it come from?
                {openDropdown === 2 && (
                <p className="toggle_text">
                  Quisque tincidunt the malesuada aliquet ullamcorper Suspendisse lectus congue vitae pulvinar.
                </p>
              )}
              </h5>
            </div>
            <div className="dropText">
              <h5
                className="headingText"
                onClick={() => toggleDropdown(3)}
                style={{ cursor: "pointer" }}
              >
                What is Lorem Ipsum?
                {openDropdown === 3 && (
                <p className="toggle_text">
                  Pellentesque tincidunt imperdiet metus interdum ligula tristique aenean facilisis congue ictumst.
                </p>
              )}
              </h5>          
            </div>
            <div className="dropText">
              <h5
                className="headingText"
                onClick={() => toggleDropdown(4)}
                style={{ cursor: "pointer" }}
              >
                Why do we use it?
                {openDropdown === 4 && (
                <p className="toggle_text">
                  Vestibulum sodales turpis vestibulum praesent consectetur magna tortor interdum. 
                </p>
              )}
              </h5>      
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdComponent;
