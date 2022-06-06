import React from "react";

const Footer = () => {
   return (
      <div className="h-52 grid grid-cols-4 bg-slate-800 text-white p-6 text-center align-middle self-center">
         <div className="flex flex-col self-center">
            <div className="font-bold text-lg">Name Logo</div>
         </div>
         <div className="flex flex-col self-center">
            <span className="font-bold">About</span>
            <span>About me</span>
         </div>
         <div className="flex flex-col self-center">
            <span className="font-bold">Devilery</span>
            <span>Devilery me</span>
         </div>
         <div className="flex flex-col self-center">
            <span className="font-bold">Contact</span>
            <span>Contact me</span>
         </div>
      </div>
   )
}

export default Footer