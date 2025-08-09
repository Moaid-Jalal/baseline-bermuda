"use client"
import Image from "next/image";
import Header from "./_components/header";
import "./globals.css"
import { SecondComponent } from "./_components/second-component";
import AboutUs from "./_components/about-us";
import WhatWeDo from "./_components/what-we-do";
import { WhiteCircle } from "./lib/white-circle";
import { OutClients } from "./_components/our-clients";
import { Team } from "./_components/team";
import { Contact } from "./_components/contact";
import { Navbar } from "./_components/navbar";
import { OurProcess } from "./_components/our-process";

export default function Home() {
  return (
    <div className="bg-black">
      <div className="w-full max-w-[1440px] h-[800px] absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center">
        <div className="header w-full h-full"></div>
      </div>
      <Navbar />
      <Header />

      <div className="">
        <SecondComponent />
        <AboutUs/>

        <WhatWeDo/>
        <OurProcess/>
        <OutClients/>


        <div className="relative h-[250px] my-40 z-20">
          <div className="w-full bg-black absolute h-[150px] top-0 left-0">
            <div className="w-full text-white max-w-[1440px] mx-auto px-8">
              <div className="flex justify-end w-full relative">
                <img
                  src="/circle-middle.svg"
                  alt="Image"
                  className="z-20"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-30">
          <Team />
        </div>

        <Contact/>
      </div>
    </div>
  );
}
