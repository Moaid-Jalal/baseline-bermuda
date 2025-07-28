import Image from "next/image";

const team = [
  {
    img: "/first.jpg",
    name: "Rinor Asllani"
  },
  {
    img: "/second.jpg",
    name: " Murtez Sylejmani"
  },
];

export default function OurTeam() {
  return (
    <section className="w-full flex justify-center items-center bg-white py-12" style={{minHeight: 409}}>
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
            Meet the Team:
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
            The passionate professionals behind Bermuda's success.
          </p>
        </div>
        <div className="w-full max-w-[1082px] mx-auto flex flex-col md:flex-row gap-8 mt-8 justify-center items-stretch items-center">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-white rounded-[12.03px] shadow-[0_6.02px_9.02px_-1.5px_rgba(0,0,0,0.1),0_3.01px_6.02px_-3.01px_rgba(0,0,0,0.1)]"
              style={{width: '100%', maxWidth: '517.41px', minWidth: 0, height: '494.85px', display: 'flex', marginLeft: 'auto', marginRight: 'auto'}}
            >
              <div className="relative w-full" style={{height: '345.23px'}}>
                <Image src={member.img} alt={member.name} fill style={{objectFit: 'cover', borderTopLeftRadius: '12.03px', borderTopRightRadius: '12.03px'}} />
              </div>
              <div className="flex flex-col items-center justify-center w-full" style={{height: '156.43px'}}>
                <div
                  className="text-[#443C3A] text-center"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontStyle: 'bold',
                    fontSize: '30.08px',
                    lineHeight: '42.12px',
                    letterSpacing: '0%',
                    verticalAlign: 'middle',
                    maxWidth: '445.22px',
                  }}
                >
                  {member.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
