import React from "react";
import NavBarPrin from "../NavBarPrin/NavBarPrin";
import SearchBar from "../Search/search";
import "./LandingPage.css"
import backgroundWoman from './backgroundWoman.svg'
import {MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos} from 'react-icons/md'
import {FaRegHeart} from 'react-icons/fa'
import {BsArrowUpRight} from 'react-icons/bs'
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
                <div className="ThemesCards">

                </div>
            </div>
        </div>
    );
}

export default LandingPage