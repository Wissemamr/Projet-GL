import React from "react";
import NavBarPrin from "../NavBarPrin/NavBarPrin";
import SearchBar from "../Search/search";
import "./LandingPage.css"

function LandingPage() {
    return (
        <div>
            <NavBarPrin/>
            <div className="landingpage">
                <h3 className="text1">VOTRE DÉPART VERS LE SUCCÈS</h3>
                <h5 className="text2">Le soutien scolaire, comme vous l’avez jamais connu</h5>
                <SearchBar/>
                <div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage