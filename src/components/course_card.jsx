import React from "react"
import pict1 from '../assets/images/pict1.jpg'
import NiveauIcon from "./gradHat";
import locIcon from "../assets/vectors/location.svg"
import AjouterFav from "./ajouterFav";
import Visit from "./visitArrow";


const Card = (props) => {
    return ( 
    <div className="bg-white flex flex-col justify-center gap-[16px] items-center p-4 rounded-2xl ">
        {/* Image Display */}

        <div className="relative ">
            <img src={pict1} alt='coursePic' className="rounded-xl" />
            <div className="bg-white bg-opacity-60 absolute left-2 top-2 p-1 rounded text-xs ">
                Lorem
            </div>
        </div>

        {/* Profile name + Picture  */}
        <div className="flex justify-start items-center gap-[10px] w-full" >
            <img src={pict1} alt='announcerPic' className="rounded-full h-[40px] w-[40px]" />
            <p>Lorem Ipsum</p>
        </div>

        {/* Description */}
        <p className="w-full ">Various versi...</p>
        
        {/* Niveau & Ville */}
        <div className="flex flex-row content-center w-full">
            <div className="flex justify-start items-center gap-[5px] w-full " >
                <NiveauIcon level="primaire" ></NiveauIcon>            
                <p className="text-myGreen">Lorem Ipsum</p>
            </div>
            <div className="flex justify-end items-center gap-[10px] w-full " >
                <img src={locIcon} alt="location_icon" className="w-[16px] h-[20px]"/>            
                <p>Blida</p>
            </div>
        </div>
        
        <hr className="bg-justGray h-[1px] w-full"></hr>
        
        {/* Price and Cta buttons */}
        <div className="flex flex-row content-center w-full">
            <div className="flex justify-start items-center gap-[5px] w-full " >            
                <p>1000</p>
                <p>DA</p>
            </div>
            <div className="flex justify-end items-center gap-[10px] w-full " >
                <AjouterFav/>
                <Visit/>
            </div>
        </div>
    </div>);
}

export default Card;