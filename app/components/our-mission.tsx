import Image from "next/image";

export default function OurMission() {
  return (
    <section
      className="relative w-full flex items-center justify-center"
      style={{
        minHeight: 582,
        width: '100%',
        maxWidth: 1280,
        margin: '0 auto',
      }}
    >
      {/* Background image with blur overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/our-mission.png" // يمكنك تغيير المسار لصورة الخلفية المطلوبة
          alt="Background"
          fill
          style={{ objectFit: 'cover', opacity: 1 }}
          priority
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 md:px-0" style={{maxWidth: 1082}}>
        <h2
          className="text-white text-center mb-6"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontStyle: 'bold',
            fontSize: '46.03px',
            lineHeight: '60.16px',
            letterSpacing: '0%',
            verticalAlign: 'middle',
            width: '100%',
            maxWidth: 1082,
          }}
        >
          Our Mission
        </h2>
        <div
          className="mb-8"
          style={{
            width: '100%',
            maxWidth: 1082,
            minHeight: 126,
          }}
        >
          <p
            className="text-white text-center"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '24px',
              lineHeight: '42px',
              marginBottom: 0,
            }}
          >
            As a small team with big passion, we're here to elevate Bermuda's creative energy<br />
            online. We believe in authentic connections, strategic growth, and the power of<br />
            visual storytelling.
          </p>
        </div>
        <div
          style={{
            width: '100%',
            maxWidth: 1082,
            minHeight: 84,
          }}
        >
          <p
            className="text-white text-center"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '22px',
              lineHeight: '38px',
              marginBottom: 0,
            }}
          >
            Our mission is to help local businesses shine on the global digital stage while<br />
            maintaining their unique identity and values.
          </p>
        </div>
      </div>
    </section>
  );
}
