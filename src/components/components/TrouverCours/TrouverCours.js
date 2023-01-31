import React , { useState } from "react";
import NavBarPrin from "../NavBarPrin/NavBarPrin";
import Footer from "../Footer/Footer";
import './TrouverCours.css'
import styled from 'styled-components';
import { useRef } from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import {MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos} from 'react-icons/md'



const TrouverCours = () => {

        const slides = [1,2,3,4,5,6,7,8];

        const slider3 = useRef(null);

        const sideLeft3 = (e) => {
            e.preventDefault();
            slider3.current.scrollLeft -= slider3.current.offsetWidth;
        }

        const sideRight3 = (e) => {
            e.preventDefault();
            slider3.current.scrollLeft += slider3.current.offsetWidth;
        } 

        const navigate = useNavigate();

        const navigateToPostulerCours = () => {
            navigate('/PostulerCours');
          };

    return (
        <div>
            <NavBarPrin/>
            <div className="TrouverCoursContainer">
                <div>
                    <h1 className="TrouverCoursTitre">Trouver votre <span style={{'color':"#20B486"}}>cours</span></h1>
                    <div className="TrouverCoursCard">
                        <div className="TrouverCoursCard1">
                            <div className="TrouverCours1Pics">
                                <div className="Picture11">
                                </div>
                                <div className="Picture20">
                                    <div className="Picture211"></div>
                                    <div className="Picture221"></div>
                                </div>
                            </div>
                            <div className="PostulerCours1Text">
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h3>
                                <h5>Blida • 2022 • Theme • Niveau </h5>
                                <h4>1000 Da /heure </h4>
                                <h5>Publié le DD/MM/YYYY à HH:MM</h5>
                            </div>
                        </div>
                        <div className="PostulerCoursCard22">
                            <h3 className="Infos1PostulerCours">Nom & Prénom</h3>
                            <div className="PostulerCoursPersonnalInfos">
                                <h5>exemple@email.com</h5>
                                <h5>+213 555 555 555</h5>
                                <h5>Lorem Ipsum, lorem Ipsum, Algerie</h5>
                            </div>
                            <button onClick={navigateToPostulerCours} className="InscriptionCours">S'inscrire au cours</button>
                        </div>
                    </div>
                    <div className="LineSeparator3"></div>
                    <div className="TrouverCoursCritère">
                        <h3 className="TrouverCoursText">Critères</h3>
                        <div className="TrouverCoursCr">
                            <h4 className="critereText">Niveau</h4>
                            <h4 className="critereText"><span style={{'color':"#20B486"}}>Primaire</span> <br/> 5ème année primaire</h4>
                       </div>
                       <div className="TrouverCoursCr">
                            <h4 className="critereText">Modalité </h4>
                            <h4 className="critereText">Hors-Ligne ( en présentiel )</h4>
                       </div>
                       <div className="TrouverCoursCr">
                            <h4 className="critereText">Thème</h4>
                            <h4 className="critereText">Anglais</h4>
                       </div>
                    </div>
                    <div className="LineSeparator3"></div>
                    <div className="TrouverCoursDescription">
                        <h3 className="TrouverCoursText">Description</h3>
                        <div className="textDescriptionTrouverCours">
                          <h5 className="textDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
                        </div>
                    </div>
                    <div className="LineSeparator3"></div>
                    <div className="TrouverCoursLocation">
                        <h3 className="TrouverCoursText">Location</h3>
                        <h4 className="textDesc2">1 rue BabEdzair, Blida, Algérie</h4>
                        <div>
                            
                        </div>
                    </div>
                    <div className="LineSeparator3"></div>
                    <div className="TrouverCoursSlider">
                        <h3 className="TrouverCoursText">Ces annonces peuvent vous intéresser</h3>
                    </div>
                    <div className="slider3">
                        <div className="SliderContainerTC">
                            <div className="slider33" ref={slider3}>
                                { slides.map((slide,index)=>{
                                    return (
                                        <div className="slider-cardTC">
                                            <div className="slider-card-imageTC">
                                            </div>
                                            <div className="slider-card-Title">
                                                <p>Title</p>
                                            </div>
                                            <div className="slider-card-Description">
                                                <p>Description</p>
                                            </div>
                                        </div>
                                    )
                                })
                                }
                            </div>
                            <div className="Arrows">
                                <MdOutlineArrowBackIosNew size={20} className="slider-icon-left" onClick={sideLeft3}/>
                                <MdOutlineArrowForwardIos size={20} className="slider-icon-right" onClick={sideRight3}/>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default TrouverCours;