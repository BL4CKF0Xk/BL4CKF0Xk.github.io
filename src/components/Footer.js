import "./Footer.css";
import { BiCopyright } from "react-icons/bi"

import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footcon">
          <p>
        <span>+ Online Presence</span> : 
              <a href='https://github.com/BL4CKF0Xk' target="_blank" rel="noreferrer">Github</a> | 
              <a href='https://www.linkedin.com/in/kavindu-sahan/' target="_blank" rel="noreferrer">LinkedIn</a> | 
              <a href='https://app.hackthebox.com/profile/395563' target="_blank" rel="noreferrer">HTB</a> | 
              <a href='https://tryhackme.com/p/BlackFoxK' target="_blank" rel="noreferrer">TryHackMe</a> | 
              <a href='https://www.instagram.com/___kavik___/' target="_blank" rel="noreferrer">Insta</a>
        </p>
        <p className="simbol">#</p>
        <p>! Links : 
          <Link to='/'>Home</Link> | <Link to='/projects'>Blog</Link> | <Link to='/about'>Fox</Link></p>
        </div>
        <p className="foottext">Kavindu Sahan <BiCopyright size={12} style={{color:"#fff"}} /> All Right Reserved 2024</p>
    </div>
  )
}

export default Footer