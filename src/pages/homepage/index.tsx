import React, { useState } from 'react'
import Slider from "../../components/ui/Slider";

type typeProps = {
   name?: String
}

const Homepage = ({name}: typeProps) => {
   const [userReview, setUserReview] = useState([1,2,3])
   const [ourPartner, setOurPartner] = useState([1,2,3,4])
   
   return (
      <div className="w-4/5 mx-auto">
         {/* banner */}
         <div className="h-96 bg-green-300 m-5 rounded-2xl">
            
         </div>

         {/* catagories */}
         <div className="mx-8">
            <div className="flex justify-between">
               <span className="font-bold text-xl">Categories</span>
               {/* <div className="space-x-2">
                  <button className="bg-green-300 rounded-full w-6 text-white font-bold align-middle">{`<`}</button>
                  <button className="bg-green-300 rounded-full w-6 text-white font-bold align-middle">{`>`}</button>
               </div> */}
            </div>
            <Slider perView={5} spacing={20} arrow={true} dots={true} loop={true}>
            {
               [1,2,3,4,5,6,7,8].map((data, index) => (
                  <div className={`keen-slider__slide number-slide${index} text-center`}>
                     <div className="flex justify-center">
                        <div className="h-20 w-20 bg-green-300 rounded-full"></div>
                     </div>
                     <span>Product {index}</span>
                  </div>
               ))
            }
            </Slider>
         </div>

         {/* populer product */}
         <div className="h-min rounded-2xl">
            <div className="font-bold text-xl pt-5 mx-8">
               <span>Populer Product</span>
            </div>
            <Slider perView={3} spacing={30}>
            {
               [1,2, 3, 4, 5].map((data, index) => (
                  <div className={`keen-slider__slide number-slide${index+1} flex flex-col p-4 rounded-xl bg-green-100 break-words`}>
                     <div className="h-20 w-20 bg-green-300 rounded-full content-center self-center mb-4"></div>
                     <span className="font-bold text-lg">Product {data}</span>
                     <span className="text-sm">Detail Product {data}</span>
                     <span className="font-bold">Rp. {data}{index}.000</span>
                     <div className="flex justify-between mt-5">
                        <div>
                           <button className="text-lg text-green-500 font-bold">-</button>
                           <input name="input" type="text" className="w-11 text-center mx-2" />
                           <button className="text-lg text-green-500 font-bold">+</button>
                        </div>
                        <button className="bg-green-300 rounded-full w-8 h-8 text-middle self-center">+</button>
                     </div>
                  </div>
               ))
            }
            </Slider>
         </div>

         {/* bundle packages */}
         <div className="h-min bg-green-200 m-11 p-5 rounded-2xl">
            <div className="font-bold text-xl pl-5 pt-5">
               <span>Populer Package</span>
            </div>
            <div className="grid grid-cols-3">
            {
               [1,2, 3, 4, 5].map((data, index) => (
                  <div className="flex flex-col p-4 m-5 rounded-xl bg-green-100 break-words">
                     <div className="h-20 w-20 bg-green-300 rounded-full content-center self-center mb-4"></div>
                     <span className="font-bold text-lg">Product {data}</span>
                     <span className="text-sm">Detail Product {data}</span>
                     <span className="font-bold">Rp. {data}{index}.000</span>
                     <div className="flex justify-between mt-5">
                        <div>
                           <button className="text-lg text-green-500 font-bold">-</button>
                           <input name="input" type="text" className="w-11 text-center mx-2" />
                           <button className="text-lg text-green-500 font-bold">+</button>
                        </div>
                        <button className="bg-green-300 rounded-full w-8 h-8 text-middle self-center">+</button>
                     </div>
                  </div>
               ))
            }
            </div>
         </div>

         {/* Client review */}
         <div>
            <div className="text-center p-3 m-5 font-bold text-xl">
               <span>What Out Client Say</span>
            </div>
            <Slider perView={3} spacing={30} >
            {
               userReview.map((data, index) => (
                  <div className={`keen-slider__slide number-slide${index+1} my-4 p-3`}>
                     <div className="flex items-center ">
                        <div className="h-16 w-16 bg-green-300 rounded-full content-center self-center"></div>
                        <div className="flex flex-col px-4">
                           <span className="font-bold">User {data}</span>
                           <span>buy product {data + 1}</span>
                        </div>
                     </div>
                     <div className="text-justify my-3">
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. asdds Debitis tempora repudiandae accusamus 
                           natus aut consequatur laborum sit iusto dolorum quibusdam 
                           non nobis eos et deleniti?</p>
                     </div>
                  </div>
               ))
            }
            </Slider>
            <div className="flex space-x-2 my-3 justify-center">
            {
               userReview.length > 3 &&
               [...Array(Math.ceil(userReview.length / 3))].map(data => (
                  <div className="h-1 w-10 bg-green-300 rounded"></div>
               ))
            }  
            </div>
         </div>

         <div className="my-16 mx-8">
            <div className="flex justify-between">
               <span className="font-bold text-xl">Our Partner</span>
            </div>
            <Slider classNameWrap="px-10" perView={4} spacing={30}>
            {
               ourPartner.map((data, index) => (
                  <div className={`keen-slider__slide number-slide${index+1} text-center`}>
                     <div className="flex justify-center">
                        <div className="h-20 w-20 bg-green-300 rounded-full"></div>
                     </div>
                     <span>Partner {index}</span>
                  </div>
               ))
            }
            </Slider>
            <div className="m-5 px-10 flex justify-between space-x-8 text-center">
            </div>
         </div>
      </div>
   )
}

export default Homepage