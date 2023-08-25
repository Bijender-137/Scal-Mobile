import "./App.css";
import "./Ak.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import MyNave from "./components/MyNave";
import HeroSection from "./components/HeroSection";
import { ScalMobile } from "./components/ScalMobile";
import { WhatStarted } from "./components/WhatStarted";
import { Retailers } from "./components/Retailers";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Services from "./components/Services";

function App() {
  return (
    <div className="bg-black">
      <MyNave />
      <HeroSection />
      <ScalMobile />
      <WhatStarted />
      <Retailers />
      {/* <AboutUs /> */}
      <Products />
      <Services/>
     
     
    </div>
  );
}

export default App;
