import React,  { useState } from "react";
import NavBarPrin from "../NavBarPrin/NavBarPrin";
import Footer from "../Footer/Footer";
import styled from 'styled-components';
import "./Offres.css"
import {GiGraduateCap} from 'react-icons/gi'
import {GrLocation, GrClose} from 'react-icons/gr'
import {CgProfile} from 'react-icons/cg'

const MesOffres = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <NavBarPrin/>
            <div className="MesOffresTitre">
                 <h1 className="MesOffresText1">Mes <span style={{'color':"#20B486"}}>Offres</span></h1>
            </div>
            <div className="BackgroundOffres">
                <div className="OffresContainer">
                    <div className="PersonnalInfos">
                        <div className="AnnonceurPersonnalInfos">
                            <h4 className="persoInfos"><CgProfile size={30} className="ProfilePic"/>Annonceur Nom&Prénom</h4>
                        </div>
                    </div>
                    <div className="AnnonceInfos">
                        <div className="TextAnnoceInfos">
                            <h5 className="TitreAnnonceInfos">Titre Annonce</h5>
                            <h5 className="ThemeAnnonceInfos">Thème Annonce</h5>
                            <div className="DetailsAnnonceInfos">
                                <h5 className="NiveauAnnonceInfos"><GiGraduateCap size={20} className="IconNiveauInfosAnnonce"/>Primaire</h5>
                                <h5 className="LocalisationAnnonceInfos"><GrLocation size={20} className="IconLocalisationAnnonce"/>Blida</h5>
                            </div>
                        </div>
                    </div>
                    <div className="ApprovalButtons">
                        <button className="BtnApprouver">Approuver</button>
                        <button className="BtnRejeter">Rejeter</button>
                        <button type="button" onClick={()=> setShow(true)} className="BtnInfos">Plus d'infos</button>
                    </div>
                </div>
                <div className="OffresContainerPopUp">
                 {
                    show && <div className="PopUp-Card">
                                <a type="button" onClick={()=> setShow(false)} className="CloseButton"><GrClose size={20} className="GrClose"/></a>
                                <div className="PopUp-Card-Infos">
                                     <div className="OffresInfosPersonneDetails">
                                        <div className="OffresCardInfosDetails1">
                                            <h4 className="infos1">Nom & Prénom</h4>
                                            <h5 className="mailOffers">exemple@email.com</h5>
                                            <h5 className="numOffers">+213 555 555 555</h5>
                                        </div>
                                        <div className="OffresCardInfosDetails2">
                                            <h4 className="infos2">Nom & Prénom</h4>
                                            <h5 className="titleOffersDetails">Titre</h5>
                                            <h5 className="themeOffersDetails">Thème</h5>
                                            <div className="DetailsAnnonceInfos2">
                                                <h5 className="NiveauAnnonceInfos"><GiGraduateCap size={20} className="IconNiveauInfosAnnonce"/>Primaire</h5>
                                                <h5 className="LocalisationAnnonceInfos"><GrLocation size={20} className="IconLocalisationAnnonce"/>Blida</h5>
                                            </div>
                                        </div>
                                     </div>
                                     <div className="OffresDescriptionDetails">
                                        <h3 className="OffresDescriptionTitre">Description</h3>
                                        <h4 className="OffresDescriptionTexte">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
                                     </div>
                                     <div className="ApprovalButtons2">
                                        <button className="BtnApprouver2">Approuver</button>
                                        <button className="BtnRejeter2">Rejeter</button>
                                    </div>
                                </div>
                            </div>
                 } 
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default MesOffres;