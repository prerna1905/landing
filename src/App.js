import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import ParticleBg from "./components/ParticleBg";
import ThirdComponent from "./components/ThirdComponent/ThirdComponent";
import Services from "./components/Services/Services";
import Clients from "./components/Clients/Clients";

const App = () => {

  return (
    <Router>
      <Navbar />
      <ParticleBg />
      <ThirdComponent/>
      <Services/>
      <Clients/>
    </Router>
  );
};

export default App;

