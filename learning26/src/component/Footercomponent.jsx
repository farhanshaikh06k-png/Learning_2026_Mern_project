import React from 'react'
import virat from "../assets/virat.jpg"

export const Footercomponent = () => {
    return (
        
        <div>

            <div className="social-links">
            <h1> virat's Footer  <img className="img" src={virat} alt="virat kohli" /> 
            <span className='links'><a href="https://www.instagram.com/virat.kohli" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram"></i>
                </a> <a href="#" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook-f"></i>
                </a>

                <a href="#" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                </a></span> </h1>
                

                
            </div>


        </div>
    )
}
