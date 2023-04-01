import React from 'react'
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import { useNavigate } from "react-router-dom";
function Navbar() {
    const navigate = useNavigate();
  return (
   <>
    <nav className="navbar-expand-lg ">
        <AppBar position="fixed">
          <Toolbar className='port' >
          
         <Button color="inherit" onClick={() => navigate("/")}> Home</Button>
         <Button color="inherit" onClick={()=>navigate("/About")}>About</Button>  
         <Button color="inherit" onClick={()=>navigate("/Skill")}>Skill</Button> 
         <Button color="inherit" onClick={() => navigate("/Projects")}>Projects</Button>
        
        <Button color="inherit" onClick={() => navigate("/Contact")}>Contact</Button>
            {/* <div className="profile">
              <img src={profile} alt="profilename"/>
            </div> */}
       </Toolbar>
        </AppBar>
      </nav>
      </>
  )
}

export default Navbar