import React,  { useState } from "react";
import './EspaceAdministrateur.css';
import NavBarPrin from "../NavBarPrin/NavBarPrin";
import Footer from "../Footer/Footer";
import styled from 'styled-components';
import siteLogo from './siteLogo.svg'
import {MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos} from 'react-icons/md'
import {FaRegHeart} from 'react-icons/fa'
import {BsArrowUpRight , BsVectorPen} from 'react-icons/bs'
import {GiGraduateCap} from 'react-icons/gi'
import {FaFacebookF , FaInstagram , FaLinkedinIn} from 'react-icons/fa'


const StyledInput5 = styled.input`
display: block;
margin: 8px 0px;
border: 1px ;
`;

function useInput5(defaultValue) {
    const [value, setValue] = useState(defaultValue);
    function onChange(e) {
      setValue(e.target.value);
    }
    return {
      value,
      onChange,
    };
  }

const StyledInput6 = styled.input`
display: block;
margin: 8px 0px;
border: 5px solid;
border: 1px dashed #6D737A;
border-radius: 8px;
`;

function useInput6(defaultValue) {
    const [value, setValue] = useState(defaultValue);
    function onChange(e) {
      setValue(e.target.value);
    }
    return {
      value,
      onChange,
    };
  }

const EspaceAdmin = () => {
    const inputProps5 = useInput5();
    const inputProps6 = useInput6();

    return(
        <div>
            <NavBarPrin/>
            <div className="TitreAdmin">
                <h1 className="adminText1">Espace <span style={{'color':"#20B486"}}>Administrateur</span></h1>
            </div>
            <div className="BackgroundAnnonce">
                <div className="RechercheContainer">
                    <h3 className="TitreAdminCard">Opérations</h3>
                    <div className="InfoAdminCard">
                        <h5 className="TextAdminCard1">Lancer le chargement des annonces</h5>
                        <div className="WebScrapping">
                          <StyledInput5 className="TitreInput5" {...inputProps5} placeholder="Lien vers le Site Web source " />
                          <StyledInput6 className="TitreInput6" {...inputProps6} placeholder="+ Ajouter un autre lien " />
                        </div>
                        <div className="LancerButtonScrapping">
                            <button className="btnLancerScrapping">Lancer</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default EspaceAdmin;