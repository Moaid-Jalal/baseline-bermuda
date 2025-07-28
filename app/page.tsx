import Image from "next/image";
import Header from "./components/header";
import AboutUs from "./components/about-us";
import OurMission from "./components/our-mission";
import OurService from "./components/our-service";
import OurProcess from "./components/our-process";
import OurClients from "./components/our-clients";
import OurTeam from "./components/our-team";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <AboutUs/>
      <OurMission/>
      <OurService/>
      <OurProcess/>
      <OurClients/>
      <OurTeam/>
      <Contact/>
      <Footer/>
    </div>
  );
}
