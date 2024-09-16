import React from 'react'
import { Link } from 'react-router-dom'
import styles from './blogpost.module.css'


import { useNavigate} from 'react-router-dom';

import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar';


const Wayoflearning = () => {
    const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}
  return (
    <>
            <Navbar />

    <div className={styles.containerblog}>
      <div className={styles.con}>
        <button
            onClick={goBack}
            style={{
              background: "none",
              border: "none",
              padding: "0",
              outline: "inherit",
              cursor: "pointer",
              color: "inherit",
            }}
          >
            <p className={styles.headingf}>back to</p>

            <p className={styles.headingt}>Blog</p>
          </button>

          <div className={styles.links}>
            <p>
              ! Links :<Link to="/">Home</Link> |{" "}
              <Link to="/projects">Blog</Link> | <Link to="/about">Fox</Link>
            </p>
          </div>
        
        <div className={styles.headingblog}>
            <h1>Learning Process</h1>
        </div>
        <div className={styles.headingdet}>
            <h6>30/4/2023</h6>
            <h6>writer: bl4ckf0xk</h6>
        </div>
        <hr></hr>
        <div className={styles.blogbody}>
        <h1 className={styles.headingblog}>Way Of Learning</h1>
        <h4 className={styles.subheaddes}> We always use the information we already know to perform things in our life. But for a "Hacker Mindset" you have to overcome this stage and be like "Think outside the box".</h4>

        <div className={styles.section}>
            <h2 className={styles.subheading}>When you learn in cybersecurity or any other security related IT job you have to think differently, then we can see, think, perform our tasks. We can solve Complex problems by using this "Outside the box" method.</h2>
        </div>
        <div className={styles.section}>
            <h2 className={styles.subheading}>"Thinking Outside" meaning is seeing things outside of the limitations placed on us.</h2>
            <h3 className={styles.subheaddes} style={{fontSize:30,color:"chocolate"}}>A problem is an emotional state. Without emotions, it is just a situation.</h3>

        </div>
        <div className={styles.section}>
            <h2 className={styles.subheading}>Learning Process is not just theoretical and practical path, it is also depend on our emotional state.</h2>
        </div>
        <div className={styles.section}>
            <p className={styles.subheaddes}>Another thing to mention is when we learn something we must have a goal. When we have a goal we work for that, we work hard to achive that goal. May be we couldn't achive our highest goal but even we can be happy after seeing the way we came this far.</p>
        </div>
        </div>

    </div>
    </div>
    <Footer />
    </>


  )
}

export default Wayoflearning