import "./App.css";
import "./Ak.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import MyNave from "./components/MyNave";
import HeroSection from "./components/HeroSection";
import { ScalMobile } from "./components/ScalMobile";
import { WhatStarted } from "./components/WhatStarted";
import { Retailers } from "./components/Retailers";
function App() {
  return (
    <div className="bg-black">
      <MyNave />
      <HeroSection />
      <ScalMobile />
      <WhatStarted />
      <Retailers />
    </div>
  );
}

export default App;
