import React , { useState } from "react";
import NavBarPrin from "../NavBarPrin/NavBarPrin";
import Footer from "../Footer/Footer";
import './PostulerCours.css'
import styled from 'styled-components';


const StyledTextArea2 = styled.textarea`
    display: block;
    border: 1px solid ;
`;

function useInput7(defaultValue) {
    const [value, setValue] = useState(defaultValue);
    function onChange(e) {
      setValue(e.target.value);
    }
    return {
      value,
      onChange,
    };
  }

const PostulerCours = () => {

    const inputProps7 = useInput7();

    return (
        <div>
            <NavBarPrin/>
            <div className="PostulerCoursTitre">
                <h1 className="PostulerCoursText1">Postuler pour un <span style={{'color':"#20B486"}}>cours</span></h1>
            </div>
            <h3 className="PostulerCoursText2">Veuillez remplire la description si vous avez une offre personaliser à faire !</h3>
            <div className="PostulerCoursCard">
                <div className="PostulerCoursCard1">
                    <div className="PostulerCours1Pics">
                        <div className="Picture1">
                        </div>
                        <div className="Picture2">
                            <div className="Picture21"></div>
                            <div className="Picture22"></div>
                        </div>
                    </div>
                    <div className="PostulerCours1Text">
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h3>
                    </div>
                </div>
                <div className="PostulerCoursCard2">
                    <h3 className="Infos1PostulerCours">Nom & Prénom</h3>
                    <div className="PostulerCoursPersonnalInfos">
                        <h5>exemple@email.com</h5>
                        <h5>+213 555 555 555</h5>
                        <h5>Lorem Ipsum, lorem Ipsum, Algerie</h5>
                    </div>
                </div>
            </div>
            <div className="LineSeparator2"></div>
            <div className="PostulerCoursDescription">
                <h3 className="PostulerCoursDescriptionText">Description ( optionnel )</h3>
                <StyledTextArea2 className="TitreInput7" {...inputProps7} />
                    {/*<span>Value: {inputProps7.value} </span> */}
            </div>
            <div className="PostulerButton">
               <button className="btnPostuler">Postuler</button>
            </div>
            <Footer/>
        </div>
    );
}

export default PostulerCours