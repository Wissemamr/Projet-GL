import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes, Form, Link } from "react-router-dom";
import LoginForm from './components/Form';
import Navbar from './components/NavBar/NavBar';
import './app.css'
import NavBarPrin from './components/NavBarPrin/NavBarPrin';
import LandingPage from './components/LandingPage/LandingPage';
import { useMediaQuery } from 'react-responsive'


function App() {
  return (
    <div>
      <LandingPage/>
    </div>
  );
}

export default App;

