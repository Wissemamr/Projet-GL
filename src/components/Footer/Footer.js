import React,  { useState } from "react";
import styled from 'styled-components';
import siteLogo from './siteLogo.svg'
import {MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos} from 'react-icons/md'
import {FaRegHeart} from 'react-icons/fa'
import {BsArrowUpRight , BsVectorPen} from 'react-icons/bs'
import {GiGraduateCap} from 'react-icons/gi'
import {FaFacebookF , FaInstagram , FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="footerSec1">
                    <div className="siteLogo"> 
                     <img src={siteLogo} alt='siteLogo'></img>
                    </div> 
                    <div className="textUnderLogo">
                        <h4>Contactez nous</h4>
                        <h5 className="minitextUnderLogo">+213 555 555 555 <br/> Lorem place, Lorem Adress. <br/> example@mail.com</h5>
                        <div className="contactIcons">
                          <FaFacebookF className="miniIcon" size={30}/>
                          <FaInstagram className="miniIcon" size={30}/>
                          <FaLinkedinIn className="miniIcon" size={30}/>
                        </div>
                    </div>
                </div>
                <div className="footerSec2">
                        <div className="exploreFooter">
                            <h3>Explore</h3>
                            <div className="exploreUnderText">
                                <a href="#" style={{'color':'#6D737A'}}>Home</a>
                                <br/>
                                <a href="#" style={{'color':'#6D737A'}}>Cours</a>
                                <br/>
                                <a href="#" style={{'color':'#6D737A'}}>Thèmes</a>
                                <br/>
                                <a href="#" style={{'color':'#6D737A'}}>Instructeurs</a>
                                <br/>
                                <a href="#" style={{'color':'#6D737A'}}>Niveaux</a>
                                <br/>
                                <a href="#" style={{'color':'#6D737A'}}>Contact</a>
                            </div>
                        </div>
                        <div className="themesFooter">
                            <h3>Thèmes</h3>
                            <div className="themesUnderText">
                                <a href="#" style={{'color':'#6D737A'}}>Math</a>
                                <br/>
                                <a href="#" style={{'color':'#6D737A'}}>Physique</a>
                                <br/>
                                <a href="#" style={{'color':'#6D737A'}}>Français</a>
                                <br/>
                                <a href="#" style={{'color':'#6D737A'}}>Anglais</a>
                                <br/>
                                <a href="#" style={{'color':'#6D737A'}}>Espagnol</a>
                            </div>
                        </div>
                        <div className="categoriesFooter">
                            <h3>Catégories</h3>
                            <div className="categoriesUnderText">
                                <a href="#" style={{'color':'#6D737A'}}>Primaire</a>
                                <br/>
                                <a href="#" style={{'color':'#6D737A'}}>Collège</a>
                                <br/>
                                <a href="#" style={{'color':'#6D737A'}}>Lycée</a>
                                <br/>
                                <a href="#" style={{'color':'#6D737A'}}>Université</a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
} 

export default Footer;