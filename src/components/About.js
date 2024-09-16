import React from 'react'
import styles from './About.module.css'
import Pic from '../assets/images/propic.jpg'

import { Link } from "react-router-dom";


const About = () => {

  return (
    <div className={styles.about}>
      <div className={styles.headingfirst}>
        <p className={styles.head}>Fox</p>
        <div className={styles.links}>
          <p>! Links :
            <Link to='/'>Home</Link> | <Link to='/projects'>Blog</Link> | <Link to='/about'>Fox</Link></p>
        </div>
        <p className={styles.headt}>What kind of <span style={{ color: '#AD00FF' }}>Fox</span> this is?</p>
      </div>
      <div className={styles.longtext}>
        <p>
          I’m <span style={{ color: '#00ff00' }}>bl4ckf0xk</span> (Kavindu Sahan), <span style={{ color: 'red' }}>Reverse</span> Engineer and Security Researcher
        </p>
      </div>
      <div className={styles.des}>
        <p>
          Technical Consultant at Inivos | Defensive Security Analyst
          <br />
          Blockchain & AI security tester
          <br />
          Web developer
        </p>
      </div>
      <div className={styles.text}>
      <p>
            Learning Blockchain & AI Security<br/>
            Focused on Buffer Overflows, Exploit development and Assembly Programming <br/>
            Working as a Technical Consultant at Inivos<br/>
            Interested in Cryptography<br/>
          </p>
      </div>
      <div>
        <img src={Pic} alt='pic' className={styles.pic}/>
      </div>
    </div>

  );
}

export default About