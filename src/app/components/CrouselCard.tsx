import React from 'react';
import { FaPlus } from "react-icons/fa";
import { AiOutlineMinus } from "react-icons/ai";

interface CrouselCardProps {
  item: {
    h1: string;
    paragraph: string;
  };
  index: number;
  activeIndex: number;
}

const CrouselCard: React.FC<CrouselCardProps> = ({ item, index, activeIndex }) => {
  return (
    <React.Fragment>
      <div
        className={`absolute md:bottom-20 bottom-14 mx-5 my-2 md:my-6 p-4 md:p-6 justify-center text-slate-50 transition-all duration-[3000ms] ease-out
      ${index === activeIndex ? 'bg-[#ff6839] rounded-sm translate-y-0' : 'translate-y-[13rem]'} 
        hover:translate-y-0 hover:bg-[#ff6839] hover:rounded-sm `}
      >

        <div className={`flex items-center justify-between `}>
          <h1 className='md:text-2xl text-lg' data-aos="zoom-in">{item.h1}</h1>
          <div className='transition-transform duration-[2000ms] ease-out transform: rotate(360deg)'>
          <div className={`${index === activeIndex ? 'hidden' : 'block'}`}><FaPlus size={20} /></div>
          <div className={`${index === activeIndex ? 'block' : 'hidden'}`}><AiOutlineMinus size={20} /></div>
         </div>
        </div>

        <p className={`md:text-lg md:py-6 text-sm py-4`} data-aos="zoom-in">
          {item.paragraph}
        </p>
      </div>
    </React.Fragment>
  );
};

export default CrouselCard;
