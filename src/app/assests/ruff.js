 <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>



    ==============================================

    // import React from 'react'
// import { FaPlus } from "react-icons/fa6";

// interface CrouselCardProps {
//   item: {
//     img: string;
//     h1: string;
//     paragraph: string;
//   };
//   index: number;
//   activeIndex: number;
// }

// const CrouselCard: React.FC<CrouselCardProps> = ({ item, index, activeIndex }) => {
//   return (
//     <div className={`absolute bottom-20 mx-5 my-6 p-6 justify-center  text-slate-50  ${index === activeIndex ? 'bg-[#ff6839] rounded-sm opacity-100' : 'opacity-0'} hover:rounded-sm hover:rounded-sm hover:opacity-100`}>
//     {/* <div className={`absolute bottom-20 mx-5 my-6 p-6 justify-center  text-slate-50 rounded-sm ${index === activeIndex ? 'opacity-100' : 'opacity-0'} hover:opacity-100`}> */}
//       <div className={`flex items-center justify-between ${index === activeIndex ? 'mx-0': 'mx-5'}`}>
//         <h1 className='text-2xl'>{item.h1}</h1>
//         <FaPlus size={20} />
//       </div>
//       <p className={`text-lg py-6 ${index === activeIndex ? 'inline-block	' : 'hidden'} hover:'inline-block'`}>{item.paragraph}</p>
//     </div>
//   )
// }

// export default CrouselCard



======================================================


// "use client"
// import React, { useState } from 'react'
// import Image from 'next/image'
// import { courselData } from "@/app/constants/constantData";
// import CrouselCard from './CrouselCard';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";



// const Crousel = () => {
//   const [activeIndex, setActiveIndex] = useState<number>(2);
//   if(activeIndex === courselData.length){
//     setActiveIndex(1)
//   }
  
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 1000,
//     beforeChange: (current: number, next: number) => {
//       setActiveIndex(next + 2);
//     },
//     responsive: [
//       {
//         breakpoint: 1024, 
//         settings: {
//           slidesToShow: 1 
//         }
//       },
//       {
//         breakpoint: 768, 
//         settings: {
//           slidesToShow: 1 
//         }
//       }
//     ]
//   };

//   return (
//     <Slider {...settings}>
//       {courselData.map((item, index) => (
//         // <div className='relative w-full md:w-[472]' key={index}>
//         <div className='relative w-full md:w-[472]' key={index}>
//           <div className=''>
//             <Image
//               src={item.img}
//               alt="..."
//               className='min-w-full'
//             />
//           </div>
//             {/* <div className={`absolute bottom-20 mx-5 my-6 justify-center ${index === activeIndex ? 'opacity-100' : 'opacity-0'} hover:opacity-100`}> */}
//               <CrouselCard item={item} index={index} activeIndex={activeIndex}/>
//             {/* </div> */}
//         </div>
//       ))}
//     </Slider>
//   )
// }

// export default Crousel

========================================================================================

import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { AiOutlineMinus } from 'react-icons/ai';

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
    <div
      className={`relative bottom-20 mx-5 my-6 p-6 justify-center text-slate-50 transition-transform duration-500 ease-out
      ${index === activeIndex ? 'bg-[#ff6839] rounded-sm translate-y-0' : 'opacity-70 translate-y-5'} 
      hover:opacity-100 hover:translate-y-0 hover:bg-[#ff6839] hover:rounded-sm`}
    >
      <div className="flex items-center justify-between">
        <h1 className={`text-2xl transition-opacity duration-500 ${index === activeIndex ? 'opacity-100' : 'opacity-100'}`}>
          {item.h1}
        </h1>
        <div className="absolute">
          {index === activeIndex ? (
            <AiOutlineMinus size={20} className="absolute right-0 top-0 opacity-100 transition-opacity duration-300" />
          ) : (
            <FaPlus size={20} className="absolute right-0 top-0 opacity-100 transition-opacity duration-300" />
          )}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            {index !== activeIndex && <AiOutlineMinus size={20} />}
          </div>
        </div>
      </div>

      <p className={`text-lg py-6 transition-opacity duration-1000 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}>
        {item.paragraph}
      </p>
    </div>
  );
};

export default CrouselCard;


============================================================================

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
        className={`absolute bottom-20 mx-5 my-6 p-6 justify-center text-slate-50 transition-all duration-500 ease-out
      ${index === activeIndex ? 'bg-[#ff6839] rounded-sm opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} 
      hover:opacity-100 hover:translate-y-0 hover:bg-[#ff6839] hover:rounded-sm `}
      >

        <div className={`flex items-center justify-between `}>
          <h1 className='text-2xl'>{item.h1}</h1>
          {index === activeIndex ? <AiOutlineMinus size={20} /> : <FaPlus size={20} />}
        </div>

        <p className={`text-lg py-6 transition-opacity duration-1000 ${index === activeIndex ? 'opacity-100' : 'opacity-0'} hover:opacity-100`}>
          {item.paragraph}
        </p>
      </div>
    </React.Fragment>
  );
};

export default CrouselCard;

=================================================================

// import React from 'react'

// const Boxes: React.FC = () => {
//   return (
//     <div>
//       <div>
//         <div className='text-6xl text-slate-50 stroke-[#243c5a]'><span>15</span> + </div>
//         <h1>Years Experience</h1>
//         <p>We’v experience more than <span>15+ years</span> with success.</p>
//       </div>
//       <div>
//         <div className='text-6xl text-slate-50 stroke-[#243c5a]'><span>03</span> + </div>
//         <h1>Verticals</h1>
//         <p>Diversified IT Solution Provider In Hardware,Networking and Software.</p>
//       </div>
//       <div>
//         <div className='text-6xl text-slate-50 stroke-[#243c5a]'><span>300</span> + </div>
//         <h1>Satisfied Clients</h1>
//         <p>We’v experience more than <span>300+ client</span> with success.</p>
//       </div>
//     </div>
//   )
// }

// export default Boxes;


====================loader=======================


// import React from 'react'
// const Loader: React.FC = () => (
//     <div className="fixed inset-0 bg-white flex items-center justify-center z-10">
//         <div className="loader"></div>
//         <style jsx>{`
//         .loader {
//           border: 12px solid rgba(0, 0, 0, 0.1);
//           border-radius: 50%;
//           border-top: 12px solid #000;
//           width: 80px;
//           height: 80px;
//           animation: spin 1s linear infinite;
//         }
//         @keyframes spin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }
//       `}</style>
//     </div>
// );

// export default Loader;



"use client"  
import React, { createContext, useState, useContext, ReactNode } from "react";
import { LoadingContextType } from "../types/loader";

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [loading, setLoading] = useState<boolean>(true);

    return (
        <LoadingContext.Provider value={{ loading, setLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};
// Custom hook for using the context
export const useLoading = (): LoadingContextType => { // function type loadingContextType
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error('useLoading must be used within a LoadingProvider')
    }
    return context;
};  
