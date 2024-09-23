import React from "react";
import styles from "./blogpost.module.css";

import { useNavigate } from "react-router-dom";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const DevVsSec = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

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
            <h1>DevOps vs DevSecOps</h1>
          </div>
          <div className={styles.headingdet}>
            <h6>22/09/2024</h6>
            <h6>writer: bl4ckf0xk</h6>
          </div>
          <hr></hr>
          <div className={styles.blogbody}>
            <div className={styles.section}>
              <p className={styles.subheaddes}>
                DevOps → Combination of Software Development (Dev) and
                Operations (Ops).
              </p>
              <p className={styles.subheaddes}>
                DevSecOps → Combination of Development (Dev), Security (Sec),
                and Operations (Ops).
              </p>
              <p className={styles.subheaddes}>
                In a typical DevOps environment, developers care about the
                security of the application in the last stages of the
                development, and this can lead to various issue like finding a
                critical bug in the build and had to remediate it when the
                application on live. This increases the risk of exploiting the
                vulnerable application by an attacker and at the same time this
                will increase the cost for application to deploy.
              </p>
              <p className={styles.subheaddes}>
                So, if this Testing the security of application part comes to an
                early stage this issue can be answered. Here comes the
                DevSecOps!
              </p>
              <p className={styles.subheaddes}>
                In DevSecOps, each step of SDLC has a step of testing the
                application for bugs, typos, standards and vulnerabilities. By
                using this module developers can build fast without worrying
                that they have to correct bugs at the end of the Lifecycle
                because the bugs will be found and fixed in the exact part of
                Lifecycle. It’s obvious that risk will decrease drastically.
              </p>

              <div className={styles.section}>
                <h2 className={styles.subheading}>
                  Security Aspects care about in DevSecOps
                </h2>
                <ul>
                  <li>
                    Secure Configuration — Prevent exposing the sensitive data
                    to external systems
                  </li>
                  <li>Secure Code — Perform code analysis</li>
                  <li>Secure Dependencies — Carry out dependency scans</li>
                  <li>
                    Secure Interfaces — Perform scans that verify the security
                    of external exposed parts of the application
                  </li>
                  <li>
                    Secure Artifacts — Scan the containers and docker images
                  </li>
                  <li>
                    Monitor and Prevent — Check for runtime security and
                    remediate any issue happen
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.section}>
              <h2 className={styles.subheading}>
                Adding Security to each step of DevOps pipeline
              </h2>
              <p className={styles.subheaddes}>Develop</p>
              <p className={styles.subheaddes}>
                Pre-Commit Hooks — Check the code before commit | Pre-Publish
                Hooks | IDE Plugins
              </p>
              <p className={styles.subheaddes}>Git</p>
              <p className={styles.subheaddes}>Code scans | Secret Vault</p>
              <p className={styles.subheaddes}>Test</p>
              <p className={styles.subheaddes}>
                Unit Test | Mutation Test | Static Code Analysis
              </p>
              <p className={styles.subheaddes}>Build</p>
              <p className={styles.subheaddes}>
                Dependency Scan | Container Image Scan
              </p>
              <p className={styles.subheaddes}>Deploy — stage</p>
              <p className={styles.subheaddes}>
                Validate Image Signature | Integration Testing
              </p>
              <p className={styles.subheaddes}>Deploy — Prod</p>
              <p className={styles.subheaddes}>
                Validate runtime Configs | DAST pen test | Infrastructure
                Compliance Checks | Performance Test
              </p>
              <p className={styles.subheaddes}>Monitor</p>
              <p className={styles.subheaddes}>
                Log aggregation | Security Logs | Resource Utilization
              </p>
              <p className={styles.subheaddes}>Security</p>
              <p className={styles.subheaddes}>
                SSL/TLS | Network Policies | Auditing
              </p>

              <h2 className={styles.subheading}>Common Tools for DevSecOps</h2>
              <p className={styles.subheaddes}>
                Version Control & Pre-Commit: Talisman, GitHub
              </p>
              <p className={styles.subheaddes}>
                CI/CD Pipelines: Maven, Jenkins
              </p>
              <p className={styles.subheaddes}>
                Testing: PIT Test (Mutation Testing), JMeter (Performance)
              </p>
              <p className={styles.subheaddes}>
                Code Analysis: SonarQube (SAST)
              </p>
              <p className={styles.subheaddes}>
                Container Security: Trivy (Container Scanning), KubeSec
              </p>
              <p className={styles.subheaddes}>
                Policy Enforcement & Auditing: OPA, Kube-bench
              </p>
              <p className={styles.subheaddes}>Pen Testing & DAST: OWASP ZAP</p>
              <p className={styles.subheaddes}>
                Monitoring & Alerts: Falco, Grafana
              </p>
              <p className={styles.subheaddes}>
                Networking & Traffic Monitoring: Istio, Kiali
              </p>
              <p className={styles.subheaddes}>Collaboration & Alerts: Slack</p>
            </div>
          </div>
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
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DevVsSec;
