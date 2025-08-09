import { WhiteCircle } from "../lib/white-circle";

const contactData = [
  {
    icon: "/icons/email.svg",
    details: "bermuda02marketing@gmail.com"
  },
  {
    icon: "/icons/instagram.svg",
    details: "@bermudamarketing"
  },
  {
    icon: "/icons/phone.svg",
    details: "044 444 145 / 045 888 571"
  },
  {
    icon: "/icons/location.svg",
    details: "Based in Kosovo, working worldwide"
  }
];

export const Contact = () => {
  return (
    <div id="contact" className="w-full flex justify-center bg-black py-12 px-2 lg:px-20 overflow-y-hidden">
      <div className="w-full max-w-[1440px] lg:px-8 sm:flex justify-between items-start text-white">
        {/* Left Section */}
        <div className="space-y-6">
          <h1 className="text-[70px] leading-[70px] tracking-[0%] bg-gradient-to-r from-[#BD937A] to-white bg-clip-text text-transparent font-[Thunder] font-medium">
            Contact
          </h1>

          {contactData.map((item, index) => (
            <div className="flex items-center space-x-3" key={index}>
              <img
                src={item.icon}
                alt={`icon ${index + 1}`}
                className="w-6 h-6"
              />
              <p className="text-white poppins">{item.details}</p>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="rounded-md sm:w-1/3 relative">
          <img
            src={'/Glowing Ring in Darkness-bottom.svg'}
          />
        </div>
      </div>
    </div>
  );
};
