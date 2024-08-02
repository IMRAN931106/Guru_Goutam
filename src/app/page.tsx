"use client"
import React from "react";
import { useEffect } from "react";
import { Boxes, Crousel, TextData, SupportNBusiness, OurServices } from "./components";
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
    });
  }, [])

  return (
    <main>
      <div className="relative top-[65px]">
        <Crousel />
      </div>
      <div className="relative bg-[#fffce6] py-20 flex flex-col justify-center items-center" data-aos="zoom-in-out">
        <TextData />
        <div className="relative flex flex-col justify-center items-center">
          <Boxes />
        </div>
      </div>
      <OurServices />
      <SupportNBusiness />
    </main>
  );
}
