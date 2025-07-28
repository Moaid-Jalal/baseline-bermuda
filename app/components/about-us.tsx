import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="w-full py-20 bg-white md:px-24 h-[650px] flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 px-4 md:px-0 h-full">

        {/* left */}
        <div className="flex-1 text-center md:text-left md:pr-8 flex flex-col items-center md:items-start justify-center">
            <h2
              className="mb-4 text-[#443C3A] font-bold"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontStyle: 'bold',
                fontSize: '48.69px',
                lineHeight: '63.64px',
                letterSpacing: '0%',
                verticalAlign: 'middle',
              }}
            >
              About Us
            </h2>


            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '21.64px',
                lineHeight: '38.18px',
                letterSpacing: '0%',
                textAlign: 'justify',
                verticalAlign: 'middle',
              }}
            >
              At Bermuda, we create force for impactful social media strategy, content, and digital growth. Specializing in tailored solutions for local businesses, brands, and entrepreneurs, we blend island culture with global trends to craft compelling online identities. From content creation and campaign management to influencer partnerships and analytics, our goal is to turn your social presence into real world results. Passionate, professional, and always current, we help you connect, grow, and thrive in the digital space
            </p>
        </div>


        {/* right */}
        <div className="flex-1 flex flex-wrap gap-4 justify-center md:justify-end items-center">
          <div className="w-32 h-32 relative rounded-lg overflow-hidden shadow-md">
            <Image src="/globe.svg" alt="Globe" fill style={{objectFit: 'cover'}} />
          </div>
          <div className="w-32 h-32 relative rounded-lg overflow-hidden shadow-md">
            <Image src="/window.svg" alt="Window" fill style={{objectFit: 'cover'}} />
          </div>
          <div className="w-32 h-32 relative rounded-lg overflow-hidden shadow-md hidden md:block">
            <Image src="/vercel.svg" alt="Vercel" fill style={{objectFit: 'cover'}} />
          </div>
        </div>
      </div>
    </section>
  );
}
