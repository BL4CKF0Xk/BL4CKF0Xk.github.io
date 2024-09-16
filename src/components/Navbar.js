import styles from "./Navbar.module.css";
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
    <div className={styles.navb}>
    <div className={`${styles.header} ${color ? styles['header-bg'] : ''}`}>
        <Link to="/">
            <h1 className={styles.logo}>bl4ckf0xk~# <span className={styles.blinkingcursor}>|</span></h1>
        </Link>
            <li>
                <Link to="/">🌙</Link>
            </li>
    </div>
    <svg height="5" width="100%" className={styles.dashedline}>
              <line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                style={{
                  stroke: "white",
                  strokeWidth: 2,
                  strokeDasharray: "10, 7",
                }}
              />
            </svg>
    </div>
  )
}

export default Navbar