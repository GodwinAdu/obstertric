import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { buttonVariants } from "@/components/ui/button";
import { Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* <Navbar />? */}
      <HeroSection />
    </main>
  );
}
