import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import './Introhtbacademy.css'

// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { useNavigate} from 'react-router-dom';


import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar';
import AboutHero from '../../components/AboutHero';

const Introhtbacademy = () => {

    const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}

  return (
    <div className='containerblog'>
        <Navbar />
        <AboutHero />
        <button onClick={goBack} style={{background:'none',border:'none',padding:'0',outline:'inherit',cursor:'pointer',color:'inherit'}}>
            <IoIosArrowBack className='iconblo' style={{color:"#fff"}}/>
        </button>
        
        <div className='headingblog'>
            <h1>Intro to HTB Academy</h1>
        </div>
        <div className='headingdet'>
            <h6>23/4/2023</h6>
            <h6>writer: bl4ckf0xk</h6>
        </div>
        <hr></hr>
        <div className='blogbody'>
        <h1 className='headingblog'>Penetration Testing Process</h1>
        <ol className='process'>
            <li>Pre-Engagement</li>
            <li>Information Gathering</li>
            <li>Vulnerability Assessment</li>
            <li>Post-Exploitation/Exploitation</li>
            <li>Lateral Movement</li>
            <li>Proof Of Concept</li>
            <li>Post-Engagement</li>
        </ol>

        <div className='section'>
            <h2 className='subheading'># Pre-Engagement</h2>
            <p className='subheaddes'>This is where the main commitments, tasks, scope, limitations and related agreements are documented in writing.</p>

                <p><i>After that this is one path we can take</i></p>
                <h4>&#62; Learning Process</h4>
                <h4>&#62; Linux Fundamentals</h4>
                <h4>&#62; Windows Fundamentals</h4>
                <h4>&#62; Introduction To Networking</h4>
                <h4>&#62; Introduction To Web Applications</h4>
                <h4>&#62; Web Requests</h4>
                <h4>&#62; Javascript Deobfuscation</h4>
                <h4>&#62; Introduction To Active Directory</h4>
                <h4>&#62; Getting Started</h4>
                
                {/* <div className='code'>
                <SyntaxHighlighter language="python" style={atomOneDark} customStyle={{padding:"20px"}}>
                    print("Hello world")
                </SyntaxHighlighter>
                </div> */}
        </div>
        <div className='section'>
            <h2 className='subheading'># Information Gathering</h2>
            <p className='subheaddes'>It is critical to know how to retrieve information and best leverage it based on our assessment goals.<br></br>
            
            Before attempting to exploit anything, we should have completed thorough information gathering, keeping detailed notes along the way, focusing on things to hone in on once we get to the exploitation stage.</p>

                <p><i>From this stage this is our path and it is clear,</i></p>
                <h4>&#62; Network Enumeration with Nmap</h4>
                <h4>&#62; Footprinting</h4>
                <h4>&#62; Information Gathering - Web Edition</h4>
                <h4>&#62; OSINT - Corporate Recon</h4>
        </div>
        <div className='section'>
            <h2 className='subheading'># Vulnerability Assessment</h2>
            <p className='subheaddes'>This Stage divided into two areas<br></br>
            
                <p>&#8817; Scan for known vulnerabilities using automated tools</p>
                <p>&#8817; Analyzing for potential vulnerabilities through the information found</p></p>

                <p><i>From this Stage There are four Paths we can take, Depending on how far we have come,</i></p>
                <h4>$ Exploitation</h4>
                <h4>$ Post-Exploitation</h4>
                <h4>$ Lateral Movement</h4>
                <h4>$ Information Gathering</h4>
                <p></p>
                <h4>&#62; Vulnerability Assessment</h4>
                <h4>&#62; File Transfer</h4>
                <h4>&#62; Shells & Payloads</h4>
                <h4>&#62; Using the Metasploit-Framework</h4>
        </div>
        <div className='section'>
            <h2 className='subheading'># Exploitation</h2>
            <p className='subheaddes'>We use the information from the Information Gathering stage, analyze it in the Vulnerability Assessment stage, and prepare the potential attacks.</p>


                <p><i>From this Stage There are four Paths we can take, Depending on how far we have come,</i></p>
                <h4>$ Information Gathering</h4>
                <h4>$ Post-Exploitation</h4>
                <h4>$ Lateral Movement</h4>
                <h4>$ Proof-Of-Concept</h4>
                <p></p>
                <h4>&#62; Password Attacks</h4>
                <h4>&#62; Attacking Common Services</h4>
                <h4>&#62; Pivoting, Tunneling, and Port Forwarding</h4>
                <h4>&#62; Active Directory Enumeration & Attacks</h4>
        </div>
        <div className='section'>
            <h2 className='subheading'># Exploitation &#62; Web Exploitation</h2>
            <p className='subheaddes'>Second Part Of Exploitation Stage</p>


                <p><i>Web applications present a vast attack surface and are often the main accessible targets during external penetration testing engagements, So strong web enumeration and exploitation skills are paramount.</i></p>
                <h4>&#62; Using Web proxies</h4>
                <h4>&#62; Attacking Web application with Fuff</h4>
                <h4>&#62; Login Brute Forcing</h4>
                <h4>&#62; SQL Injection Fundamentals</h4>
                <h4>&#62; SQLMap Essentials</h4>
                <h4>&#62; Cross-Site Scripting (XSS)</h4>
                <h4>&#62; File Inclusion</h4>
                <h4>&#62; Command Injections</h4>
                <h4>&#62; Web Attacks</h4>
                <h4>&#62; Attacking Common Applications</h4>
        </div>
        <div className='section'>
            <h2 className='subheading'># Post-Exploitation</h2>
            <p className='subheaddes'>After we have gained access to a system, we must be able to take further steps from within the system. </p>

                <h4>&#62; Linux Privilege Escalation</h4>
                <h4>&#62; Windows Privilege Escalation</h4> 
        </div>
        <div className='section'>
            <h2 className='subheading'># Lateral Movement</h2>
            <p className='subheaddes'>Lateral Movement is one of the essential components for moving through a corporate network. We can use it to overlap with other internal hosts and further escalate our privileges withing the current subnet or another part of the network.</p>

                <p><b>Since both `Lateral Movement` and `Pillaging` require access to an already exploited system, these techniques and methods are covered in different modules, such as `Getting Started`, `Linux Privilege Escalation`, and `Windows Privilege Escalation`, and many others.</b></p>
        </div>
        <div className='section'>
            <h2 className='subheading'># Proof-of-Concept</h2>
            <p className='subheaddes'>The `Proof-Of-Concept` (`POC`) is merely proof that a vulnerability found exists. As soon as the administrators receive our report, they will try to confirm the vulnerabilities found by reproducing them. After all, no administrator will change business-critical processes without confirming the existence of a given vulnerability.</p>

            <p><b>When we already have all the information we have collected and have used the vulnerability to our advantage, it does not take much effort to automate the individual steps for this.</b></p>

            <h4>&#62; Introduction to Python 3</h4>
        </div>
        <div className='section'>
            <h2 className='subheading'># Post-Engagement</h2>
            <p className='subheaddes'>This includes cleaning up the systems we exploit so that none of these systems can be exploited using our tools.</p>
                <h4>&#62; Documentation & Reporting</h4>
                <h4>&#62; Attacking Enterprise Networks</h4>
        </div>
        </div>

        <Footer />
    </div>
  )
}

export default Introhtbacademy