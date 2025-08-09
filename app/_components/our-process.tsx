import React from 'react'
import { motion } from 'framer-motion';

  const cards = [
    {
      number: 1,
      title: "Discovery Call",
      desc: "We learn about your business, goals, and target audience.",
      z: "",
    },
    {
      number: 2,
      title: "Strategy Proposal",
      desc: "We develop a tailored plan to achieve your  specific objectives.",
      z: "z-10",
    },
    {
      number: 3,
      title: "Content Calendar",
      desc: "We create a detailed content schedule aligned with your strategy.",
      z: "z-20",
    },
    {
      number: 4,
      title: "Execution & Reporting",
      desc: "We implement the strategy and provide regular  performance updates.",
      z: "z-30",
    },
  ];

  export const OurProcess = () => {
    return (
      <div id='process' className='min-h-[900px] flex items-center justify-center relative bg-transparent py-10 md:py-32 px-2 sm:px-4 md:px-8'>
        <div className='w-full flex flex-col items-center'>

          <h1
            className="text-[60px] md:text-[70px] text-center 
            bg-gradient-to-r from-[#BD937A] to-[#BD937A] bg-clip-text text-transparent 
            font-medium mb-8 md:mb-12"
          >
            Our Process
          </h1>


          <div className="w-full flex flex-col items-center">
            {cards.map((card, idx) => (
              <motion.div
                key={card.number}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: idx * 0.2, ease: "easeOut" }}
                className={`w-full max-w-[95vw] sm:max-w-[600px] md:max-w-[800px] xl:max-w-[1000px] min-w-[0] h-[260px] sm:h-[300px] md:h-[350px] rounded-[24px] sm:rounded-[32px] md:rounded-[40px]  bg-gradient-to-b from-white/20 to-[#99999900] shadow-[0_0_30px_0_rgba(255,255,255,0.1)] backdrop-blur-md -mt-4 sm:-mt-6 md:-mt-8 ${card.z}`}
                style={{ marginTop: idx === 0 ? 0 : undefined }}
              >
                <div className='w-full h-full flex flex-col items-center pt-6 px-3'>
                  <div
                    className="text-[48px] md:text-[72px] font-[400px] 
                    bg-gradient-to-r from-[#BD937A] to-white bg-clip-text text-transparent"
                  >
                    {card.number}
                  </div>
                  <div>
                    <div className="text-[35px] sm:text-[40px] md:text-[45px] font-medium text-center bg-gradient-to-r from-white to-[#BD937A] bg-clip-text text-transparent">
                      {card.title}
                    </div>
                      <div className="max-w-[550px] text-[23px] sm:text-[27px] md:text-[30px] text-white text-center opacity-80">
                        {card.desc}
                      </div>
                    </div>
                  </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  };
