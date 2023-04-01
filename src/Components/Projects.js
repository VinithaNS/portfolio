import React from 'react'
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';

import "../Styles/Projects.css";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import project4 from "../images/project4.png";

function Projects() {
  return (
    <>
      <div class="box">
        <div class="container">
          <div class="row">
            <h1 className="project">Projects</h1>
            <div className="cred">
              <h2>Credentials:</h2>
              <p>UserId:demo@gmail.com PassWord:demo@123</p>
              <p>UserId:admin@gmail.com PassWord:admin@123</p>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="insidebox text-center">
                <img className="img" src={project1} alt={project1} />
                <h5>Chat App</h5>
                <div className="card-description">
                  Mern Chat app is designed for chatting with friends from any
                  where and user free
                </div>
                <div className="card-footer">
                  <p>
                    <span style={{ color: "black" }}>TECH USED : </span>
                    REACT, NODE, EXPRESS, MONGODB,Socket.io
                  </p>
                </div>
                <div className="git">
                  <Button
                    target="_blank"
                    href="https://github.com/VinithaNS/mern-chat-client"
                    rel="noreferrer"
                    variant="contained"
                    className="live-btn"
                  >
                    <GitHubIcon />
                    FE
                  </Button>
                  <Button
                    target="_blank"
                    href="https://github.com/VinithaNS/mern-chat-server"
                    rel="noreferrer"
                    variant="contained"
                    className="live-btn"
                  >
                    <GitHubIcon />
                    BE
                  </Button>
                  <Button
                    target="_blank"
                    href="https://funny-madeleine-a5b1a0.netlify.app"
                    rel="noreferrer"
                    variant="contained"
                    className="live-btn"
                  >
                    LIVE
                  </Button>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="insidebox text-center">
                <img className="img" src={project2} alt={project2} />
                <h5>Car-Rental-App</h5>
                <div className="card-description">
                  This car rent app is used to user can choose any car from the
                  list and user can rent a car. If user needs a driver to drive
                  a car user can choose the driver from the list(user wish).
                </div>
                <div className="card-footer">
                  <p>
                    <span style={{ color: "black" }}>TECH USED : </span>
                    REACT, NODE, EXPRESS, MONGODB
                  </p>
                </div>
                <div className="git">
                  <Button
                    target="_blank"
                    href="https://github.com/VinithaNS/car-rental-client"
                    rel="noreferrer"
                    variant="contained"
                  >
                    <GitHubIcon /> FE
                  </Button>
                  <Button
                    target="_blank"
                    href="https://github.com/VinithaNS/car-rental-server"
                    rel="noreferrer"
                    variant="contained"
                    className="live-btn"
                  >
                    <GitHubIcon />
                    BE
                  </Button>
                  <Button
                    target="_blank"
                    href="https://luminous-rabanadas-5fc6e0.netlify.app"
                    rel="noreferrer"
                    variant="contained"
                  >
                    LIVE
                  </Button>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="insidebox text-center">
                <img className="img" src={project3} alt={project3} />
                <h5>Pizza App</h5>
                <div className="card-description">
                  Online pizza app is designed for to order pizza in online for
                  user free and online payment for order and also admin can
                  handle all to add,edit,delete pizza and also the user details.
                </div>
                <div className="card-footer">
                  <p>
                    <span style={{ color: "black" }}>TECH USED : </span>
                    REACT, NODE, EXPRESS, MONGODB,STRIPE
                  </p>
                </div>
                <div className="git">
                  <Button
                    target="_blank"
                    href="https://github.com/VinithaNS/mern-pizza-client"
                    rel="noreferrer"
                    variant="contained"
                  >
                    <GitHubIcon />
                    FE
                  </Button>
                  <Button
                    target="_blank"
                    href="https://github.com/VinithaNS/MERN-PIZZA-SERVER"
                    rel="noreferrer"
                    variant="contained"
                  >
                    <GitHubIcon />
                    BE
                  </Button>
                  <Button
                    target="_blank"
                    href="https://candid-florentine-b6b5e8.netlify.app"
                    rel="noreferrer"
                    variant="contained"
                  >
                    Live
                  </Button>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="insidebox text-center">
                <img className="img" src={project4} alt={project4} />
                <h5>MERN BLOG APP</h5>
                <div className="card-description">
                  The Blogger app allows you to post, edit, save, and view your
                  blog posts.You can publish posts from anywhere, anytime with
                  the app.
                </div>
                <div className="card-footer">
                  <p>
                    <span style={{ color: "black" }}>TECH USED : </span>
                    REACT, NODE,MONGO DB,EXPRESS
                  </p>
                </div>

                <div className="git">
                  <Button
                    target="_blank"
                    href="https://github.com/VinithaNS/blog-app-client"
                    rel="noreferrer"
                    variant="contained"
                  >
                    <GitHubIcon />
                    FE
                  </Button>
                  <Button
                    target="_blank"
                    href="https://github.com/VinithaNS/blog-app-server"
                    rel="noreferrer"
                    variant="contained"
                  >
                    <GitHubIcon />
                    BE
                  </Button>
                  <Button
                    target="_blank"
                    href="https://benevolent-faun-d85a74.netlify.app"
                    rel="noreferrer"
                    variant="contained"
                  >
                    LIVE
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects