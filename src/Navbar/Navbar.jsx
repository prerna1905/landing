import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`navbar ${isScrolled ? "scrolled" : ""} ${
        isOpen ? "active" : ""
      }`}
    >
      <a href="#home" className={"navHead"}>
        Prerna
      </a>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#clients">Clients</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#home" className={"signUp_class"}>
            Sign Up
          </a>
        </li>
      </ul>

      <button className="menu-toggle" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </button>
    </nav>
  );
};

export default Navbar;
