import "./Navbar.css";
import { FaBars, FaTimes } from 'react-icons/fa';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [color,setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100){
            setColor(true);
        }else{
            setColor(false);
        }
    }

    window.addEventListener("scroll",changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
            <h1 className="logo">bl4ckf0xk~# |</h1>
        </Link>
            <li>
                <Link to="/">🌙</Link>
            </li>
    </div>
  )
}

export default Navbar