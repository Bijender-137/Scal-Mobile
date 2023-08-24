
import "./App.css";
import "./Ak.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import MyNave from "./components/MyNave";
import HeroSection from "./components/HeroSection";
function App() {
  return (
    <div className="bg-black z_index_1">
      <MyNave/>
    <HeroSection/>
    </div>
  );
}

export default App;
