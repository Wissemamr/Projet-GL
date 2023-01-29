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
                                <a type="button" onClick={()=> setShow(false)} className="CloseButton"><GrClose/></a>
                                <div className="PopUp-Card-Infos">
                                    <h2>INFOS</h2>
                                    <h4>more infos</h4>
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