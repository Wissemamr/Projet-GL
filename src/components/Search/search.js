import React from "react";
import "./search.css"
import {AiOutlineSearch} from "react-icons/ai"

const SearchBar = () => (
    <form className="Search" action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Que voulez-vous apprendre ?</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Que voulez-vous apprendre ?"
            name="s" 
        />
        <AiOutlineSearch className="loupe"/>
    </form>
);

export default SearchBar;