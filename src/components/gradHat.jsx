import React from "react";
import gradIconBlue from '../assets/vectors/GraduationCapBlue.svg'
import gradIconGreen from '../assets/vectors/GraduationCapGreen.svg'
import gradIconRed from '../assets/vectors/GraduationCapRed.svg'

const nvIcon = (props) => {
    const lv = props.level
    if (lv === 'collége') {
        return <div className=" w-fit bg-myLightRed p-[10px] rounded-lg ">
                    <img src={gradIconRed} alt='gradIcon' className="h-[20px] w-[20px]" /> 
                </div>;
    } else if (lv === 'primaire') {
        return  <div className=" w-fit bg-myLightGreen p-[10px] rounded-lg ">
                    <img src={gradIconGreen} alt='gradIcon' className="h-[20px] w-[20px]" /> 
                </div>;
    } else if (lv === 'lycée'){
        return  <div className=" w-fit bg-myLightBlue p-[10px] rounded-lg ">
                    <img src={gradIconBlue} alt='gradIcon' className="h-[20px] w-[20px]" /> 
                </div>;
    }


    
    
    return ( <div className="w-fit bg-myLightRed p-[10px] rounded-lg ">
            <img src={gradIconRed} alt='gradIcon' className="h-[20px] w-[20px]" /> 
       </div> );
}
 
export default nvIcon;