"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import logo from "@/app/assests/nav-logo.png"
import Link from 'next/link'
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { GoPerson } from "react-icons/go";
import { RiFacebookFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { navbarList } from "@/app/constants/constantData"
import { useRouter } from 'next/navigation'
import GlobalLoader from '../pages/GlobalLoader/page'

const NavBar: React.FC = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false); // State to handle loader visibility
  const router = useRouter();

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      setIsShow(false);
    }
  };

  const handleLinkClick = (url: string) => {
    setLoading(true); // Show loader
    setTimeout(() => {
      router.push(url); // Navigate after 3 seconds
      setLoading(false); // Hide loader
    }, 3000);
    setIsShow(false); // Hide the sidebar
  };

  return (
    <React.Fragment>
      {loading && <GlobalLoader />} {/* Show loader when loading state is true */}
      <header className='bg-white	fixed z-10 transition-all duration-300 ease-in-out top-0  right-0 left-0 px-8 py-1'>
        {/* inner div   */}
        <div className='relative'>
          {/* flex parent div   */}
          <div className='flex items-center justify-between	'>
            <div className='flex items-center justify-between	'>
              {/* logo */}
              <Link href={'/'}>
                <Image
                  src={logo}
                  alt="..."
                // width={500}
                // height={500}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
                // className='w-full'
                />
              </Link>
              {/* nav */}
              <nav className='ps-8 pt-3 hidden md:flex md:ps-8 md:pt-3'>
                <ul className='flex text-black text-base font-bold'>
                  {navbarList.map((item, index) => (
                    // <Link href={item.url} key={index}>
                    //   <li className='px-3'>{item.name}</li>
                    // </Link>
                    <li
                      key={index}
                      className='px-3 hover cursor-pointer'
                      onClick={() => handleLinkClick(item.url)} // Handle link click
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            {/* icon */}
            <button onClick={() => setIsShow(!isShow)}>
              {/* {isShow ? <RxCross2 color='#000000' size={35} /> : <LuMenu color='#000000' size={35} />} */}
              <LuMenu color='#000000' size={35} />
            </button>
          </div>
        </div>
      </header>
      {/* slide bar */}

      {isShow &&
        <section className={`fixed z-50 w-full h-screen  bg-black  bg-opacity-40`} onClick={handleOutsideClick}>
          {/* <div className={`flex flex-col px-12 pt-10 bg-white w-full md:w-3/12 h-full  transition-all duration-500 transform ease-in top-0 absolute right-0  ${isShow && 'translate-x-full'}`}> */}
          <div className={`flex flex-col px-12 pt-10 bg-white w-full md:w-3/12 h-full  transition-all duration-500 ease-in-out absolute top-0 right-0 ${isShow ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className='flex justify-between item-center'>
              <Link href={'/'}>
                <Image
                  src={logo}
                  alt="..."
                  width={180}
                // height={200}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
                // className='w-full'
                />
              </Link>
              <button onClick={() => setIsShow(!isShow)} className='transition duration-300  ease-in text-black hover:text-red-600 hover:scale-110'>
                {/* {isShow ? <RxCross2 color='#000000' size={35} /> : <LuMenu color='#000000' size={35} />} */}
                <RxCross2 size={30} />
              </button>
            </div>
            <nav>
              <ul className='text-black text-2xl text-center mt-6'>
                {navbarList.map((item, index) => (
                  // <Link href={item.url} key={index}>
                  //   <li className='px-3 py-3 hover:text-red-600 transition-all duration-700 ease-in delay-150'>{item.name}</li>
                  // </Link>
                  <li
                    key={index}
                    className='px-3 py-3 hover:text-red-600 transition-all duration-700 ease-in delay-150 cursor-pointer'
                    onClick={() => handleLinkClick(item.url)} // Handle link click
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </nav>
            {/* login button */}
            <Link href={'/pages/LoginNSignUp'} className='flex items-center justify-center bg-black text-white rounded-lg p-4 my-12'>
              <GoPerson size={25} />
              <div className='ml-3 text-base font-semibold'>
                Login
              </div>
            </Link>

            {/*text start  */}
            <div className='font-semibold	text-2xl	'>Registered Office:</div>
            <div className='text-xl pt-4'>8, Diagonal Road, 2nd Cross Rd, behind City Central Library, Jayanagar 3rd Block East</div>
            <div className='text-xl py-2'>Bengaluru 560011</div>
            <div className='text-large pt-6'>call us at</div>
            <Link href={'tel: 8022429955'} className='text-2xl pt-1 hover:underline  hover:text-red-600 transition-all duration-700 ease-in delay-150'>
              +91 80 2242 9955
            </Link>
            {/* icons */}
            <div className='flex mt-8'>
              {/* facebook */}
              <Link href={'#'} className='px-2 hover:text-red-600 transition-all duration-700 ease-in delay-300 '>
                <RiFacebookFill size={20} />
              </Link>
              {/* twitter */}
              <Link href={'#'} className='px-2 hover:text-red-600 transition-all duration-700 ease-in delay-300'>
                <FaLinkedinIn size={20} />
              </Link>
              {/* Linkedin */}
              <Link href={'#'} className='px-2 hover:text-red-600 transition-all duration-700 ease-in delay-300'>
                <BsTwitter size={20} />
              </Link>
            </div>
          </div>
        </section>
      }
    </React.Fragment>
  )
}

export default NavBar

