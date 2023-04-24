import React from 'react'
import './About.css'
import TextLoop from "react-text-loop";

import {useState, useEffect} from 'react';

import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
    const [isHovering, setIsHovering] = useState(false);


    const handleMouseOverHack = () => {
        setIsHovering(true);
      };
    
      const handleMouseOutHack = () => {
        setIsHovering(false);
      };

      const [isHoveringRev, setIsHoveringRev] = useState(false);

      const handleMouseOverRev = () => {
        setIsHoveringRev(true);
      };
    
      const handleMouseOutRev = () => {
        setIsHoveringRev(false);
      };

      const [isHoveringFor, setIsHoveringFor] = useState(false);

      const handleMouseOverFor = () => {
        setIsHoveringFor(true);
      };
    
      const handleMouseOutFor = () => {
        setIsHoveringFor(false);
      };

      const [isHoveringWeb, setIsHoveringWeb] = useState(false);

      const handleMouseOverWeb = () => {
        setIsHoveringWeb(true);
      };
    
      const handleMouseOutWeb = () => {
        setIsHoveringWeb(false);
      };

      useEffect(() => {
        AOS.init({duration:1000});
      },[]);
    
return (
    <>
    <div className='paths'>
        <div className='carding' onMouseOver={handleMouseOverHack} onScroll={handleMouseOverHack} onMouseOut={handleMouseOutHack}>
          {!isHovering && (
            <h2>Hacking</h2>
          )}
            
            {isHovering && (
                <div className='animation-main-text' data-aos="fade-up">
                    <p>"Amateurs hack systems, professionals hack people"</p>
                </div>
            )}
        </div>
        <div className='carding' onMouseOver={handleMouseOverRev} onMouseOut={handleMouseOutRev}>
          {!isHoveringRev && (
              <h2>Reverse Engineering</h2>
          )}
            
            {isHoveringRev && (
                <div className='animation' data-aos="fade-up">
                    <p>"Everyday we perfome things forwardly, Wanna try doing things backward?"</p>
                </div>
            )}
        </div>
        <div className='carding' onMouseOver={handleMouseOverFor} onMouseOut={handleMouseOutFor}>
          {!isHoveringFor && (
            <h2>Forensic</h2>
          )}
            {isHoveringFor && (
                <div className='animation' data-aos="fade-up">
                    <p>“We can all see, but can you observe?”</p>
                </div>
            )}
        </div>
        <div className='carding' onMouseOver={handleMouseOverWeb} onMouseOut={handleMouseOutWeb}>
          {!isHoveringWeb && (
            <h2>Web Development</h2>
          )}
            {isHoveringWeb && (
                <div className='animation' data-aos="fade-up">
                    <p>“Digital design is like painting, except the paint never dries”</p>
                </div>
            )}
        </div>
    </div>
        <h1 className='text'>
        <TextLoop>
            <span>Hack it</span>
            <span>Drink a Coffee</span>
            <span>Read a Book</span>
            <span>Go on a Vacation</span>
            <span>Take Risks</span>
            <span>Challenge Yourself</span>
            <span>Make Targets</span>
            <span>Chase them</span>
            <span>Listen to Some Songs</span>
            <span>Be Unstopable</span>
            <span>Rule Your World</span>
        </TextLoop>{" "}
        </h1>

    </>
    
  );
}

export default About