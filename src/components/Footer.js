import "./Footer.css";
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaTelegram, FaDiscord, FaSpotify } from "react-icons/fa";
import { BiCopyright } from "react-icons/bi"
import { SiTryhackme, SiHackthebox } from "react-icons/si"

import React from 'react'

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
        <p>! Links : Home | Blog | Fox</p>
        </div>
        <p className="foottext"><span className="emailspan">kavindusah4n@gmail.com<BiCopyright size={12} style={{color:"#fff"}} /></span>Kavindu Sahan. All Right Reserved</p>
    </div>
  )
}

export default Footer