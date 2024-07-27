import React from "react";
import Navbar from "./Navbar/Navbar";
import ParticleBg from "./components/ParticleBg/ParticleBg";
import Services from "./components/Services/Services";
import Clients from "./components/Clients/Clients";
import Pricing from "./components/Pricing/Pricing";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <ParticleBg id="home" />
      <Services id="services" />
      <Clients id="clients" />
      <Pricing id="pricing" />
      <Contact id="contact" />
      <Footer />
    </>
  );
};

export default App;
