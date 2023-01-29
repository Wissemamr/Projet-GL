import React,  { useState } from "react";
import './DeposerUneAnnonce.css';
import {  Link } from "react-router-dom";
import NavBarPrin from "../NavBarPrin/NavBarPrin";
import styled from 'styled-components';
import siteLogo from './siteLogo.svg'
import {MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos} from 'react-icons/md'
import {FaRegHeart} from 'react-icons/fa'
import {BsArrowUpRight , BsVectorPen} from 'react-icons/bs'
import {GiGraduateCap} from 'react-icons/gi'
import {FaFacebookF , FaInstagram , FaLinkedinIn} from 'react-icons/fa'



const StyledInput = styled.input`
display: block;
margin: 8px 0px;
border: 1px solid ;
`;

function useInput(defaultValue) {
    const [value, setValue] = useState(defaultValue);
    function onChange(e) {
      setValue(e.target.value);
    }
    return {
      value,
      onChange,
    };
  }

  /***************************************/
        const checkboxesList = [
            'Primaire',
            'Collège',
            'Lycée',
        ];
        const getDefaultCheckboxes = () =>
            checkboxesList.map(checkbox => ({
            name: checkbox,
            checked: false,
            }));
        export function useCheckboxes(defaultCheckboxes) {
            const [checkboxes, setCheckboxes] = useState(
            defaultCheckboxes || getDefaultCheckboxes(),
            );
            function setCheckbox(index, checked) {
            const newCheckboxes = [...checkboxes];
            newCheckboxes[index].checked = checked;
            setCheckboxes(newCheckboxes);
            }
            return {
            setCheckbox,
            checkboxes,
            };
        }
        const Checkbox = styled.input`
            margin: 0px 10px 0px !important;
            cursor: pointer;
        `;
        const CheckboxLabel = styled.label`
            color : #212121;
            display: block;
            font-weight: normal;
        `;

        export function Checkboxes({ checkboxes, setCheckbox }) {
            return (
            <>
                {checkboxes.map((checkbox, i) => (
                <CheckboxLabel>
                    <Checkbox
                    type="checkbox"
                    checked={checkbox.checked}
                    onChange={e => {
                        setCheckbox(i, e.target.checked);
                    }}
                    />
                    {checkbox.name}
                </CheckboxLabel>
                ))}
            </>
            );
        }
  /*************************************/
                const checkboxesList2 = [
                    'Hors-Ligne',
                    'En-Ligne',
                ];
                const getDefaultCheckboxes2 = () =>
                    checkboxesList2.map(checkbox2 => ({
                    name: checkbox2,
                    checked: false,
                    }));
                export function useCheckboxes2(defaultCheckboxes) {
                    const [checkboxes2, setCheckboxes2] = useState(
                    defaultCheckboxes || getDefaultCheckboxes2(),
                    );
                    function setCheckbox2(index, checked) {
                    const newCheckboxes2 = [...checkboxes2];
                    newCheckboxes2[index].checked = checked;
                    setCheckboxes2(newCheckboxes2);
                    }
                    return {
                    setCheckbox2,
                    checkboxes2,
                    };
                }
                const Checkbox2 = styled.input`
                    margin: 0px 10px 0px !important;
                    cursor: pointer;
                `;
                const CheckboxLabel2 = styled.label`
                    color : #212121;
                    display: block;
                    font-weight: normal;
                `;

                export function Checkboxes2({ checkboxes2, setCheckbox2 }) {
                    return (
                    <>
                        {checkboxes2.map((checkbox2, i) => (
                        <CheckboxLabel>
                            <Checkbox
                            type="checkbox"
                            checked={checkbox2.checked}
                            onChange={e => {
                                setCheckbox2(i, e.target.checked);
                            }}
                            />
                            {checkbox2.name}
                        </CheckboxLabel>
                        ))}
                    </>
                    );
                }

  /***********************************/

  /**********************************/

        const StyledInput2 = styled.input`
        display: block;
        margin: 8px 0px;
        border: 1px solid ;
        `;

        function useInput2(defaultValue) {
            const [value, setValue] = useState(defaultValue);
            function onChange(e) {
            setValue(e.target.value);
            }
            return {
            value,
            onChange,
            };
        }

  /*********************************/

  /*********************************/
        const StyledInput3 = styled.input`
        display: block;
        margin: 8px 0px;
        border: 1px solid ;
        `;

        function useInput3(defaultValue) {
            const [value, setValue] = useState(defaultValue);
            function onChange(e) {
            setValue(e.target.value);
            }
            return {
            value,
            onChange,
            };
        }
  /********************************/

  /********************************/
        const StyledInput4 = styled.input`
        display: block;
        margin: 8px 0px;
        border: 1px solid ;
        `;

        function useInput4(defaultValue) {
            const [value, setValue] = useState(defaultValue);
            function onChange(e) {
            setValue(e.target.value);
            }
            return {
            value,
            onChange,
            };
        }

  /********************************/


