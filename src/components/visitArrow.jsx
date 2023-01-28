import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";


const Visit = () => {
    const onClickHandler = () => {
        //redirect to the webpage 
        console.log("Redirecting...");
    }
    return ( 
        <div className=" group w-fit bg-white drop-shadow p-[10px] rounded-lg hover:bg-myGreenSecondary">
            <FiArrowUpRight className="h-[20px] w-[20px] text-iconGray  group-hover:text-white" onClick={onClickHandler}/>
        </div>
     );
}
 
export default Visit;
