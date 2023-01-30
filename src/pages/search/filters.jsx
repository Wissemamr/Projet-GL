import React, { useState } from 'react';
import NiveauIcon from "../../components/gradHat";
import villesDz from '../../data/lieux_algerie';
import { Calendar } from 'react-multi-date-picker';
import gregorian_fr from "./gregorian_fr"

const modules = [
    "Math",
    "Physique",
    "Chimie",
    "Arabe",
    "Anglais",
    "Français"
]
let date2 = ''
let date1 = ''


const Filters = (props) => {

    const [wilaya, setWilaya] = useState('');
    const handleChangeWilaya = (event) => {
        setWilaya(event.target.value);
    }

    const [commune, setCommune] = useState('');
    const handleChangeCommune = (event) =>{
        setCommune(event.target.value)
        console.log(commune);
    }

    const [module, setModule] = useState('');
    const handleChangeModule = (event) =>{
        setModule(event.target.value)
        console.log(module);
    }
    

    const [values, setValues] = useState([])
    
    if (values.length>0 && values.length <2) {
        date1 = values[0].format()
        date2 = null
    } else if (values.length>1) {
        date1 = values[0].format()
        date2 = values[1].format()
    }

    const handleDateReset = () =>{
        date1 = null
        date2 = null
        setValues([]) 
    }

    //Checkbox Filters for the Levels

    const checkboxesList = [
        "Primaire",
        "Collége",
        "Lycée"
      ];
      
      const getDefaultCheckboxes = () =>
        checkboxesList.map(checkbox => ({
          name: checkbox,
          checked: false,
        }));
      
      
      const [checkboxes, setCheckboxes] = useState(getDefaultCheckboxes());
      const setCheckbox = (index, checked) => {  
            const newCheckboxes = [...checkboxes];
            newCheckboxes[index].checked = checked;
            setCheckboxes(newCheckboxes);
            console.log(checkboxes);
      }


    return (<div className="flex flex-col space-y-[36px] content-center pl-[20px] pr-[20px] pt-[30px] pb-14 bg-white rounded-[16px]  w-1/4 max-w-[300px] h-fit shadow-lg ">
                <div id='NiveauFiltre' className="flex flex-col justify-start space-y-[20px]">
                    <p className=" text-[28px] font-publicSans font-medium">Niveau</p>
                    <ul className="space-y-[12px]">
                    { checkboxes.map((checkbox, i) => 
                    (
                      <li className="flex flex-row space-x-[14px] items-center w-fit">    
                                <input checked={checkbox.checked} onChange={e => { setCheckbox(i, e.target.checked);}} type="checkbox" value="" class="w-[18px] h-[18px] cursor-pointer"/>
                                <label className="flex flex-row justify-start items-center gap-[5px] w-full cursor-pointer ">
                                    <NiveauIcon level={checkbox.name} ></NiveauIcon>            
                                    <p className=" text-lg font-publicSans font-medium">{checkbox.name}</p>
                                </label>
                      </li>
                    ))}
                    </ul>
                </div>  
                <div id='ModulesFiltre' className="flex flex-col justify-start w-fill space-y-[20px]">
                    <p className=" text-[28px] font-publicSans font-medium">Théme</p>
                    <select className="text-[22px] font-publicSans font-normal text-iconGray border-[0.5px] p-[10px]  rounded-[8px] cursor-pointer" id="ModuleList" onChange={handleChangeModule}>
                        <option value="" selected>Module</option>
                        {
                            [...new Set(modules.map(item=>item))].map( item =>
                            <option value={item}>{item}</option> )
                        }
                    </select>
                </div>
                <div id='LieuFiltre' className="flex flex-col justify-start w-fill space-y-[20px]">
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
                <div id='DateFiltre' className="flex flex-col justify-start w-fill space-y-[20px]">
                    <p className=" text-[28px] font-publicSans font-medium">Date de publication</p>
                    <div className='flex flex-col justify-center space-y-3 '>
                        <Calendar locale={gregorian_fr} value={values} onChange={setValues} range rangeHover />
                        <button className='bg-myBlue h-8 w-full text-white font-publicSans font-normal rounded-md shadow-lg' onClick={handleDateReset} >Réinitialiser</button>
                    </div>
                </div>          
            </div> ); }
 
export default Filters;