function DeposerUneAnnoce() {
      const checkboxes = useCheckboxes();
      const checkboxes2 = useCheckboxes2();
      const inputProps = useInput();
      const inputProps2 = useInput2();
      const inputProps3 = useInput3();
      const inputProps4 = useInput4();

      const [file, setFile] = useState();
      function handleChange(e) {
          console.log(e.target.files);
          setFile(URL.createObjectURL(e.target.files[0]));
      }
      
    return (
        <div>
          <NavBarPrin/>
          <div className="DeposerAnnonce">
                <h1 className="annonceText1">Déposer une <span style={{'color':"#20B486"}}>annonce</span></h1>
                <h4 className="annonceText2">Veuillez remplir le formulaire suivant !</h4>
                <div className="TitreInput">
                    <h5 className="Input1">Quel est le titre de l’annonce ?</h5>
                    <StyledInput className="TitreInput2" {...inputProps} />
                    {/*<span>Value: {inputProps.value} </span> */ }
                </div>
                <div className="LineSeparator"></div>
                <div className="ModuleInput">
                    <h5 className="Input1">Quel est le thème ou module enseigné ?</h5>
                    <select className="SelectInput" id="ModuleList">
                                    <option value="" selected>Module</option>
                                    <option value="Analyse">Analyse</option>
                                    <option value="Algèbre">Algèbre</option>
                                    <option value="Archi">Archi</option>
                    </select>
                </div>
                <div className="LineSeparator"></div>
                <div className="NiveauxInput">
                    <h5 className="Input1">Choisissez un niveau suggéré</h5>
                    <Checkboxes {...checkboxes} />
                    {/* <span>
                        Value:
                        {checkboxes.checkboxes
                        .filter(t => t.checked)
                        .map(checkbox => checkbox.name)
                        .join(', ')}
                        </span> */ }
                </div>
                <div className="LineSeparator"></div>
                <div className="ModaliteInput">
                    <h5 className="Input1">Choisir la modalité</h5>
                    <Checkboxes2 {...checkboxes2} />
                    { /* <span>
                        Value:
                        {checkboxes2.checkboxes2
                        .filter(t => t.checked)
                        .map(checkbox2 => checkbox2.name)
                        .join(', ')}
                        </span> */ }
                </div>
                <div className="LineSeparator"></div>
                <div className="LocalisationInput">
                    <h5 className="Input1">La localisation de votre service  ?</h5>
                    <div className="LocalisationInput2">
                        <select className="SelectInput" id="WilayaList">
                                        <option value="" selected>Wilaya</option>
                                        <option value="Analyse">Analyse</option>
                                        <option value="Algèbre">Algèbre</option>
                                        <option value="Archi">Archi</option>
                        </select>
                        <select className="SelectInput" id="CommuneList">
                                        <option value="" selected>Commune</option>
                                        <option value="Analyse">Analyse</option>
                                        <option value="Algèbre">Algèbre</option>
                                        <option value="Archi">Archi</option>
                        </select>
                    </div>
                </div>
                <div className="LineSeparator"></div>
                <div className="AdresseInput">
                    <h5 className="Input1">Veuillez Introduire l’adresse compléte :</h5>
                    <StyledInput2 className="TitreInput2" {...inputProps2} />
                    {/*<span>Value: {inputProps2.value} </span>*/}
                </div>
                <div className="LineSeparator"></div>
                <div className="DescriptionInput">
                    <h5 className="Input1">Description</h5>
                    <StyledInput3 className="TitreInput3" {...inputProps3} />
                    {/*<span>Value: {inputProps3.value} </span> */}
                </div>
                <div className="LineSeparator"></div>
                <div className="PrixInput">
                    <h5 className="Input1">Quel le prix par heure de ce service  ?</h5>
                    <StyledInput4 className="TitreInput2" {...inputProps4} />
                    {/*<span>Value: {inputProps4.value} </span>*/}
                </div>
                <div className="LineSeparator"></div>
                <div className="PhotoInput">
                    <h5 className="Input1">Veuillez uploader des photos pour l’annonce </h5>
                    <div className="UploadPhoto">
                        <input type="file" onChange={handleChange} />
                        <img src={file} />
                    </div>
                    <div className="LancerButton">
                       <button className="btnLancer">Lancer</button>
                    </div>
                </div>
          </div>
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

export default DeposerUneAnnoce