
import { Navbar } from "./navbar";
import Image from "next/image";

export default function Header() {
  return (
    <header className="relative w-full h-[650px] rounded-bl-3xl rounded-br-3xl flex flex-col bg-[#443C3A]">
      <Navbar />
      <div
        className="flex-1 flex flex-col items-start justify-center text-left relative px-8"
      >
        <h1 className="text-4xl font-bold text-white drop-shadow-lg mb-4">Welcome to Bermuda</h1>
        <p className="text-lg text-white drop-shadow mb-6">Discover the beauty of Bermuda with us.</p>
        <button className="px-6 py-2 bg-white text-blue-700 font-semibold rounded shadow hover:bg-blue-100 transition">See More</button>
      </div>
    </header>
  );
}
