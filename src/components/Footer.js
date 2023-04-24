import "./Footer.css";
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaTelegram, FaDiscord, FaSpotify } from "react-icons/fa";
import { BiCopyright } from "react-icons/bi"
import { SiTryhackme, SiHackthebox } from "react-icons/si"

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footcon">
        <h4 className="texthead">Let's Be Internet BFF's</h4>
        <div className="footer-container">
              <div className="social">
                <a href='https://www.facebook.com/fd1562614f1983c875db9c78c89e31f6/' target="_blank" rel="noreferrer"><FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}} /></a> 
                <a href='https://t.me/BlackFoxK' target="_blank" rel="noreferrer"><FaTelegram size={30} style={{color:"#fff",marginRight:"1rem"}} /></a>
                <a href='https://discordapp.com/users/788927733337161770' target="_blank" rel="noreferrer"><FaDiscord size={30} style={{color:"#fff",marginRight:"1rem"}} /></a>
                <a href='https://www.instagram.com/___kavik___/' target="_blank" rel="noreferrer"><FaInstagram size={30} style={{color:"#fff",marginRight:"1rem"}} /></a>
                <a href='https://tryhackme.com/p/BlackFoxK' target="_blank" rel="noreferrer"><SiTryhackme size={30} style={{color:"#fff",marginRight:"1rem"}} /></a>
                <a href='https://app.hackthebox.com/profile/395563' target="_blank" rel="noreferrer"><SiHackthebox size={30} style={{color:"#fff",marginRight:"1rem"}} /></a>
                <a href='https://www.linkedin.com/in/kavindu-sahan/' target="_blank" rel="noreferrer"><FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}} /></a>    
                <a href='ttps://github.com/BL4CKF0Xk' target="_blank" rel="noreferrer"><FaGithub size={30} style={{color:"#fff",marginRight:"1rem"}} /></a>    
                <a href='https://open.spotify.com/user/8cjakxvjajr34rhol2ygeza8h' target="_blank" rel="noreferrer"><FaSpotify size={30} style={{color:"#fff",marginRight:"1rem"}} /></a>
                <a href='ttps://twitter.com/_BlackKaviK_' target="_blank" rel="noreferrer"><FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}} /></a>    
              </div>
        </div>
        </div>
        <p className="foottext"><span className="emailspan">hello@blackfoxk.wtf<BiCopyright size={12} style={{color:"#fff"}} /></span>Kavindu Sahan. All Right Reserved</p>
    </div>
  )
}

export default Footer