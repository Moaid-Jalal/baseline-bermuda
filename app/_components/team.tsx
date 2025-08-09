import { useRef } from "react";
import { useInView } from "framer-motion";

const teamMembers = [
  {
    imgSrc: "/team/murtez-sylejmani.jpg",
    altText: "Team Member 2",
    name: " Murtez Sylejmani",
  },
  {
    imgSrc: "/team/rinor-asllani.jpg",
    altText: "Team Member 1",
    name: "Rinor Asllani",
  }
];

export const Team = () => {
  const gridRef = useRef(null);
  const inView = useInView(gridRef, { once: true, margin: "-100px" });
  return (
    <div id='team' className="flex items-center justify-center w-full bg-black">
      <div className="w-full flex flex-col items-center px-2">
        <div className="sm:mb-12  mb-8">
          <h1 className="text-[60px] md:text-[70px] text-center bg-gradient-to-r from-white to-[#BD937A] bg-clip-text text-transparent font-[Thunder] font-medium">
            Meet the Team
          </h1>
          <h2 className="text-[26px] sm:text-[32px] leading-[36.1px] tracking-[0%] text-center align-middle bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent font-[Thunder] font-medium">
            The passionate professionals behind Bermuda's success.
          </h2>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-between bg-white/10 rounded-[15px] w-full max-w-[517.41px] h-[494.85px] mx-auto shadow-lg transition-all duration-700 ease-out ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="w-full">
                <img
                  src={member.imgSrc}
                  alt={member.altText}
                  className="w-full h-[345.23px] object-cover rounded-t-[15px]"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center w-full">
                <h1 className="text-center text-[50px] font-[Thunder] font-medium leading-[1.2] py-6 w-full bg-gradient-to-r from-white from-20% to-[#999999] to-80% bg-clip-text text-transparent">
                  {member.name}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
