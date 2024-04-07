// import logo from './logo.svg';
import './App.css';
import Navbar from './components/header/Navbar';
import Hero from './components/hero/Hero';
import Wave1 from '../src/assets/images/wave-1.png'
import Wave2 from '../src/assets/images/wave-2.png'
function App() {
  return (
    <>
      <div className="main">
        <div className="bgimages">
          <div className="wave">
            <img src={Wave1} alt="wave1" srcset="" />
          </div>
        </div>
        <div className="bgimages">
          <div className="wave2">
            <img src={Wave2} alt="wave2" srcset="" />
          </div>
        </div>
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;
