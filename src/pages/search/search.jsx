import React from "react";
import Filters from "./filters";
import Card from "../../components/course_card";

const Search = (props) => {
    return ( 
        <div className="flex  bg-myLightGreen pb-60">

                
                <Filters/>
                <div className="flex-col ml-6 w-3/4 justify-center">
                    <input type="text" className="w-full border-2 border-gray-300 bg-gray-100 " />
                    <div className="grid grid-cols-3 gap-[24px] mt-[25px] w-full ">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
           
        </div>
     );
}
 
export default Search;