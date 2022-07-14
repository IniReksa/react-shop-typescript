import React, { FC, ReactNode, useRef, useState } from "react";
import {useKeenSlider} from "keen-slider/react";
import "keen-slider/keen-slider.min.css"
import "./slider.css"

export type sliderType = {
   children: ReactNode
   loop?: boolean,
   perView?: number,
   spacing?: number,
   classNameWrap?: string
   className?: string,
   arrow?: boolean,
   dots?: boolean
}

const Arrow = (props: {
   disabled: boolean
   left?: boolean
   onClick: (e: any) => void
 }) => {
   const disabeld = props.disabled ? " arrow--disabled" : ""
   return (
     <svg
       onClick={props.onClick}
       className={`arrow ${
         props.left ? "arrow--left" : "arrow--right"
       } ${disabeld}`}
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24"
     >
       {props.left && (
         <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
       )}
       {!props.left && (
         <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
       )}
     </svg>
   )
 }

const Slider: FC<sliderType>  = ({ 
   children, 
   loop = false, 
   perView = 3,
   spacing = 10,
   classNameWrap = '',
   className,
   arrow = false,
   dots = false
}) => {
   const [currentSlide, setCurrentSlide] = useState(0)
   const [loaded, setLoaded] = useState(false)
   const sliderContainerRef = useRef<HTMLDivElement>(null)
   const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
      initial: 0,
      loop,
      slides: {
        perView: perView,
        spacing
      },
      slideChanged: (slider) => {
         const slideNumber = slider.track.details.rel
         console.log('currentSlide', slideNumber)
         setCurrentSlide(slideNumber)
      },
      created: () => {
         setLoaded(true)
      }
   })
   const lengthDots = instanceRef.current ? 
                        perView > 1 ?
                           instanceRef.current.track.details.slides.length / 2 
                        : instanceRef.current.track.details.slides.length 
                     : 0
   
   return (
      <>
         <div className={`${classNameWrap} m-5 relative`} ref={sliderContainerRef}>
            <div ref={ref} className={`keen-slider ${className || ''}`}>
               {children}
            </div>
            {loaded &&  instanceRef.current && arrow && (
               <>
                  <Arrow
                     left
                     onClick={(e: any) =>
                        e.stopPropagation() || instanceRef.current?.prev()
                     }
                     disabled={currentSlide === 0}
                  />

                  <Arrow
                     onClick={(e: any) =>
                        e.stopPropagation() || instanceRef.current?.next()
                     }
                     disabled={
                        currentSlide ===
                        instanceRef.current.track.details.slides.length - 1
                     }
                  />
               </>
            )}
            {loaded && 
               instanceRef.current &&
               instanceRef.current.slides.length > 0 && 
               dots && (
               <div className="dots">
                  {[
                     ...Array(lengthDots).keys(),
                  ].map((idx) => {
                     return (
                     <button
                        key={idx}
                        onClick={() => {
                           instanceRef.current?.moveToIdx(idx)
                        }}
                        className={"dot" + (currentSlide === idx || idx === currentSlide - lengthDots ? " active" : "")}
                     ></button>
                     )
                  })}
               </div>
            )}
         </div>
      </>
   )
}

export default Slider