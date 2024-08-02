import Image from "next/image";
import Navbar from "@/components/Navbar";
import { HeroSectionBanner } from "@/components/HeroSectionBanner";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar/>
      <HeroSectionBanner/>
    </main>
  );
}
