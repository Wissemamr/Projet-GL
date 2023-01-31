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
          <li><Link to="/" ><img src={logo} alt="logo" /></Link></li>
          <Link to="/DeposerUneAnnoce" className='btn1'>
          <li className='depotAnnonceTest'>
            <GoDiffAdded className=''/>
            <p>Déposer une annoce</p>
          </li>
          </Link>
          <Link to='/TrouverCours' className='smallIcon'><li><HiSearch/>Rechercher</li></Link>
          </ul>
        </div>
        <ul>
            <div className='smallIcon'><li><Notification/><p>Mes Notifications</p></li></div>
            <Link to='/MesAnnonces' className='smallIcon'><li><CiShoppingTag className='text-3xl'/><p>Mes Annonces</p></li></Link>
            <Link to="/MesOffres" className='smallIcon'><li><BsChatRightText className='text-2xl'/><p>Offres</p></li></Link>
            <Link to='/MesFavoris' className='smallIcon'><li><FaRegHeart className='text-2xl'/><p>Favoris</p></li></Link>
            <Link to='/Login' className='smallIcon'><li><CgProfile className='text-2xl'/><p>Se connecter</p></li></Link>
         </ul> 
      </nav>
    );
  }
  export default NavBarPrin;