import React from 'react';
import {  Link } from "react-router-dom";
import logo from "../../../LogoFinal.svg"
import "./NavBarPrin.css"
import {CgProfile} from 'react-icons/cg'
import {FaRegHeart} from 'react-icons/fa'
import {HiSearch} from 'react-icons/hi'
import {BsChatRightText} from 'react-icons/bs'
import {CiShoppingTag} from 'react-icons/ci'
import {GoDiffAdded} from 'react-icons/go'
import Notification from '../../notification/notification';

const NavBarPrin= () =>{
    return (
      <nav className='NavBarPrin'>
        <div className='elements1'>
          <ul>
          <Link to="/" className='Logo'><img src={logo} alt="logo" /></Link>
          <Link to="/DeposerUneAnnoce" className='btn1'><li className='DepotAnnonce'><GoDiffAdded className='annonce'/>Déposer une annoce</li></Link>
          <Link to='/TrouverCours' className='smallIcon'><li><HiSearch/>Rechercher</li></Link>
          </ul>
        </div>
        <ul>
            <div className='smallIcon'><li><Notification/><p>Mes Notifications</p></li></div>
            <Link to='/MesAnnonces' className='smallIcon'><li><CiShoppingTag /><p>Mes Annonces</p></li></Link>
            <Link to="/MesOffres" className='smallIcon'><li><BsChatRightText/><p>Offres</p></li></Link>
            <Link to='/MesFavoris' className='smallIcon'><li><FaRegHeart/><p>Favoris</p></li></Link>
            <Link to='/Login' className='smallIcon'><li><CgProfile/><p>Se connecter</p></li></Link>
         </ul> 
      </nav>
    );
  }
  export default NavBarPrin;