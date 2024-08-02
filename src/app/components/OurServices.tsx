import React from 'react'
import { OUR_SERVICES } from "@/app/constants/constantData";
import { GoArrowUpRight } from "react-icons/go";

const OurServices: React.FC = () => {
    return (
        <React.Fragment>
            <div>
                {OUR_SERVICES.map((item, index) => (
                    <div key={index} className='md:flex-row flex-col flex justify-center py-20 md:px-0 px-10 md:gap-16'>
                        {/* left side */}
                        <div className='md:w-4/12'  data-aos="fade-up-right">
                            <h6 className='text-[#ff7961] font-medium uppercase tracking-[.25em] mb-4'>{item.sub_heading}</h6>
                            <h1 className='md:text-8xl text-4xl font-extrabold pe-10 md:pe-20 leading-tight'>{item.heading}</h1>
                            <p className='mt-2 pe-[2rem] md:pe-[12rem]'>{item.rParagraph}</p>
                        </div>
                        {/* right side */}
                        <div className='md:w-4/12' data-aos="fade-down-left">
                            {item.data_Of_Paragraph.map((subItem, subIndex) => (
                                <div key={subIndex} className='border-b-[1px] border-[#243c5a] py-8 flex justify-between md:px-14 px-2 leading-2 md:leading-6'>
                                    <div className='md:w-9/12 w-10/12'>
                                        <h3 className='md:text-lg text:sm font-bold mb-2 transition-all ease-out duration-[1000ms] cursor-pointer hover:text-[#ff6839]'>{subItem.Heading}</h3>
                                        <p className='md:text-sm text-xs'>{subItem.Paragraph}</p>
                                    </div>
                                    {/* <div className='md:w-2/12 relative -my-6'>
                                        <div className='transition-all duration-[2000ms] ease-out  relative w-full h-full bg-[#ff6839] hover:rounded-sm flex justify-center translate-x-[3rem] opacity-0 hover:text-[#FFF] hover:translate-x-0'>
                                            <div className='ps-4 md:ps-0 items-center flex justify-center absolute'>
                                                <GoArrowUpRight size={30} />
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="md:w-2/12 relative -my-6 hover:text-[#fff] transition-all duration-[1000ms] ease-out">
                                        <div className="ps-4 md:ps-0 items-center flex justify-center  absolute top-14 md:-right-2 -right-1 z-10 ">
                                            <GoArrowUpRight size={30} />
                                        </div>
                                        <div className="transition-all duration-[2000ms] ease-out w-full h-full hover:bg-[#ff6839] flex justify-center items-center opacity-100 hover:rounded-sm hover:translate-x-10 translate-x-[5rem]">

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
}

export default OurServices
