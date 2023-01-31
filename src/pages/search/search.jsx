import React, {useState} from "react";
import Filters from "./filters";
import Card from "../../components/course_card";
import { FiSearch } from "react-icons/fi";
import Pagination from "../../components/pagination";
import Footer from "../../components/components/Footer/Footer";
import NavBarPrin from "../../components/components/NavBarPrin/NavBarPrin";

const Search = (props) => {
    const [searchInput, setSearchInput] = useState('');
    const onChangeSearch = (e) => { 
        setSearchInput(e.target.value);
        console.log(searchInput);
    }
    return ( 
        <div className="flex flex-col justify-center">
            <NavBarPrin></NavBarPrin>,
            <div className=" flex p-10 content-center pl-48">
                <p className="text-5xl font-publicSans font-semibold">Trouvez votre <span className="text-myGreenSecondary">Cours</span></p>
            </div>
            <div className="flex justify-center bg-myLightGreen pb-52 pt-11">
                    <Filters/>
                    <div className="flex-col ml-6 w-2.5/4 content-center ">
                        <label class="relative block">
                            <span class="absolute inset-y-0 right-[18px] flex items-center pl-2">
                                <FiSearch className="text-[24px] text-iconGray"></FiSearch>
                            </span>
                            <input class=" w-full h-[50px] py-2 pl-[20px] rounded-[8px] shadow-md focus:outline-none placeholder:text-iconGray placeholder:font-publicSans placeholder:font-Regular placeholder:text-lg font-publicSans font-Regular text-lg" placeholder="Que voulez-vous apprendre ?" type="text" name="search" onChange={onChangeSearch}/>
                        </label>
                        <div className="grid grid-cols-3 gap-[24px] mt-[24px] w-full ">
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
                        <div className="flex justify-center mt-[77px]">
                        <Pagination></Pagination>
                        </div>
                        
                    </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
 
export default Search;