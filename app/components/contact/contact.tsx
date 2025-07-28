import React from "react";
import ContactInfo from "./contact-Info";
import { ContactForm } from "./contact-form";

const allSvgs = {
    gmail: (
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="8" fill="#BD937B33"/>
            <path d="M6 10.5l10 8 10-8" stroke="#BD937B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="6" y="10.5" width="20" height="11" rx="2" stroke="#BD937B" strokeWidth="2"/>
        </svg>
    ),
    instagram: (
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="8" fill="#BD937B33"/>
            <path d="M16 10c-3.314 0-6 2.686-6 6 0 3.314 2.686 6 6 6s6-2.686 6-6c0-3.314-2.686-6-6-6zm0 10.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z" fill="#BD937B"/>
        </svg>
    ),
    phone: (
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="8" fill="#BD937B33"/>
            <path d="M8 12h16M8 16h16M8 20h10" stroke="#BD937B" strokeWidth="2" strokeLinecap="round"/>
        </svg>
    ),
    location: (
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="8" fill="#BD937B33"/>
            <path d="M16 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 0V8m0 16v-4" stroke="#BD937B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    ),
}

export default function Contact() {
  return (
    <section className="w-full bg-[#EBEAEA] flex justify-center items-center py-20" style={{minHeight: 1179}}>
      <div className="w-full max-w-[1280px] px-4 md:px-8 flex flex-col items-center">
        <div className="w-full max-w-[1082px] mx-auto mb-10">
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
            Let's Connect:
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
            Ready to elevate your digital presence? Reach out to discuss how we can help your brand grow.
          </p>
        </div>
        <div className="w-full max-w-[1082px] mx-auto flex flex-col md:flex-row gap-8 items-stretch justify-center">
          {/* Left: Contact Info */}
          <div className="flex flex-col justify-center w-full md:w-[505.38px] bg-[#EBEAEA] gap-6">
            <ContactInfo icon={allSvgs.gmail} label="Gmail:" value="bermuda02marketing@gmail.com" />
            <ContactInfo icon={allSvgs.location} label="Location:" value="Based in Kosovo, working worldwide" />
            <ContactInfo icon={allSvgs.phone} label="Phone:" value="044 444 145 / 045 888 571" />
            <ContactInfo icon={allSvgs.location} label="Address:" value="Based in Kosovo, working worldwide" />
          </div>
          {/* Right: Contact Form */}
          <div
            className="bg-white rounded-[12.03px] shadow-[0_6.02px_9.02px_-1.5px_rgba(0,0,0,0.1),0_3.01px_6.02px_-3.01px_rgba(0,0,0,0.1)] flex flex-col justify-center p-8 w-full md:w-[505.38px]"
            style={{minHeight: '685.88px'}}
          >
            <ContactForm/>
          </div>
        </div>


      </div>
    </section>
  );
}
