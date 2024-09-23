import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import styles from "./ProjectDash.module.css";

const ProjectDash = () => {
  return (
    <div className={styles.projectdash}>
      <div className={styles.links}>
        <p>
          ! Links :<Link to="/">Home</Link> | <Link to="/projects">Blog</Link> |{" "}
          <Link to="/about">Fox</Link>
        </p>
      </div>
      <h1 className={styles.blogtext}>Blog</h1>
      <p className={styles.headingtwo}>
        Details about recent <span style={{ color: "#70FF00" }}>Incidents</span>{" "}
        in my Learning System
      </p>
      <div className={styles.cards}>
        <Link to="/devsecops">
          <Card className={styles.CardCss}>
            <Card.Body>
              <Card.Title className={styles.Protext}>(+) DevSecOps</Card.Title>
            </Card.Body>
          </Card>
          <svg height="5" width="100%" className={styles.dashedline}>
            <line
              x1="0"
              y1="0"
              x2="100%"
              y2="0"
              style={{
                stroke: "white",
                strokeWidth: 2,
                strokeDasharray: "5, 5",
              }}
            />
          </svg>
        </Link>
        <Link to="/projects/Making_Shellcode">
          <Card className={styles.CardCss}>
            <Card.Body>
              <Card.Title className={styles.Protext}>
                (*) Making First ShellCode
              </Card.Title>
            </Card.Body>
          </Card>
          <svg height="5" width="100%" className={styles.dashedline}>
            <line
              x1="0"
              y1="0"
              x2="100%"
              y2="0"
              style={{
                stroke: "white",
                strokeWidth: 2,
                strokeDasharray: "5, 5",
              }}
            />
          </svg>
        </Link>
        <Link to="/projects/Basic_Tools">
          <Card className={styles.CardCss}>
            <Card.Body>
              <Card.Title className={styles.Protext}>
                (*) Basic Tools
              </Card.Title>
            </Card.Body>
          </Card>
          <svg height="5" width="100%" className={styles.dashedline}>
            <line
              x1="0"
              y1="0"
              x2="100%"
              y2="0"
              style={{
                stroke: "white",
                strokeWidth: 2,
                strokeDasharray: "5, 5",
              }}
            />
          </svg>
        </Link>
        <Link to="/projects/Bash">
          <Card className={styles.CardCss}>
            <Card.Body>
              <Card.Title className={styles.Protext}>(*) Bash Shell</Card.Title>
            </Card.Body>
          </Card>
          <svg height="5" width="100%" className={styles.dashedline}>
            <line
              x1="0"
              y1="0"
              x2="100%"
              y2="0"
              style={{
                stroke: "white",
                strokeWidth: 2,
                strokeDasharray: "5, 5",
              }}
            />
          </svg>
        </Link>
        <Link to="/projects/Pentestingbasics">
          <Card className={styles.CardCss}>
            <Card.Body>
              <Card.Title className={styles.Protext}>
                (*) Pentesting Basics
              </Card.Title>
            </Card.Body>
          </Card>
          <svg height="5" width="100%" className={styles.dashedline}>
            <line
              x1="0"
              y1="0"
              x2="100%"
              y2="0"
              style={{
                stroke: "white",
                strokeWidth: 2,
                strokeDasharray: "5, 5",
              }}
            />
          </svg>
        </Link>
        <Link to="/projects/Assembly_Data_Types">
          <Card className={styles.CardCss}>
            <Card.Body>
              <Card.Title className={styles.Protext}>
                (*) Starting On Assembly Language
              </Card.Title>
            </Card.Body>
          </Card>
          <svg height="5" width="100%" className={styles.dashedline}>
            <line
              x1="0"
              y1="0"
              x2="100%"
              y2="0"
              style={{
                stroke: "white",
                strokeWidth: 2,
                strokeDasharray: "5, 5",
              }}
            />
          </svg>
        </Link>
        <Link to="/projects/Way-of-learning">
          <Card className={styles.CardCss}>
            <Card.Body>
              <Card.Title className={styles.Protext}>
                (*) Way of Learning
              </Card.Title>
            </Card.Body>
          </Card>
          <svg height="5" width="100%" className={styles.dashedline}>
            <line
              x1="0"
              y1="0"
              x2="100%"
              y2="0"
              style={{
                stroke: "white",
                strokeWidth: 2,
                strokeDasharray: "5, 5",
              }}
            />
          </svg>
        </Link>
        <Link to="/projects/Way-of-thinking">
          <Card className={styles.CardCss}>
            <Card.Body>
              <Card.Title className={styles.Protext}>
                (*) Way Of Thinking
              </Card.Title>
            </Card.Body>
          </Card>
          <svg height="5" width="100%" className={styles.dashedline}>
            <line
              x1="0"
              y1="0"
              x2="100%"
              y2="0"
              style={{
                stroke: "white",
                strokeWidth: 2,
                strokeDasharray: "5, 5",
              }}
            />
          </svg>
        </Link>
        <Link to="/projects/intro-to-htb-academy">
          <Card className={styles.CardCss}>
            <Card.Body>
              <Card.Title className={styles.Protext}>
                (*) Intro To HTB Academy
              </Card.Title>
            </Card.Body>
          </Card>
          <svg height="5" width="100%" className={styles.dashedline}>
            <line
              x1="0"
              y1="0"
              x2="100%"
              y2="0"
              style={{
                stroke: "white",
                strokeWidth: 2,
                strokeDasharray: "5, 5",
              }}
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDash;
