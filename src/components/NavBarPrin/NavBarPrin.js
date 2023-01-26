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
          <button className='btn1'><li className='DepotAnnonce'><GoDiffAdded className='annonce'/>Déposer une annoce</li></button>
          <Link className='rechercher'><li><HiSearch className='recherche'/>Rechercher</li></Link>
          </ul>
        </div>
        <ul>
            <Link className='annonces'><li><CiShoppingTag className='mesAnnonces'/>Mes Annonces</li></Link>
            <Link className='offres'><li><BsChatRightText className='mesOffres'/>Offres</li></Link>
            <Link className='favoris'><li><FaRegHeart className='mesFavoris'/>Favoris</li></Link>
            <Link to='/Login' className='connexion'><li><CgProfile className='CgProfile'/>Se connecter</li></Link>
         </ul> 
      </nav>
    );
  }
  export default NavBarPrin;