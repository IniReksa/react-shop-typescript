import React, { ReactNode } from 'react'
import Footer from '../footer/Footer';
import Navbar from "../navbar/Navbar";

type typeProps = {
   children: ReactNode
}

const AppLayout = ({children} : typeProps) => {
   return (
      <>
         <Navbar />
         {children}
         <Footer />
      </>
   )
}

export default AppLayout