import Image from "next/image";

const processSteps = [
  {
    icon: "/globe.svg",
    title: "Discovery Call",
    desc: "We get to know your brand, goals, and challenges."
  },
  {
    icon: "/window.svg",
    title: "Strategy Proposal",
    desc: "We develop a tailored plan to achieve your specific objectives."
  },
  {
    icon: "/vercel.svg",
    title: "Content Calendar",
    desc: "We create a detailed content schedule aligned with your strategy."
  },
  {
    icon: "/logo.svg",
    title: "Execution & Reporting",
    desc: "We implement the strategy and provide regular performance updates."
  },
];

export default function OurProcess() {
  return (
    <section className="w-full flex justify-center items-center bg-white py-20" style={{minHeight: 1059}}>
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
            Our Process
          </h2>
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
            We follow a proven methodology to ensure your success at every step of the journey.
          </p>
        </div>
        <div className="w-full max-w-[1082px] grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white rounded-[12.03px] shadow-[0_6.02px_9.02px_-1.5px_rgba(0,0,0,0.1),0_3.01px_6.02px_-3.01px_rgba(0,0,0,0.1)] p-8 min-h-[277px]"
              style={{minWidth: 0}}
            >
              <div className="mb-4 flex items-center justify-center">
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: 120.33,
                    height: 120.33,
                    borderRadius: 15039.62,
                    background: '#BD937B33',
                  }}
                >
                  <div style={{ width: 60.16, height: 60.16, position: 'relative' }}>
                    <Image src={step.icon} alt={step.title} fill style={{objectFit: 'contain'}} />
                  </div>
                </div>
              </div>
              <div
                className="mb-2 text-[#443C3A] text-center"
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
                {step.title}
              </div>
              <div
                className="text-[#443C3A] text-center"
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
                {step.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
