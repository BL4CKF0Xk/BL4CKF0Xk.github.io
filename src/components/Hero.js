import styles from './Hero.module.css';
import React from 'react';

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.mask}>
        <div className={styles.detail}>
          <div className={styles.firstpara}>
          <p>
            I’m <span style={{ color: '#00ff00' }}>bl4ckf0xk</span> (Kavindu Sahan), <span style={{ color: 'red' }}>Reverse</span> Engineer and Security Researcher
          </p>
          </div >
          <p className={styles.secondpara}>
            Technical Consultant at Inivos | Defensive Security Analyst
            <br />
            Blockchain & AI security tester
            <br />
            Web developer
          </p>
          <div className={styles.latest}>^Latest :
            <ul>
              <li>- hbdhbvdbv vsvg vfd vydf vgdv gd vghdv hg vhdfd vfyv fd vfy vdv fyv yfv</li>
              <li>- hbdhbvdbv vsvg vfd vydf vgdv gd vghdv hg vhdfd vfyv fd vfy vdv fyv yfv</li>
              <li>- hbdhbvdbv vsvg vfd vydf vgdv gd vghdv hg vhdfd vfyv fd vfy vdv fyv yfv</li>
              <li>- hbdhbvdbv vsvg vfd vydf vgdv gd vghdv hg vhdfd vfyv fd vfy vdv fyv yfv</li>
            </ul>
          </div>
          <div className={styles.highlights}>
            ^Highlights :
            <ul>
              <li>- hbdhbvdbv vsvg vfd vydf vgdv gd vghdv hg vhdfd vfyv fd vfy vdv fyv yfv</li>
              <li>- hbdhbvdbv vsvg vfd vydf vgdv gd vghdv hg vhdfd vfyv fd vfy vdv fyv yfv</li>
              <li>- hbdhbvdbv vsvg vfd vydf vgdv gd vghdv hg vhdfd vfyv fd vfy vdv fyv yfv</li>
              <li>- hbdhbvdbv vsvg vfd vydf vgdv gd vghdv hg vhdfd vfyv fd vfy vdv fyv yfv</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
