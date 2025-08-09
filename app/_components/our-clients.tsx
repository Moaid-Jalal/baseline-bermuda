'use client';
import React from 'react';
import Marquee from 'react-fast-marquee';

const ImageMarquee = () => (
  <Marquee speed={50} gradient={false}>
    {[
      '/clients/1.svg',
      '/clients/2.svg',
      '/clients/3.svg',
      '/clients/4.svg',
      '/clients/5.svg',
      '/clients/6.svg',
      '/clients/7.svg',
      '/clients/8.svg'
    ].map((src, i) => (
      <img
        key={i}
        src={src}
        className="mx-4 w-[100px] h-[100px] object-cover rounded-lg shadow"
        alt={`Image ${i}`}
      />
    ))}
  </Marquee>
);

export const OutClients = () => {
  return (
    <div id='clients' className="my-32 flex items-center justify-center w-full bg-black">
      <div className="w-full max-w-[1440px] md:w-full flex flex-col items-center space-y-8">
        <h2
          className="text-center font-[Thunder] px-8 font-medium align-middle bg-gradient-to-r from-[#BD937A] to-white bg-clip-text text-transparent
    text-[52.08px] leading-[62.67px] tracking-[0%] sm:text-[70px] sm:leading-[60.16px]"
        >
          Who We've Worked With
        </h2>
        <ImageMarquee />
      </div>
    </div>
  );
};
