"use client"
import Image from 'next/image'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Footer_Data } from '../constants/constantData'
import Link from 'next/link'

const Footer: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted with:', inputValue);
  };
  return (
    <React.Fragment>
      <div>
        {Footer_Data.map((item, index) => (
          <div key={index} className=''>


            <div className='flex flex-col md:flex-row justify-between items-center py-10'>
              {/* logo Image */}
              <Link href={'#'} className='flex md:justify-center md:w-3/12'>
                <Image
                  src={item.footer_logo}
                  alt="..."
                // width={180}
                // height={200}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
                // className='w-full'
                />
              </Link>

              {/* QUICK LINK */}
              <div  className='flex flex-col  justify-center w-full md:my-0 my-4 md:w-3/12 text-center md:text-left'>
                <h3 className='uppercase text-xl font-semibold tracking-wider mb-4 text-[#8f8f8f]'>QUICK LINK</h3>
                <ul>
                  {item.QUICK_LINK.map((sub_Item, sub_Index) => (
                    <Link href={sub_Item.url}>
                    <li key={sub_Index} className='pb-2'>{sub_Item.name}</li>
                    </Link>
                  ))}
                </ul>
              </div>

              {/* LEGAL */}
              <div className='flex flex-col justify-center w-full md:my-0 my-4 md:w-3/12 text-center md:text-left'>
                <h3 className='uppercase text-xl font-semibold tracking-wider mb-4 text-[#8f8f8f]'>LEGAL</h3>
                <ul>
                  {item.LEGAL.map((sub_Item, sub_Index) => (
                    <Link href={sub_Item.url}>
                    <li key={sub_Index} className='pb-2'>{sub_Item.name}</li>
                    </Link>
                  ))}
                </ul>
              </div>

              {/* NEWSLETTER */}
              <div className='flex flex-col justify-center w-full md:px-0 py-4 md:py-0 px-4 md:w-3/12'>
                <h3 className='uppercase text-xl font-semibold tracking-wider mb-4 text-[#8f8f8f]'>NEWSLETTER</h3>
                {/* input */}
                <form onSubmit={handleSubmit} className='flex justify-between bg-[#eee] p-2 border-[1px] border-[#ebebeb] md:w-[400px] rounded-[12px]'>
                  <input
                    // id="my-input"
                    type="email"
                    value={inputValue}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)}
                    placeholder="Enter your Email"
                    className='border-none outline-none bg-[#eee]'
                  />
                  <button type="submit" className='outline-none md:p-4 p-2 text-[#fff] bg-[red] rounded-[10px]'>Sign Up</button>
                </form>
                {item.NEWSLETTER.map((sub_Item, sub_Index) => (
                  <p key={sub_Index} className='mt-4 text-[#878787]'>{sub_Item.name}</p>
                ))}
              </div>

            </div>

            <div className='flex border-t-[1px] border-[#ebebeb] md:py-4 py-6 w-full justify-center'>
              <div className='flex md:flex-row flex-col w-9/12  justify-between items-center'>
                <p className='text-[#ebebeb] text-center md:mb-0 mb-4'>{item.copyright}</p>
                <div className='flex w-[120px] justify-between text-[#ebebeb]'>
                  {item.icons.map((sunItem, sunIndex) => (
                    <div className='' key={sunIndex}>{<sunItem.icons size={24} />}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default Footer
