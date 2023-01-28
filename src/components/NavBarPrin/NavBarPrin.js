import React from 'react';
import {  Link } from "react-router-dom";
import logo from "../../Frame 105.png"
import "./NavBarPrin.css"
import {CgProfile} from 'react-icons/cg'
import {FaRegHeart} from 'react-icons/fa'
import {HiSearch} from 'react-icons/hi'
import {BsChatRightText} from 'react-icons/bs'
import {CiShoppingTag} from 'react-icons/ci'
import {GoDiffAdded} from 'react-icons/go'


const NavBarPrin= () =>{
    return (
      <nav className='NavBarPrin'>
        <div className='elements1'>
          <ul>
          <Link to="/" className='Logo'><img src={logo} alt="logo" /></Link>
          <Link to="/DeposerUneAnnoce" className='btn1'><li className='DepotAnnonce'><GoDiffAdded className='annonce'/>Déposer une annoce</li></Link>
          <Link className='smallIcon'><li><HiSearch/>Rechercher</li></Link>
          </ul>
        </div>
        <ul>
            <Link className='smallIcon'><li><CiShoppingTag /><p>Mes Annonces</p></li></Link>
            <Link className='smallIcon'><li><BsChatRightText/><p>Offres</p></li></Link>
            <Link className='smallIcon'><li><FaRegHeart/><p>Favoris</p></li></Link>
            <Link to='/Login' className='smallIcon'><li><CgProfile/><p>Se connecter</p></li></Link>
         </ul> 
      </nav>
    );
  }
  export default NavBarPrin;