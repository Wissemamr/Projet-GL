import * as React from "react";
import * as ReactDOM from "react-dom";
import LoginForm from "./components/components/Form";
import LandingPage from "./components/components/LandingPage/LandingPage"
import Mesannonce from "./pages/mesannonces/mes_annonces";
import App from "./App";
import {
  Routes,
  Route,
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/components/NavBar/NavBar";
import DeposerUneAnnoce from "./components/components/DeposerUneAnnocer/DeposerUneAnnonce";
import MesOffres from "./components/components/MesOffres/Offres";
import TrouverCours from "./components/components/TrouverCours/TrouverCours";
import PostulerCours from "./components/components/PostulerCours/PostulerCours";
import Search from "./pages/search/search";
import Favoris from "./pages/favoris/favoris";



ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path='/login' element={<LoginForm/>}/>
      <Route path='/navbar' element={<Navbar/>}/>    
      <Route path='/DeposerUneAnnoce' element={<DeposerUneAnnoce/>}/> 
      <Route path='/MesOffres' element={<MesOffres/>}/> 
      <Route path="/PostulerCours" element={<PostulerCours/>} />
      <Route path="/TrouverCours" element={<Search/>} />
      <Route path="/MesAnnonces" element={<Mesannonce/>} />
      <Route path="/MesFavoris" element={<Favoris/>}></Route>
    </Routes>
  </BrowserRouter>
);