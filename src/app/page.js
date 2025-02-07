"use client"
import About from "@/component/About";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";
import Hero from "@/component/Hero";
import Icons from "@/component/Icon";
import Navbar from "@/component/Navbar";
import Project from "@/component/Project";
import Image from "next/image";
import "@/app/globals.css"

export default function Home() {
  return (
    <div className="w-[100%] overflow-x-hidden">
     <Navbar />
      <Hero />
      <Icons />
      <About />
      <Project />
      <Contact/>
      <Footer/>
    </div>
  );
}
