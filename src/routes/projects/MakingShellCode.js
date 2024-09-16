import React from "react";
import styles from "./blogpost.module.css";

// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { useNavigate } from "react-router-dom";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const Assembly_Data_Types = () => {
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
            <h1>Making shellcode</h1>
          </div>
          <div className={styles.headingdet}>
            <h6>06/07/2024</h6>
            <h6>writer: bl4ckf0xk</h6>
          </div>
          <hr></hr>
          <div className={styles.blogbody}>
            <div className={styles.section}>
              <p className={styles.subheaddes}>
                Most program data types originate from a small set of
                fundamental data types that are intrinsic to the x86 platform.
              </p>
              <p className={styles.subheaddes}>
                These fundamental data types enable the processor to perform
                numerical and logical operations using signed and unsigned
                integers, single precision(32-bit) and double precision(64-bit)
                floating point values, text strings and SMID values
              </p>

              <p>
                <i>Data Types</i>
              </p>
              <h4>&#62; Byte &#91;size 8 bits&#93;</h4>
              <h4>&#62; Word &#91;size 16 bits&#93;</h4>
              <h4>&#62; DoubleWord &#91;size 32 bits&#93; </h4>
              <h4>&#62; QuadWord &#91;size 64 bits&#93;</h4>
              <h4>&#62; Double Quad Word &#91;size 128 bits&#93;</h4>

              <p className={styles.subheaddes}>
                Fundamental Data Types are numbered from right to left with zero
                and size-1 used to identify the least and the most significant
                bits, respectively
              </p>
              <p className={styles.subheaddes}>
                Fundamental Data Types larger than a single byte and stored in
                consective memory locations starting with the least-signifcant
                byte at the lowest memory address. This type of in-memory byte
                ordering is called{" "}
                <span style={{ color: "red" }}>little endian</span>
              </p>

              {/* <div className='code'>
                <SyntaxHighlighter language="python" style={atomOneDark} customStyle={{padding:"20px"}}>
                    print("Hello world")
                </SyntaxHighlighter>
                </div> */}
            </div>
            <div className={styles.section}>
              <h2 className={styles.subheading}># Numerical Data Types</h2>
              <p className={styles.subheaddes}>
                x86-64 instruction set intrinsically supports arithmetic and
                logical operations using 8,16,32 and 64-bit integers, both
                signed and unsigned<br></br>
                It also supports arithmetic calculations and data manipulation
                operations using single precision and double precision
                floating-point values.
              </p>

              <p className={styles.subheaddes}>
                A numerical data type is an elementary scalar value such as an
                integer or floating-point number.
              </p>

              <p>
                <i>Data Types</i>
              </p>
              <h4>&#62; Signed Integers</h4>
              <h4>&#62; Unsigned Integers</h4>
              <h4>&#62; Floating-point</h4>
            </div>
            <div className={styles.section}>
              <h2 className={styles.subheading}># SMID Data Types</h2>
              <p className={styles.subheaddes}>
                A SMID Data Type can be regarded as a container object that
                holds several instances of the same fundamental data type.
              </p>
              <p className={styles.subheaddes}>
                Like Fundamental Data types the bits of a SMID data type are
                numbered from right to left with zero and size-1 denoting the
                least and most significant bits respectively. Also Little Endian
                ordaring can be used in this data type.
              </p>

              <p>
                <i>Data Types</i>
              </p>
              <h4>&#62; 8-bit Integer</h4>
              <h4>&#62; 16-bit Integer</h4>
              <h4>&#62; 32-bit Integer</h4>
              <h4>&#62; 64-bit Integer</h4>
              <h4>&#62; Single precision Floating-point</h4>
              <h4>&#62; Double precision Floating-point</h4>
            </div>

            <div className={styles.section}>
              <h2 className={styles.subheading}># Miscellaneous Data Types</h2>
              <p className={styles.subheaddes}>
                x86 platform supports a number of miscellaneous data types
                including strings, bit fields and bit strings.
              </p>

              <p className={styles.subheaddes}>
                An x86 string is contiguous block of bytes, words, double words
                and quad words
              </p>

              <p className={styles.subheaddes}>
                A bit field is a contiguous sequence of bits and is used as a
                mask value by some instructions
              </p>

              <p className={styles.subheaddes}>
                A bit string is a contiguous sequence of bits containing upto 2
                <sup>32</sup>-1 bits.
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

export default Assembly_Data_Types;
