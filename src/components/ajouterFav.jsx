import {React, useState } from "react";
import { FaHeart, FaRegHeart } from 'react-icons/fa'

const AjouterFav = (props) => {
    const [heartFavorite, setHeartFavorite] = useState(false)
    const toggleHeart = () => {
        setHeartFavorite(!heartFavorite)
        //Request to BackEnd 
    }
    return ( 
        <div className="w-fit bg-white p-[10px] drop-shadow rounded-lg cursor-pointer">
                    {/* <<img src={Heart} alt='heart' className="h-[20px] w-[20px]" />  */}
                    { heartFavorite && <div alt='heart' onClick={toggleHeart} >
                                            <FaHeart className=" text-myRed h-[20px] w-[20px]" />
                                        </div>}
                    {!heartFavorite &&  <div alt='RedHeart' onClick={toggleHeart} >
                                            <FaRegHeart className=" text-iconGray h-[20px] w-[20px]"/>
                                        </div>}
        </div>
    );
}
 
export default AjouterFav;