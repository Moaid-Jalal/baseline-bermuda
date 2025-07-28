import Image from "next/image";

const services = [
  {
    icon: "/globe.svg",
    title: "Social Media Strategy",
    desc: "Tailored strategies to grow your brand and engage your audience across all platforms."
  },
  {
    icon: "/window.svg",
    title: "Content Creation",
    desc: "Creative visuals and copywriting that reflect your brand’s unique voice and story."
  },
  {
    icon: "/vercel.svg",
    title: "Campaign Management",
    desc: "End-to-end management of digital campaigns for maximum impact and results."
  },
  {
    icon: "/logo.svg",
    title: "Influencer Partnerships",
    desc: "Connecting you with the right influencers to amplify your message authentically."
  },
  {
    icon: "/file.svg",
    title: "Analytics & Reporting",
    desc: "Data-driven insights to track performance and optimize your digital presence."
  },
  {
    icon: "/next.svg",
    title: "Brand Consulting",
    desc: "Expert advice to help you define, position, and grow your brand online."
  },
];

export default function OurService() {
  return (
    <section className="w-full flex justify-center items-center bg-white py-20" style={{minHeight: 1492}}>
      <div className="w-full max-w-[1280px] px-4 md:px-8 flex flex-col items-center">
        <div className="w-full max-w-[1082px] mx-auto mb-6">
          <h2
            className="text-center text-[#443C3A] mb-4"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontStyle: 'bold',
              fontSize: '46.03px',
              lineHeight: '60.16px',
              letterSpacing: '0%',
              verticalAlign: 'middle',
            }}
          >
            what we do
          </h2>
        </div>
        <div className="w-full max-w-[1010px] mx-auto mb-10">
          <p
            className="text-center text-[#443C3A]"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '20.46px',
              lineHeight: '36.1px',
              letterSpacing: '0%',
              verticalAlign: 'middle',
            }}
          >
            Our comprehensive services are designed to elevate your brand's digital presence and drive<br />
            real business results.
          </p>
        </div>
        <div className="w-full max-w-[1082px] grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-center md:items-start bg-white rounded-[12.03px] shadow-[0_6.02px_9.02px_-1.5px_rgba(0,0,0,0.1),0_3.01px_6.02px_-3.01px_rgba(0,0,0,0.1)] p-8 gap-6 min-h-[325px]"
              style={{minWidth: 0}}
            >
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 w-16 h-16 relative">
                <Image src={service.icon} alt={service.title} fill style={{objectFit: 'contain'}} />
              </div>
              <div className="flex-1 flex flex-col items-center md:items-start">
                <div
                  className="mb-2 text-[#443C3A] text-center md:text-left"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontStyle: 'bold',
                    fontSize: '25.57px',
                    lineHeight: '42.12px',
                    letterSpacing: '0%',
                    verticalAlign: 'middle',
                  }}
                >
                  {service.title}
                </div>
                <div
                  className="text-[#443C3A] text-center md:text-left"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '20.46px',
                    lineHeight: '36.1px',
                    letterSpacing: '0%',
                    verticalAlign: 'middle',
                  }}
                >
                  {service.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
