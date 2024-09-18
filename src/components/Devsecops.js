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
      <h1 className={styles.blogtextt}>DevSecOps</h1>
      <p className={styles.headingtwo}>
        <span style={{ color: "#70FF00" }}>DevSecOps</span>{" "}
        related learning I did recently
      </p>
      <div className={styles.cards}>
        <Link to="/devsecops/DevVsSec">
          <Card className={styles.CardCss}>
            <Card.Body>
              <Card.Title className={styles.Protext}>
                (*) DevOps Vs DevSecOps
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
