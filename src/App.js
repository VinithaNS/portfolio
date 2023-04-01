// import Button from '@mui/material/Button';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';


import { Routes, Route} from "react-router-dom";

import "./App.css";

import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skill from "./Components/Skills";
function App() {
  
  return (
     <>
    <Navbar/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Skill" element={<Skill />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact/>}/>
      </Routes> 
     
    
   
   </>
  );
}

export default App;