import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import { MdOutlineMonitor } from "react-icons/md";

const Services = () => {
  return (
    <section className="section_fourth">
      <div className="container_fourth">
        <div className="center_text">
          <h3 className="key_text">Key features of the product</h3>
          <p className="key_para">
            Condimentum auctor ante sed interdum proin viverra sed lectus et
            iaculis maecenas tortor lorem bibendum pretium.
          </p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", marginTop: '5rem' }}>
          <Card
            icon={<MdOutlineMonitor size={35} />}
            title="Web design"
            description="Donec erat eget ante efficitur eleifend dolor scelerisque erat magna justo carsras condimentum mauada."
          />
          <Card
            icon={<MdOutlineMonitor size={35} />}
            title="Production"
            description="Maecenas viverra ornare sed maximus libero maximus on faucibus elit efficitur purus sollicitudin libero."
          />
          <Card
            icon={<MdOutlineMonitor size={35} />}
            title="Responsive design"
            description="Suspendisse nirtbh finibus efficitur viverra masuada massa mauris suscipit purus pellentesque pharetra."
          />
          <Card
            icon={<MdOutlineMonitor size={35} />}
            title="Mobile app"
            description="Quisque iaculis magna the dolor sollicitudin efficitur eget nirak the lectus praesent consectetur lacinia."
          />
          <Card
            icon={<MdOutlineMonitor size={35} />}
            title="Coding"
            description="Vivamus dolor hendrerit tempor elementum Interdum et fames ac ante ipsum primis malesuada in faucibus."
          />
          <Card
            icon={<MdOutlineMonitor size={35} />}
            title="Support"
            description="Suspendisse nunc lacus tincidunt telealus pelesques facilisis cursus mollis tidunt condimentum montes."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
