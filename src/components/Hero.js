import "./Hero.css";
import Image1 from '../assets/images/wolf2.jpg';
import React, { useState,useCallback ,useEffect } from 'react'
import Typed from 'react-typed';

const names = [
  'Penetration Tester',
  'Cyber Security Analyst',
  'React Developer',
]

function Hero() {
  const [newName, setnewName] = useState("");

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        setnewName(names[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 2000);
        return () => clearInterval(intervalID);
    }, [shuffle])
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" 
                src={Image1} alt="IntroImg" />
        </div>
        <div className="content">
            <p>Hi, I'm {" "}
                <Typed
                    strings={[
                      'KAVINDU SAHAN 🌠',
                      'BLACKFOXk 🌙'
                    ]}
                    typeSpeed={70}
                    backSpeed={50}
                    loop
                />
            </p>
            <h1 className="txtcol">
              {newName}
              
            </h1>
        </div>
    </div>
  )
}

export default Hero