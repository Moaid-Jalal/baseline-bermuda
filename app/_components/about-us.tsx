import React from 'react';

const AboutUs = () => {
  return (
    <div id="about" className="w-full bg-transparent py-12 sm:py-32">
      <div className="max-w-[1440px] mx-auto px-2 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 xl:gap-20 items-stretch justify-items-center">
          {/* Box 1 */}
          <div className="flex flex-col flex-1 w-full max-w-full md:max-w-[340px] min-h-[170px] items-center text-center py-4 sm:py-6">
            <h1 className="text-[48px] md:text-[48px] xl:text-[70px] bg-gradient-to-r from-white to-[#BD937A] bg-clip-text text-transparent font-[Thunder] font-medium">
              What We Believe
            </h1>
            <h2 className="poppins text-white text-[18px] sm:text-lg md:text-[20px] mt-2 break-words leading-snug">
              Authentic connections.<br />
              Strategic growth. The power of<br />
              visual storytelling.
            </h2>
          </div>

          {/* Box 2 */}
          <div className="flex flex-col flex-1 w-full max-w-full md:max-w-[340px] min-h-[170px] items-center text-center py-4 sm:py-6">
            <h1 className="text-[48px] md:text-[48px] xl:text-[70px] bg-gradient-to-r from-white to-[#BD937A] bg-clip-text text-transparent font-[Thunder] font-medium">
              Our Vision
            </h1>
            <h2 className="poppins text-white text-[18px] sm:text-lg md:text-[20px] mt-2 break-words leading-snug">
              Helping local businesses shine<br />
              globally—while staying true to<br />
              their identity and values.
            </h2>
          </div>

          {/* Box 3 */}
          <div className="flex flex-col flex-1 w-full max-w-full md:max-w-[340px] min-h-[170px] items-center text-center py-4 sm:py-6">
            <h1 className="text-[48px] md:text-[48px] xl:text-[70px] bg-gradient-to-r from-white to-[#BD937A] bg-clip-text text-transparent font-[Thunder] font-medium">
              Our Purpose
            </h1>
            <h2 className="poppins text-white text-[18px] sm:text-lg md:text-[20px] mt-2 break-words leading-snug">
              We're here to ignite Bermuda’s<br />
              creative energy and bring it to<br />
              life online.
            </h2>
          </div>
        </div>
      </div>

              <div className="w-full flex justify-center mt-10">
          <img
            src={"/perspective-grid.svg"}
            className="w-full max-w-[1440px] h-auto"
            alt="Perspective Grid"
          />
        </div>

    </div>
  );
};

export default AboutUs;
