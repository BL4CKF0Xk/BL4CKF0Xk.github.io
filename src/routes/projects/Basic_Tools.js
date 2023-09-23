import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import './blogpost.css';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { useNavigate} from 'react-router-dom';


import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar';
import AboutHero from '../../components/AboutHero';

const Basic_Tools = () => {
    const code = "something@something[~]$ ssh tom@10.10.10.100 \n \n tom@10.10.10.100's password: *** \n \n tom@10.10.10.100#";

    const code2 = 'something@something[~]$ netcat 10.10.10.100 22 \n \n SSH-2.0-OpenSSH_8.4p1 Debian-3';

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
            <h1>Basic Tools Worth to Know</h1>
        </div>
        <div className='headingdet'>
            <h6>23/9/2023</h6>
            <h6>writer: bl4ckf0xk</h6>
        </div>
        <hr></hr>
        <div className='blogbody'>
        <h4>&#62; SSH <span style={{fontSize:17,color:"darkgray"}}></span></h4>
        <h4>&#62; Netcat <span style={{fontSize:17,color:"darkgray"}}></span></h4>
        <h4>&#62; Tmux <span style={{fontSize:17,color:"darkgray"}}></span></h4>
        <h4>&#62; Vim <span style={{fontSize:17,color:"darkgray"}}></span></h4>
        <p className='subheaddes'>These are not intended to be penetration testing tools but they are critical  to the penetration testing process</p>


        <h1 className='headingblog'>SSH</h1>
            <p className='subheaddes'>Secure Shell (SSH) is a network protocol runs on 22 port by default and provide a secure way to access computers remotely.</p>
            <p className='subheaddes'>SSH can be configured with password authentication or passwordless using public-key authentication using an SSH public/private key pair.
</p>
            <p className='subheaddes'>SSH uses a client-server model, connecting a user running an SSH client application such as `OpenSSH` to an SSH server. While attacking a box or during a real-world assessment, we often obtain cleartext credentials or an SSH private key that can be leveraged to connect directly to a system via SSH</p>
            <p className='subheaddes'>When we connect to ssh, the command look like this:</p>
            <SyntaxHighlighter language="bash" style={atomOneDark} customStyle={{padding:"20px"}} wrapLines >
            {code}
            </SyntaxHighlighter>
        
        <h1 className='headingblog'>SSH</h1>


        <div className='section'>
            <h2 className='subheading'>Netcat / ncat / nc</h2>
            <p className='subheaddes'>Excellent network utility for interacting with TCP/UDP ports. Netcat can be used to connect to any listening port and interact with the service running on that port.</p>
            
        <h2 className='subheading'>When we interact with a port using netcat, Command will look like this:</h2>.
                <SyntaxHighlighter language="bash" style={atomOneDark} customStyle={{padding:"20px"}} wrapLines >
                {code2}
                </SyntaxHighlighter>
            <p className='subheaddes'>We can see *Banner Grabbing* technique in above example. </p>
            <p className='subheaddes'>(Windows version of netcat is called 'PowerCat') </p>
                

        <h1 className='headingblog'>Tmux</h1>
        
        <h2 className='subheading'>Terminal multiplexer. We can have multiple windows in one terminal and can jump between them. 
</h2>
            <p className='subheaddes'> we can start termux by just entering 'tmux' as a command</p>
            <SyntaxHighlighter language="bash" style={atomOneDark} customStyle={{padding:"20px"}}>
            something@something[~]$ tmux
            </SyntaxHighlighter>

            <p className='subheaddes'>Default key to input commands prefix is `CTRL + B` </p>
            <p className='subheaddes'>In order to open a new window we can hit `ctrl + b` and then hit `c` </p>
            <p className='subheaddes'>To split a window vertically hit prefix and `shift + %` horizontally `shift + "` </p>
            <p className='subheaddes'>To switch between panes hit prefix and left or right arrows for horizontal switching and up or down for vertical switching</p>


        </div>
        <div className='section'>
            <h1 className='headingblog'>Vim</h1>
            <h2 className='subheading'> Text Editor</h2>
            <p className='subheaddes'>One of the main benifit of using vim is that it relies entirely on the keyboard. </p>
            <p className='subheaddes'>If you want to create a new file, input the new file name and vim will open a new window with that file. Once we open a file we are in read-only normal mode. If you want to switch to edit mode press `i` . When you finish editing you can hit `esc`  to come to normal mode.</p>
            <p className='subheaddes'>If you want to save file file press `:wq` and if you want to just quit without saving press `:q!`</p>

            <p className='subheaddes'>This is a cheatsheet for vim [https://vimsheet.com/]</p>
            
        </div>
        </div>

        <Footer />
    </div>
  )
}

export default Basic_Tools