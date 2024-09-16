import React from "react";
import styles from "./blogpost.module.css";

import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { useNavigate, Link } from "react-router-dom";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Basic_Tools = () => {
  const code =
    "something@something[~]$ ssh tom@10.10.10.100 \n \n tom@10.10.10.100's password: *** \n \n tom@10.10.10.100#";

  const code2 =
    "something@something[~]$ netcat 10.10.10.100 22 \n \n SSH-2.0-OpenSSH_8.4p1 Debian-3";

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
            <h1>Basic Tools Worth to Know</h1>
          </div>
          <div className={styles.headingdet}>
            <h6>23/9/2023</h6>
            <h6>writer: bl4ckf0xk</h6>
          </div>
          <hr></hr>
          <div className={styles.blogbody}>
            <h4>
              &#62; SSH{" "}
              <span style={{ fontSize: 17, color: "darkgray" }}></span>
            </h4>
            <h4>
              &#62; Netcat{" "}
              <span style={{ fontSize: 17, color: "darkgray" }}></span>
            </h4>
            <h4>
              &#62; Tmux{" "}
              <span style={{ fontSize: 17, color: "darkgray" }}></span>
            </h4>
            <h4>
              &#62; Vim{" "}
              <span style={{ fontSize: 17, color: "darkgray" }}></span>
            </h4>
            <p className={styles.subheaddes}>
              These are not intended to be penetration testing tools but they
              are critical to the penetration testing process
            </p>

            <h1 className={styles.headingblog}>SSH</h1>
            <p className={styles.subheaddes}>
              Secure Shell (SSH) is a network protocol runs on 22 port by
              default and provide a secure way to access computers remotely.
            </p>
            <p className={styles.subheaddes}>
              SSH can be configured with password authentication or passwordless
              using public-key authentication using an SSH public/private key
              pair.
            </p>
            <p className={styles.subheaddes}>
              SSH uses a client-server model, connecting a user running an SSH
              client application such as `OpenSSH` to an SSH server. While
              attacking a box or during a real-world assessment, we often obtain
              cleartext credentials or an SSH private key that can be leveraged
              to connect directly to a system via SSH
            </p>
            <p className={styles.subheaddes}>
              When we connect to ssh, the command look like this:
            </p>
            <SyntaxHighlighter
              language="bash"
              style={atomOneDark}
              customStyle={{ padding: "20px" }}
              wrapLines
            >
              {code}
            </SyntaxHighlighter>

            <h1 className={styles.headingblog}>SSH</h1>

            <div className={styles.section}>
              <h2 className={styles.subheading}>Netcat / ncat / nc</h2>
              <p className={styles.subheaddes}>
                Excellent network utility for interacting with TCP/UDP ports.
                Netcat can be used to connect to any listening port and interact
                with the service running on that port.
              </p>
              <h2 className={styles.subheading}>
                When we interact with a port using netcat, Command will look
                like this:
              </h2>
              .
              <SyntaxHighlighter
                language="bash"
                style={atomOneDark}
                customStyle={{ padding: "20px" }}
                wrapLines
              >
                {code2}
              </SyntaxHighlighter>
              <p className={styles.subheaddes}>
                We can see *Banner Grabbing* technique in above example.{" "}
              </p>
              <p className={styles.subheaddes}>
                (Windows version of netcat is called 'PowerCat'){" "}
              </p>
              <h1 className={styles.headingblog}>Tmux</h1>
              <h2 className={styles.subheading}>
                Terminal multiplexer. We can have multiple windows in one
                terminal and can jump between them.
              </h2>
              <p className={styles.subheaddes}>
                {" "}
                we can start termux by just entering 'tmux' as a command
              </p>
              <SyntaxHighlighter
                language="bash"
                style={atomOneDark}
                customStyle={{ padding: "20px" }}
              >
                something@something[~]$ tmux
              </SyntaxHighlighter>
              <p className={styles.subheaddes}>
                Default key to input commands prefix is `CTRL + B`{" "}
              </p>
              <p className={styles.subheaddes}>
                In order to open a new window we can hit `ctrl + b` and then hit
                `c`{" "}
              </p>
              <p className={styles.subheaddes}>
                To split a window vertically hit prefix and `shift + %`
                horizontally `shift + "`{" "}
              </p>
              <p className={styles.subheaddes}>
                To switch between panes hit prefix and left or right arrows for
                horizontal switching and up or down for vertical switching
              </p>
            </div>
            <div className={styles.section}>
              <h1 className={styles.headingblog}>Vim</h1>
              <h2 className={styles.subheading}> Text Editor</h2>
              <p className={styles.subheaddes}>
                One of the main benifit of using vim is that it relies entirely
                on the keyboard.{" "}
              </p>
              <p className={styles.subheaddes}>
                If you want to create a new file, input the new file name and
                vim will open a new window with that file. Once we open a file
                we are in read-only normal mode. If you want to switch to edit
                mode press `i` . When you finish editing you can hit `esc` to
                come to normal mode.
              </p>
              <p className={styles.subheaddes}>
                If you want to save file file press `:wq` and if you want to
                just quit without saving press `:q!`
              </p>

              <p className={styles.subheaddes}>
                This is a cheatsheet for vim [https://vimsheet.com/]
              </p>
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

export default Basic_Tools;
