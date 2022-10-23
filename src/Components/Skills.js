import React from 'react'
import "../Styles/Skills.css";

function Skills() {
  return (
 <>
            <div className="container" id="skill-container">
                <div className="row">
                <p className="skill-title text-center">SKILLS</p>
                    <div className="col-12">
                        <div className="technology-container">
                            <div className="technology" style={{backgroundColor:"rgb(148,89,21)"}}>HTML <i class="fa-brands fa-html5"></i></div>
                            <div className="technology" style={{backgroundColor:"rgb(12,58,128)"}}>CSS <i className="fa-brands fa-css3-alt"></i></div>
                            <div className="technology" style={{backgroundColor:"rgb(87,70,105)"}}>BOOTSTRAP <i className="fa-brands fa-bootstrap"></i></div>
                            <div className="technology" style={{backgroundColor:"rgb(133,134,38)"}}>JAVASCRIPT <i className="fa-brands fa-js-square"></i></div>
                            <div className="technology" style={{backgroundColor:"rgb(28,92,97)"}}>REACT <i className="fa-brands fa-react"></i></div>
                            <div className="technology" style={{backgroundColor:"rgb(61,21,21)"}}>NODE <i className="fa-brands fa-node-js"></i></div>
                            <div className="technology" style={{backgroundColor:"rgb(28, 61, 21)"}}>EXPRESS <i className="fa-brands fa-node-js"></i></div>
                            <div className="technology" style={{backgroundColor:"rgb(48, 131, 32)"}}>MONGODB </div>
                            <div className="technology" style={{backgroundColor:"rgb(67,43,98)"}}>MYSQL </div>
                            <div className="technology" style={{backgroundColor:"rgb(133, 105, 105)"}}>GITHUB <i className="fa-brands fa-github"></i></div>
            </div>
           
                    </div>
                </div>
            </div>
       </>
  )
}

export default Skills