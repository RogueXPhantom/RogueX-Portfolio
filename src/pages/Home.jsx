import React from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import Certifications from "@/components/sections/Certifications";
import MissionLogs from "@/components/sections/MissionLogs";
import ResearchNotes from "@/components/sections/ResearchNotes";
import GithubSection from "@/components/sections/GithubSection";
import ResumeSection from "@/components/sections/ResumeSection";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="hairline" />
      <About />
      <div className="hairline" />
      <Projects />
      <div className="hairline" />
      <TechStack />
      <div className="hairline" />
      <Certifications />
      <div className="hairline" />
      <MissionLogs />
      <div className="hairline" />
      <ResearchNotes />
      <div className="hairline" />
      <GithubSection />
      <div className="hairline" />
      <ResumeSection />
      <div className="hairline" />
      <Contact />
    </>
  );
}
