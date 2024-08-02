import React from 'react'
import Link from 'next/link';
import { support_Data } from '../constants/constantData';

const SupportNBusiness: React.FC = () => {
  return (
    <React.Fragment>
        <div className='w-full flex justify-center border-y-[1px] border-[#ebebeb] py-12' data-aos="fade-up">
      <div className='flex content-center	flex-col md:flex-row gap-20 w-7/12 justify-between '>
        {support_Data.map((item, index) => (
          <div key={index} className='flex flex-col items-center'>
            <div className='border-[1px] border-[#e6e6e6] w-[80px] h-[80px] flex items-center justify-center rounded-full'>{<item.icon size={30} />}</div>
            <h1 className='text-2xl font-semibold py-6'>{item.h1}</h1>
            <p className='text-lg pb-2 text-[#878787] text-center'>{item.paragraph}</p>
            {item.link.includes('@') ? (
              <Link href={`mailto:${item.link}`} className='text-[#646464] text-xl underline'>{item.link}</Link>
            ) : (
              <Link href={`tel:${item.link}`} className='text-[#ff6839] text-xl'>{item.link}</Link>
            )} 
          </div>
        ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export default SupportNBusiness
