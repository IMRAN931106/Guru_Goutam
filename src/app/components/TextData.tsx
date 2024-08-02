import React from 'react'
import { heading, Smalltext, paragraphText } from "@/app/constants/constantData";

const TextData: React.FC = () => {
  return (
    <React.Fragment>
      <div className='px-10 py-6 md:grid md:grid-cols-2 md:gap-4 md:px-20 md:mx-12'>
        <div className='text-4xl/[3rem] font-bold pt-6 md:text-7xl' data-aos="fade-down-right">{heading}</div>
        <div className='' data-aos="fade-up-left">
          <div className='text-xl/[2rem] py-8 '>{Smalltext}</div>
          <div className='text-xl/[2rem]' >{paragraphText}</div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default TextData;
