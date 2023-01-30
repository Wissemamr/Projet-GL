import React from "react"
//import pict1 from '../assets/images/pict1.jpg'
import pict2 from '../assets/images/pict1.jpg'
import NiveauIcon from "./gradHat";
import locIcon from "../assets/vectors/location.svg"
import AjouterFav from "./ajouterFav";
import Visit from "./visitArrow";


const Card = (props) => {
    return ( 
    <div className="bg-white flex flex-col justify-center gap-[16px] items-center p-4 rounded-2xl w-[312px] shadow-md">
        {/* Image Display */}
        <div className="relative container ">
            <img src={pict2} alt='coursePic' className="h-[210px] w-full object-cover rounded-xl" />
            <div className="bg-white bg-opacity-60 absolute left-2 top-2 p-1 rounded text-base font-publicSans font-medium  ">
                Lorem
            </div>
        </div>

        {/* Profile name + Picture  */}
        <div className="flex justify-start items-center gap-[10px] w-full" >
            <img src={pict2} alt='announcerPic' className="object-cover  rounded-full h-[40px] w-[40px]" />
            <p className="text-xl font-publicSans font-medium">Lorem Ipsum</p>
        </div>

        {/* Description */}
        <p className="w-full text-xl font-publicSans font-medium">Various versi...</p>
        
        {/* Niveau & Ville */}
        <div className="flex flex-row content-center w-full">
            <div className="flex justify-start items-center gap-[5px] w-full " >
                <NiveauIcon level="Primaire" ></NiveauIcon>            
                <p className="text-myGreen text-lg font-publicSans font-medium">Primaire</p>
            </div>
            <div className="flex justify-end items-center gap-[10px] w-full " >
                <img src={locIcon} alt="location_icon" className="w-[16px] h-[20px]"/>            
                <p className="text-xl font-publicSans font-medium text-gray-600">Blida</p>
            </div>
        </div>
        
        <hr className="bg-justGray h-[1px] w-full"></hr>
        
        {/* Price and Cta buttons */}
        <div className="flex flex-row content-center w-full">
            <div className="flex justify-start items-center gap-[5px] w-full text-2xl font-publicSans font-semibold" >            
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