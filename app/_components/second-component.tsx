"use client";

import Image from "next/image";

export const SecondComponent = () => {
  return (
    <div className="w-full bg-black py-16 lg:py-32 lg:px-6 flex justify-center">
      <div className="w-full max-w-[1400px] flex flex-col lg:flex-row items-center gap-12 lg:p-0">
        <div className="w-full lg:w-1/2 px-6 lg:px-0 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="font-[Thunder] font-medium text-[60px] md:text-[70px] lg:text-[80px] leading-tight bg-gradient-to-r from-[#999999] via-[#FFFFFF] to-[#FFFFFF] bg-clip-text text-transparent mb-2">
            Where Culture Meets
          </h1>
          <h1 className="font-[Thunder] font-medium text-[60px] md:text-[70px] lg:text-[80px] leading-tight bg-gradient-to-r from-[#83604B] via-[#BD937A] to-[#FFFFFF] bg-clip-text text-transparent mb-6">
            Digital Innovation
          </h1>

          <div className="mt-5 sm:mt-20 mg:mt-0">
            <h2 className="font-[Thunder] text-[30px] sm:text-[35px] lg:text-[30px] text-white mb-1">
              Our Spirit
            </h2>
            <p className="font-[Poppins] text-[16px] sm:text-[18px] lg:text-[20px] text-white leading-snug">
              The essence that drives everything we do – authentic,
              <br />
              passionate, and rooted in culture
            </p>
          </div>

          <div className="mt-12 sm:mt-8">
            <h2 className="font-[Thunder] text-[30px] sm:text-[35px] lg:text-[30px] text-white mb-1">
              Our Impact
            </h2>
            <p className="font-[Poppins] text-[16px] sm:text-[18px] lg:text-[20px] text-white leading-snug">
              Measurable results that speak louder than words –
              <br />
              transforming digital presence into business success
            </p>
          </div>
        </div>

        <div className="w-full justify-center lg:w-1/2 flex flex-col items-center gap-2 lg:gap-4 overflow-x-hidden relative">
          {/* First row - 3 images with equal height */}
          <div className="flex lg:justify-center overflow-x-visible flex-nowrap gap-2 lg:gap-4 px-8 lg:px-0 lg:mx-0 -mx-20">
            <div className="w-[240px] h-[180px] flex-shrink-0 relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800 ">
              <Image
                src="/s-images/100.jpg"
                fill
                alt="First Row Left"
                className=" object-cover w-full h-full transition-all duration-500 hover:scale-110 hover:brightness-110"
                quality={100}
                priority
              />
            </div>
            <div className="w-[170px] h-[180px] relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800">
              <Image
                src="/s-images/6.jpg"
                fill
                alt="First Row Center"
                className=" object-cover w-full h-full transition-all duration-500 hover:scale-110 hover:brightness-110"
                quality={100}
              />
            </div>
            <div className="w-[170px] h-[180px] relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800">
              <Image
                src="/s-images/8.jpg"
                fill
                alt="First Row Right"
                className=" object-cover w-full h-full transition-all duration-500 hover:scale-110 hover:brightness-110"
                quality={100}
              />
            </div>
          </div>

          {/* Second row - 2 images where combined width of first 2 from row 1 = first image width */}
          <div className="flex lg:justify-center overflow-x-visible flex-nowrap gap-2 lg:gap-4 px-8 lg:px-0 lg:mx-0 -mx-20">
            <div className="w-[260px] h-[200px] relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800">
              <Image
                src="/s-images/4.jpg"
                fill
                alt="Second Row Left"
                className=" object-cover w-full h-full transition-all duration-500 hover:scale-110 hover:brightness-110"
                quality={100}
              />
            </div>
            <div className="w-[330px] h-[200px] relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800">
              <Image
                src="/s-images/14.jpg"
                fill
                alt="Second Row Right"
                className=" object-cover w-full h-full transition-all duration-500 hover:scale-110 hover:brightness-110"
                quality={100}
              />
            </div>
          </div>

          {/* Third row - same as first row */}
          <div className="flex lg:justify-center overflow-x-visible flex-nowrap gap-2 lg:gap-4 px-8 lg:px-0 lg:mx-0 -mx-20">
            <div className="w-[340px] h-[200px] flex relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800">
              <Image
                src="/s-images/7.jpg"
                width={170}
                height={200}
                alt="Second Row Right"
                className="object-cover transition-all duration-500 hover:scale-110 hover:brightness-110"
                quality={100}
              />
              <Image
                src="/s-images/12.jpg"
                width={170}
                height={200}
                alt="Second Row Right"
                className="object-cover  transition-all duration-500 hover:scale-110 hover:brightness-110"
                quality={100}
              />
            </div>
            <div className="w-[260px] h-[200px] relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800">
              <Image
                src="/s-images/1.jpg"
                fill
                alt="Second Row Left"
                className="object-cover w-full h-full transition-all duration-500 hover:scale-110 hover:brightness-110"
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
