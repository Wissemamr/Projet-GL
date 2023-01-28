import * as React from "react";
import * as ReactDOM from "react-dom";
import LoginForm from "./components/Form";
import LandingPage from "./components/LandingPage/LandingPage"
import App from "./App";
import {
  Routes,
  Route,
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import DeposerUneAnnoce from "./components/DeposerUneAnnocer/DeposerUneAnnonce";



ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path='/login' element={<LoginForm/>}/>
      <Route path='/navbar' element={<Navbar/>}/>    
      <Route path='DeposerUneAnnoce' element={<DeposerUneAnnoce/>}/> 
    </Routes>
  </BrowserRouter>
);