import React from "react";
import gradIconBlue from '../assets/vectors/GraduationCapBlue.svg'
import gradIconGreen from '../assets/vectors/GraduationCapGreen.svg'
import gradIconRed from '../assets/vectors/GraduationCapRed.svg'

const NiveauIcon = (props) => {
    const lv = props.level
    if (lv === 'Collége') {
        return <div className=" w-fit bg-myLightRed p-[10px] rounded-lg ">
                    <img src={gradIconRed} alt='gradIcon' className="h-[20px] w-[20px]" /> 
                </div>;
    } else if (lv === 'Primaire') {
        return  <div className=" w-fit bg-myLightGreen p-[10px] rounded-lg ">
                    <img src={gradIconGreen} alt='gradIcon' className="h-[20px] w-[20px]" /> 
                </div>;
    } else if (lv === 'Lycée'){
        return  <div className=" w-fit bg-myLightBlue p-[10px] rounded-lg ">
                    <img src={gradIconBlue} alt='gradIcon' className="h-[20px] w-[20px]" /> 
                </div>;
    }
    return ( <div className="w-fit bg-gray-400 p-[10px] rounded-lg ">
            <img src={gradIconRed} alt='gradIcon' className="h-[20px] w-[20px]" /> 
       </div> );
}
 
export default NiveauIcon;