import './Hero.css';
import React, { useState, useCallback, useEffect } from 'react';

const names = [
  'Penetration Tester',
  'Cyber Security Analyst',
  'React Developer',
];

function Hero() {
  const [newName, setnewName] = useState('');

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    setnewName(names[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 2000);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return (
    <div className="hero">
      <div className="mask">
        <div className="detail">
          <div className="first-para">
          <p>
            I’m <span style={{ color: '#00ff00' }}>bl4ckf0xk</span> (Kavindu Sahan), <span style={{ color: 'red' }}>Reverse</span> Engineer and Security Researcher
          </p>
          </div>
          <p>
            Technical Consultant at Inivos | Defensive Security Analyst
            <br />
            Blockchain & AI security tester
            <br />
            Web developer
          </p>
          <div className="quotes">^Latest :
            <ul>
              <li>- hbdhbvdbv vsvg vfd vydf vgdv gd vghdv hg vhdfd vfyv fd vfy vdv fyv yfv</li>
              <li>- hbdhbvdbv vsvg vfd vydf vgdv gd vghdv hg vhdfd vfyv fd vfy vdv fyv yfv</li>
              <li>- hbdhbvdbv vsvg vfd vydf vgdv gd vghdv hg vhdfd vfyv fd vfy vdv fyv yfv</li>
              <li>- hbdhbvdbv vsvg vfd vydf vgdv gd vghdv hg vhdfd vfyv fd vfy vdv fyv yfv</li>
            </ul>
          </div>
          <div className="highlights">
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
