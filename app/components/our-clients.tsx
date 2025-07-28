
import Image from "next/image";

export default function OurClients() {
  return (
    <section
      className="w-full flex justify-center items-center py-20"
      style={{ background: '#5652531F', minHeight: 890 }}
    >
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
            Who We've Worked With:
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
            We're proud to have collaborated with these amazing brands and individuals.
          </p>
        </div>
        <div className="w-full flex items-center justify-center mt-8">
          <div
            className="relative flex items-center justify-center"
            style={{
              width: '100%',
              maxWidth: '1197px',
              height: 'clamp(200px,40vw,449.12px)',
              left: 0,
            }}
          >
            <Image src="/our-clients.png" alt="Our Clients" fill style={{objectFit: 'contain'}} />
          </div>
        </div>
      </div>
    </section>
  );
}
