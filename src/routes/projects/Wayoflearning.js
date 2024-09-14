import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import './blogpost.css'

import { useNavigate} from 'react-router-dom';

import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar';


const Wayoflearning = () => {
    const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}
  return (
    <div className='containerblog'>
        <Navbar />
        <button onClick={goBack} style={{background:'none',border:'none',padding:'0',outline:'inherit',cursor:'pointer',color:'inherit'}}>
            <IoIosArrowBack className='iconblo' style={{color:"#fff"}}/>
        </button>
        
        <div className='headingblog'>
            <h1>Learning Process</h1>
        </div>
        <div className='headingdet'>
            <h6>30/4/2023</h6>
            <h6>writer: bl4ckf0xk</h6>
        </div>
        <hr></hr>
        <div className='blogbody'>
        <h1 className='headingblog'>Way Of Learning</h1>
        <h4 className='subheaddes'> We always use the information we already know to perform things in our life. But for a "Hacker Mindset" you have to overcome this stage and be like "Think outside the box".</h4>

        <div className='section'>
            <h2 className='subheading'>When you learn in cybersecurity or any other security related IT job you have to think differently, then we can see, think, perform our tasks. We can solve Complex problems by using this "Outside the box" method.</h2>
        </div>
        <div className='section'>
            <h2 className='subheading'>"Thinking Outside" meaning is seeing things outside of the limitations placed on us.</h2>
            <h3 className='subheaddes' style={{fontSize:30,color:"chocolate"}}>A problem is an emotional state. Without emotions, it is just a situation.</h3>

        </div>
        <div className='section'>
            <h2 className='subheading'>Learning Process is not just theoretical and practical path, it is also depend on our emotional state.</h2>
        </div>
        <div className='section'>
            <p className='subheaddes'>Another thing to mention is when we learn something we must have a goal. When we have a goal we work for that, we work hard to achive that goal. May be we couldn't achive our highest goal but even we can be happy after seeing the way we came this far.</p>
        </div>
        </div>

        <Footer />
    </div>
  )
}

export default Wayoflearning