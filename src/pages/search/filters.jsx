import React, { useState } from 'react';
import NiveauIcon from "../../components/gradHat";
import villesDz from '../../data/lieux_algerie';
const modules = [
    "Math",
    "Physique",
    "Chimie",
    "Arabe",
    "Anglais",
    "Français"
]


const Filters = (props) => {

    const [wilaya, setWilaya] = useState('');
    const handleChangeWilaya = (event) => {
        setWilaya(event.target.value);
        console.log(wilaya)
        console.log(wilaya)
    }

    const [commune, setCommune] = useState('');
    const handleChangeCommune = (event) =>{
        console.log(wilaya)
        setCommune(event.target.value)
        console.log(commune);
    }

    const [module, setModule] = useState('');
    const handleChangeModule = (event) =>{
        setModule(event.target.value)
        console.log(module);
    }

    return (<div className="flex flex-col space-y-[36px] content-center pl-[29px] pr-[20px] pt-[30px] bg-white rounded-[16px]  w-1/4 max-w-[300px]">
                <div className="flex flex-col justify-start space-y-[20px]">
                    <p className=" text-[28px] font-publicSans font-medium">Niveau</p>
                    <ul className="space-y-[12px]">
                        <li className="flex flex-row space-x-[14px] items-center ">    
                                <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] cursor-pointer"/>
                                <label for="default-checkbox" className="flex flex-row justify-start items-center gap-[5px] w-full ">
                                    <NiveauIcon level="primaire" ></NiveauIcon>            
                                    <p className=" text-lg font-publicSans font-medium">Primaire</p>
                                </label>
                        </li>
                        <li className="flex flex-row space-x-[14px] items-center ">    
                                <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] cursor-pointer"/>
                                <label for="default-checkbox" className="flex flex-row justify-start items-center gap-[5px] w-full ">
                                    <NiveauIcon level="collége" ></NiveauIcon>            
                                    <p className=" text-lg font-publicSans font-medium">Collége</p>
                                </label>
                        </li>
                        <li className="flex flex-row space-x-[14px] items-center ">    
                                <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] cursor-pointer"/>
                                <label for="default-checkbox" className="flex flex-row justify-start items-center gap-[5px] w-full ">
                                    <NiveauIcon level="lycée" ></NiveauIcon>            
                                    <p className=" text-lg font-publicSans font-medium">Lycée</p>
                                </label>
                        </li>
                   </ul>
                </div>
                <div className="flex flex-col justify-start w-fill space-y-[20px]">
                    <p className=" text-[28px] font-publicSans font-medium">Théme</p>
                    <select className="text-[22px] font-publicSans font-normal text-iconGray border-[0.5px] p-[10px]  rounded-[8px] cursor-pointer" id="ModuleList" onChange={handleChangeModule}>
                        <option value="" selected>Module</option>
                        {
                            [...new Set(modules.map(item=>item))].map( item =>
                            <option value={item}>{item}</option> )
                        }
                    </select>
                </div>
                <div className="flex flex-col justify-start w-fill space-y-[20px]">
                    <p className=" text-[28px] font-publicSans font-medium">Théme</p>
                    <select className="text-[22px] font-publicSans font-normal text-iconGray border-[0.5px] p-[10px]  rounded-[8px] cursor-pointer" id="WilayaList" onChange={handleChangeWilaya}>
                        <option value="" selected>Wilaya</option>
                        {[...new Set(villesDz.map((item) => item.wilaya_name_ascii))].map((item) => (
                                <option value={item}>{item}</option>
                            ))}
                    </select>
                    <select className="text-[22px] font-publicSans font-normal text-iconGray border-[0.5px] p-[10px]  rounded-[8px] cursor-pointer" id="WilayaList" onChange={handleChangeCommune}>
                        <option value="" selected>Commune</option>
                        {villesDz.map(item => (
                                item.wilaya_name_ascii === wilaya && <option value={item.commune_name_ascii}>{item.commune_name_ascii}</option>
                        ))}
                    </select>
                </div>
            </div> ); }
 
export default Filters;











