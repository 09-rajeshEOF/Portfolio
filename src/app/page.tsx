import Image from "next/image";
import Navbar from "@/components/Navbar";
import About from "@/components/About"
import { HeroSectionBanner } from "@/components/HeroSectionBanner";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar/>
      <HeroSectionBanner/>
      <div className="max-w-7xl mx-auto">
        <About/>
      </div>
    </main>
  );
}
