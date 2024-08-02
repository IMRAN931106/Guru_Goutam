"use client"
import React, { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { courselData } from "@/app/constants/constantData";
import CrouselCard from './CrouselCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Crousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  //   useEffect(() => {
  //     if(activeIndex === courselData.length){
  //       setActiveIndex(0)
  //     }
  // },[activeIndex])


  const handleBeforeChange = useCallback((current: number, next: number) => {
    setActiveIndex(next);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    centerMode: true,
    centerPadding: '0',
    beforeChange: handleBeforeChange,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <React.Fragment>
      <Slider {...settings}>
        {courselData.map((item, index) => (
          <div className='relative w-full md:w-[472px]' key={index}>
            <div className='relative'>
              <Image
                src={item.img}
                alt={"Carousel image"}
                className='min-w-full'
                layout='responsive'
              />
              <CrouselCard item={item} index={index} activeIndex={activeIndex} />
            </div>
          </div>
        ))}
      </Slider>
    </React.Fragment>
  );
};

export default Crousel;

