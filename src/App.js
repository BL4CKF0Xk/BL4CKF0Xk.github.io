import React from "react";
import "./App.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import DevSecOps from "./routes/DevSecOps";

import Introhtbacademy from "./routes/projects/Introhtbacademy";
import Wayofthinking from "./routes/projects/Wayofthinking";
import Wayoflearning from "./routes/projects/Wayoflearning";
import Assemblydatatypes from "./routes/projects/Assembly_Data_Types";
import Pentestingbasics from "./routes/projects/Pentestingbasics";
import Bash from "./routes/projects/Bash";
import Basictools from "./routes/projects/Basic_Tools";
import MakingShellCode from "./routes/projects/MakingShellCode";

import DevVsSec from "./routes/devsecops/DevVsSec";

import ScrollToTop from "./components/ScrollTop";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/devsecops" element={<DevSecOps />} />
        <Route
          path="/projects/intro-to-htb-academy"
          element={<Introhtbacademy />}
        />
        <Route path="/projects/Way-of-thinking" element={<Wayofthinking />} />
        <Route path="/projects/Way-of-learning" element={<Wayoflearning />} />
        <Route
          path="/projects/Assembly_Data_Types"
          element={<Assemblydatatypes />}
        />
        <Route
          path="/projects/Pentestingbasics"
          element={<Pentestingbasics />}
        />
        <Route path="/projects/Bash" element={<Bash />} />
        <Route path="/projects/Basic_Tools" element={<Basictools />} />
        <Route
          path="/projects/Making_Shellcode"
          element={<MakingShellCode />}
        />

        <Route path="/devsecops/DevVsSec" element={<DevVsSec />} />
      </Routes>
    </>
  );
}

export default App;
