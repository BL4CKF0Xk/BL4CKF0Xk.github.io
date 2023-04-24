import React, { useEffect } from 'react'
import photo from '../assets/images/propic.jpg'
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import { SiTryhackme, SiHackthebox } from "react-icons/si"
import { MdEmail } from "react-icons/md"
import AOS from 'aos'
import 'aos/dist/aos.css'

import './Social.css'

const Social = () => {
  useEffect(() => {
    AOS.init({duration:2000});
  },[]);
    
  return (
    
    <div>
        <div className="headingtext">
            <h1>About Me</h1>
                    
                </div>
        <div className='propic'>
            <img src={photo} alt='Profilepicture' height={200} width={200} />
        </div>

        <div className='details'>
                <div className='animation-main-text' data-aos="fade-right">
                        <p>-Studied in TryHackMe</p>
                </div>
                <div className='animation-main-text' data-aos="fade-right">
                        <p>-Studies in HacktheBox Academy</p>
                </div>
                <div className='animation-main-text' data-aos="fade-right">
                        <p>-Working in Sampath Bank as an Intern</p>
                </div>
                <div className='animation-main-text' data-aos="fade-right">
                        <p>-Interested in Reverse Engineering</p>
                </div>
                <div className='animation-main-text' data-aos="fade-right">
                        <p>-Learning Assembly language</p>
                </div>
                <div className='animation-main-text' data-aos="fade-right">
                        <p>-Selenophile 🌙</p>
                </div>
        </div>
        
        <div className='animation-main-text' data-aos="fade-right">
                <p style={{textAlign:'center'}}>--Protego Maximum 🤍--</p>
        </div>
        
        
        <div className='social'>
            <a href='https://www.facebook.com/fd1562614f1983c875db9c78c89e31f6/' target="_blank" rel="noreferrer"><FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}} /></a>
            <a href='https://twitter.com/_BlackKaviK_' target="_blank" rel="noreferrer"><FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}} /></a> 
            <a href='https://www.linkedin.com/in/kavindu-sahan/' target="_blank" rel="noreferrer"><FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}} /></a>
            <a href='https://github.com/BL4CKF0Xk' target="_blank" rel="noreferrer"><FaGithub size={30} style={{color:"#fff",marginRight:"1rem"}} /></a>
            <a href='https://www.instagram.com/___kavik___/' target="_blank" rel="noreferrer"><FaInstagram size={30} style={{color:"#fff",marginRight:"1rem"}} /></a>
            <a href='https://tryhackme.com/p/BlackFoxK' target="_blank" rel="noreferrer"><SiTryhackme size={30} style={{color:"#fff",marginRight:"1rem"}} /></a>
            <a href='https://app.hackthebox.com/profile/395563' target="_blank" rel="noreferrer"><SiHackthebox size={30} style={{color:"#fff",marginRight:"1rem"}} /></a>
            <a href='mailto:kavinduksks@gmail.com' target="_blank" rel="noreferrer"><MdEmail size={30} style={{color:"#fff",marginRight:"1rem"}} /></a>
        </div>
        <div className='Badges'>
            <img src="https://tryhackme-badges.s3.amazonaws.com/BlackFoxK.png" alt="TryHackMe"/>
            <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="25085cb4-654a-4c2f-8450-d276f14bc269" data-share-badge-host="https://www.credly.com"></div>
            <script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>

            <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="4cf947d4-5300-4dc7-a59b-a3de7caabe92" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
        </div>
    </div>
  )
}

export default Social