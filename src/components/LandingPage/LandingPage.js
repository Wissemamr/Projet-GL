import React from "react";
import NavBarPrin from "../NavBarPrin/NavBarPrin";
import SearchBar from "../Search/search";
import "./LandingPage.css"
import backgroundWoman from './backgroundWoman.svg'
import backgroundWoman2 from './backgroundWoman2.svg'
import backgroundppl from './backgroundppl.svg'
import {MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos} from 'react-icons/md'
import {FaRegHeart} from 'react-icons/fa'
import {BsArrowUpRight} from 'react-icons/bs'
import {GiGraduateCap} from 'react-icons/gi'
import { useRef } from "react";

function LandingPage() {
    const slides = [1,2,3,4,5,6,7,8];

    const slider = useRef(null);

    const sideLeft = (e) => {
        e.preventDefault();
        slider.current.scrollLeft -= slider.current.offsetWidth;
    }

    const sideRight = (e) => {
        e.preventDefault();
        slider.current.scrollLeft += slider.current.offsetWidth;
    } 

    const slider2 = useRef(null);

    const sideLeft2 = (e) => {
        e.preventDefault();
        slider2.current.scrollLeft -= slider2.current.offsetWidth;
    }

    const sideRight2 = (e) => {
        e.preventDefault();
        slider2.current.scrollLeft += slider2.current.offsetWidth;
    } 

    return (
        <div>
            <NavBarPrin/>
            <div className="landingpage">
                <div className="text">
                    <h3 className="text1">VOTRE DÉPART VERS LE SUCCÈS</h3>
                    <h1 className="text3">Lorem Ipsum 5000+ lorem
                    lorem 300 lorem 
                    et lorem</h1>
                    <h5 className="text2">Le soutien scolaire, comme vous l’avez jamais connu</h5>
                    <SearchBar className="searchBar1"/>
                </div>
                <div className="backgroundWoman">
                    <img src={backgroundWoman} alt='backgroundWoman'></img>
                </div>
            </div>
            <div className="slider1">
                <div className="text4">
                  <h1>Plus <br/><span style={{'color':"#20B486"}}>Populaires</span><br/> <span style={{'color':"#20B486"}}> des Cours</span></h1>
                </div>
                <div className="SliderContainer">
                    <div className="slider" ref={slider}>
                        { slides.map((slide,index)=>{
                            return (
                                <div className="slider-card">
                                    <div className="slider-card-image">
                                    </div>
                                    <div className="slider-card-info">
                                        <p>Infos</p>
                                    </div>
                                    <div className="slider-card-options">
                                        <p className="prix">1000DA</p>
                                        <div className="icons-options">
                                            <FaRegHeart size={26} className="heart"/>
                                            <BsArrowUpRight size={26} className="fleche"/>
                                        </div>
                                    </div>
                                </div>
                            )
                         })

                        }
                    </div>
                    <div className="Arrows">
                        <MdOutlineArrowBackIosNew size={20} className="slider-icon-left" onClick={sideLeft}/>
                        <MdOutlineArrowForwardIos size={20} className="slider-icon-right" onClick={sideRight}/>
                    </div>
                </div>
            </div>
            <div className="Themes">
                <div className="text5">
                <h1>Plus <span style={{'color':"#20B486"}}>Populaires</span><span style={{'color':"#20B486"}}> des Thémes</span></h1>
                </div>
                <div className="text6">
                    <h5>Ameliorer vos  rendements dans  des modules précis</h5>
                </div>
                <div className="ThemesCards" >
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="Instructeurs">
                <div className="text7">
                  <h1>Nos Meilleurs<span style={{'color':"#20B486"}}> Instructeurs</span></h1>
                </div>
                <div className="text8">
                    <h5>Lorem lorem lorem lorem lorem lorem</h5>
                </div>
                  <div className="slider2">
                    <div className="SliderContainer">
                        <div className="slider22" ref={slider2}>
                            { slides.map((slide,index)=>{
                                return (
                                    <div className="slider-card">
                                        <div className="slider-card-image1">
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
                            <MdOutlineArrowBackIosNew size={20} className="slider-icon-left" onClick={sideLeft2}/>
                            <MdOutlineArrowForwardIos size={20} className="slider-icon-right" onClick={sideRight2}/>
                        </div>
                    </div>
                </div>  
            </div>
            <div className="landingpage2">
                <div className="text11">
                    <h1 className="text9">Nos <span style={{'color':"#20B486"}}> Niveaux</span></h1>
                    <h5 className="text10"><span style={{'color':"#6D737A"}}>Des cours disponible pour les trois phase scolaire</span></h5>
                    <div className="Niveaux">
                        <h2> 
                        <GiGraduateCap size={30} className="nv1"/> Primaire
                        </h2>
                        <h2 className="college"> 
                        <GiGraduateCap size={30} className="nv2"/> Collège
                        </h2>
                        <h2> 
                        <GiGraduateCap size={30} className="nv3"/> Lycée
                        </h2>
                    </div>
                </div>
                <div className="backgroundWoman2">
                    <img src={backgroundWoman2} alt='backgroundWoman2'></img>
                </div>
            </div>
            <div className="landingpage3">
            <div className="backgroundppl">
                    <img src={backgroundppl} alt='backgroundppl'></img>
                </div>
                <div className="paragraph1">
                    <h2 className="textParagraph1">
                     Rejoingnez <span style={{'color':"#20B486"}}> la première </span><br/>platforme de soutien <br/>scolaire en <span style={{'color':"#20B486"}}> Algérie </span>
                    </h2>
                    <button className="btnInsc">S'inscrire gratuitement</button>
                </div>
            </div>
        </div>
    );
}

export default LandingPage