import React from "react";
import "./search.css"
import {AiOutlineSearch} from "react-icons/ai"

const SearchBar = () => (
    <form className="SearchForm" action="/" method="get">
        <div className="Search">
        <input
            type="search"
            id="header-search"
            placeholder="Que voulez-vous apprendre ?"
            name="s" 
        />
        <AiOutlineSearch className="loupe"/>
        </div>
    </form>
);

export default SearchBar;