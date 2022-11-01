import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Works from "./pages/Works";
import Saphst4r from "./pages/Saphst4r";
import PocketDice from "./pages/PocketDice";
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.min.css';

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
      <ToastContainer 
        id="toast"
        toastClassName=
        "text-xs relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer text-center"
        
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
