import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes, Form, Link } from "react-router-dom";
import LoginForm from './components/components/Form';
import Navbar from './components/components/NavBar/NavBar';
import './App.css'
import NavBarPrin from './components/components/NavBarPrin/NavBarPrin';
import LandingPage from './components/components/LandingPage/LandingPage';
import PostulerCours from './components/components/PostulerCours/PostulerCours';
import TrouverCours from './components/components/TrouverCours/TrouverCours';
import { useMediaQuery } from 'react-responsive'
import EspaceAdmin from './components/components/EspaceAdministrateur/EspaceAdministrateur';
import Search from "./pages/search/search.jsx"



function App() {
  return (
    <div>
      <LandingPage></LandingPage>
    </div>
  );
}
export default App;