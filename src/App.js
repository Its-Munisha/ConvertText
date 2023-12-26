import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.js';
import Textbox from './Components/Textbox.js';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

// import { BrowserRouter as Router, Routes, Route, Switch, Link } from "react-router-dom";

function App() {


  return (
    <>
      {/* <Router> */}

        <Navbar title="ConvertText" about="AboutCovert" />

        {/* <Routes> */}

          {/* <Route path="/textbox" element={ */}
            <Textbox heading="Enter Text to Convert" />
          {/* } /> */}

          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path='/contact' element={<Contact/>} /> */}

        {/* </Routes> */}

      {/* </Router> */}

    </>
  );
}

export default App;
