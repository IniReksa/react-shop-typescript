import React, { ReactNode } from 'react'

type typeProps = {}

const Navbar = ({} : typeProps) => {
   return (
      <div className="flex justify-around h-14 items-center">
         <div className="font-bold text-lg">Name Logo</div>
         <div className="flex space-x-4">
            <div>Home</div>
            <div>Categories</div>
            <div>Packages</div>
         </div>
         <div className=" items-end">
            <div>User Profile</div>
         </div>
      </div>
   )
}

export default Navbar