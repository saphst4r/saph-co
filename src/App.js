import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Works from "./pages/Works";
import Saphst4r from "./pages/Saphst4r";
import PocketDice from "./pages/PocketDice";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/works" element={<Works/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/nfts/saphst4r" element={<Saphst4r/>}/>
          <Route path="/nfts/pocketdice" element={<PocketDice/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
