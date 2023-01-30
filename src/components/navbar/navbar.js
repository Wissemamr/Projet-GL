import React from 'react';
// import {  Link } from "react-router-dom";
import logo from "../../assets/images/schoolersLogo.png"
import "./navbar.css"
import {CgProfile} from 'react-icons/cg'
import {FaRegHeart} from 'react-icons/fa'
import {HiSearch} from 'react-icons/hi'
import {BsChatRightText} from 'react-icons/bs'
import {CiShoppingTag} from 'react-icons/ci'
import {GoDiffAdded} from 'react-icons/go'
import Notification from '../notification/notification';

const NavBarPrin= () =>{
    return (
      <nav className='NavBarPrin'>
        <div className='elements1'>
          <ul>
          <div className='Logo'><img src={logo} alt="logo" /></div>
          <div className='btn1'><li className='DepotAnnonce'><GoDiffAdded className='annonce'/>Déposer une annoce</li></div>
          <div className='smallIcon'><li><HiSearch/>Rechercher</li></div>
          </ul>
        </div>
        <ul>
            <div className='smallIcon'><li><Notification/><p>Mes Annonces</p></li></div>
            <div className='smallIcon'><li><CiShoppingTag /><p>Mes Annonces</p></li></div>
            <div className='smallIcon'><li><BsChatRightText/><p>Offres</p></li></div>
            <div className='smallIcon'><li><FaRegHeart/><p>Favoris</p></li></div>
            <div className='smallIcon'><li><CgProfile/><p>Se connecter</p></li></div>
        </ul> 
      </nav>
    );
  }
  export default NavBarPrin;