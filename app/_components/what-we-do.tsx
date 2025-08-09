import React from 'react';
import { easeInOut, easeOut, motion } from 'framer-motion';

interface CardProps {
  icon: string;
  title: string;
  desc: React.ReactNode;
  index: number;
}

const cards = [
  {
    icon: "/icons/@.svg",
    title: "Social Media Management",
    desc: (
      <>
        Full-service management of your social<br />
        platforms to grow audience and<br />
        engagement.
      </>
    ),
  },
  {
    icon: "/icons/camera.svg",
    title: "Content Creation",
    desc: (
      <>
        Professional photo and video content<br />
        that tells your brand's story.
      </>
    ),
  },
  {
    icon: "/icons/ads.svg",
    title: "Paid Ads & Campaign Strategy",
    desc: (
      <>
        Strategic paid campaigns to reach your<br />
        target audience and drive conversions.
      </>
    ),
  },
  {
    icon: "/icons/influencer.svg",
    title: "Influencer Marketing",
    desc: (
      <>
        Connecting your brand with the right<br />
        influencer to expand your reach.
      </>
    ),
  },
  {
    icon: "/icons/analytics.svg",
    title: "Analytics & Reporting",
    desc: (
      <>
        Data-driven insights to measure<br />
        performance and optimize your strategy.
      </>
    ),
  },
  {
    icon: "/icons/pen-tool.svg",
    title: "Branding & Design",
    desc: (
      <>
        Visual identity development to ensure<br />
        consistency across all platforms.
      </>
    ),
  },
];

// Animation variant for cards
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.05, // 👈 تقليل التأخير
      duration: 0.3,   // 👈 تقليل مدة الأنيميشن
      ease: easeOut,
    },
  }),
};



function Card({ icon, title, desc, index }: CardProps) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      className="p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg w-full max-w-[95vw] sm:max-w-[400px] md:max-w-[454.4px] min-h-[260px] sm:min-h-[260px] md:min-h-[285px] h-auto flex flex-col gap-2 sm:gap-3 items-start bg-white/10 backdrop-blur-md border border-white/10"
    >
      <img src={icon} alt={title} className="w-9 sm:w-10 h-9 sm:h-10" />
      <h2 className="text-[30px] md:text-[35px] bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent font-semibold">
        {title}
      </h2>
      <p className="text-[21px]  break-words bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent font-[Thunder] font-medium ">
        {desc}
      </p>
    </motion.div>
  );
}

const WhatWeDo = () => {
  return (
    <>
    <div className="my-10 min-h-[900px] flex items-center justify-center relative py-10 md:py-32 px-2 sm:px-4 md:px-8">
      <div className="absolute hidden md:block">
        <div className='relative right-[700px] bottom-[520px] z-10 overflow-hidden'>
          <img src={'/light.svg'} alt="decoration" />
        </div>
      </div>

      <div className='w-full flex flex-col items-center z-30'>
        <div className="flex flex-col items-center mx-auto">
          <div className="mb-8 sm:mb-12 ">
            <h1 className="text-[60px] md:text-[70px] text-center bg-gradient-to-r from-white to-[#BD937A] bg-clip-text text-transparent font-[Thunder] font-medium">
              What We Do
            </h1>
            <div className='max-w-[1010px] mt-2 sm:mt-4'>
              <p className="text-white text-base sm:text-lg md:text-xl mb-4 sm:mb-8 poppins text-center">
                Our comprehensive services are designed to elevate your brand's digital presence and drive real business results.
              </p>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 xl:gap-8 justify-items-center">
            {cards.map((card, index) => (
              <Card key={card.title} {...card} index={index} />
            ))}
          </div>
        </div>
      </div>



    </div>


    </>
  );
};

export default WhatWeDo;
