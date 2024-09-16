import styles from "./Hero.module.css";
import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.mask}>
        <div className={styles.detail}>
          <div className={styles.firstpara}>
            <p>
              I’m <span style={{ color: "#00ff00" }}>bl4ckf0xk</span> (Kavindu
              Sahan), <span style={{ color: "red" }}>Reverse</span> Engineer and
              Security Researcher
            </p>
          </div>
          <p className={styles.secondpara}>
            Technical Consultant at Inivos | Defensive Security Analyst
            <br />
            Blockchain & AI security tester
            <br />
            Web developer
          </p>
          <div className={styles.latest}>
            ^Latest :
            <ul>
              <li>
                <Link to="/projects/Making_Shellcode">
                  <Card className={styles.CardCss}>
                    <Card.Body>
                      <Card.Title className={styles.Protext}>
                        - Making First ShellCode
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </li>
              <li>
                <Link to="/projects/Bash">
                  <Card className={styles.CardCss}>
                    <Card.Body>
                      <Card.Title className={styles.Protext}>
                        - Bash Shell
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </li>
              <li>
                <Link to="/projects/Assembly_Data_Types">
                  <Card className={styles.CardCss}>
                    <Card.Body>
                      <Card.Title className={styles.Protext}>
                        - Starting On Assembly Language
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </li>
              <li>
                <Link to="/projects/Pentestingbasics">
                  <Card className={styles.CardCss}>
                    <Card.Body>
                      <Card.Title className={styles.Protext}>
                        - Pentesting Basics
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.highlights}>
            ^Highlights :
            <ul>
              <li>
                <Link to="/projects/Making_Shellcode">
                  <Card className={styles.CardCss}>
                    <Card.Body>
                      <Card.Title className={styles.Protext}>
                        - Making First ShellCode
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </li>
              <li>
                <Link to="/projects/Bash">
                  <Card className={styles.CardCss}>
                    <Card.Body>
                      <Card.Title className={styles.Protext}>
                        - Bash Shell
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </li>
              <li>
                <Link to="/projects/Assembly_Data_Types">
                  <Card className={styles.CardCss}>
                    <Card.Body>
                      <Card.Title className={styles.Protext}>
                        - Starting On Assembly Language
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </li>
              <li>
                <Link to="/projects/Pentestingbasics">
                  <Card className={styles.CardCss}>
                    <Card.Body>
                      <Card.Title className={styles.Protext}>
                        - Pentesting Basics
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
