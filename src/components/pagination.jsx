import React, { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const Pagination = () =>
{
   let [num, setNum] = useState(1)
   let [cur, setCur] = useState(1)

   const pages = [
      { page: num },
      { page: num + 1 },
      { page: num + 2 },
   ]
   function Next ()
   {
      setNum(++num)
   }
   function back ()
   {
      num > 1 && setNum(--num)
   }
   return (
      <div className="flex space-x-[12px]">
         <button onClick={back} className="h-11 w-11 shadow bg-white
               px-4 rounded-md hover:bg-myGreen hover:text-white p-2">
            <FiArrowLeft></FiArrowLeft>
         </button>
         {
            pages.map((pg, i) => (
               <button key={i} onClick={() => setCur(pg.page)} className={`h-11 w-11 font-publicSans font-semibold text-base shadow bg-white
               px-4 rounded-md hover:bg-myGreen hover:text-white
               ${cur === pg.page && 'bg-myGreen text-white'}`}>{pg.page}</button>
            ))
         }
         <button className="h-11 w-11 font-publicSans font-semibold text-base shadow bg-white
               px-4 rounded-md  text-black  cursor-default">
               ...
         </button>
         <button onClick={Next} className="h-11 w-11 shadow bg-white
               px-4 rounded-md hover:bg-myGreen hover:text-white p-2">
            <FiArrowRight ></FiArrowRight>
         </button>
      </div>
   )
}

export default Pagination