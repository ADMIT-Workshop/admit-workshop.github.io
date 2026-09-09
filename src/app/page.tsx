import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { ImportantDates } from "@/components/ImportantDates";
import { News } from "@/components/News";
import { Organizers } from "@/components/Organizers";
import { Participation } from "@/components/Participation";
import { Program } from "@/components/Program";
import { ResearchPillars } from "@/components/ResearchPillars";
import { ResearchVision } from "@/components/ResearchVision";
import { Speakers } from "@/components/Speakers";
import { Topics } from "@/components/Topics";
import { Venue } from "@/components/Venue";

export default function Home() {
  return (
    <main>
      <Hero />
      <News />
      <About />
      <ResearchVision />
      <ResearchPillars />
      <Topics />
      <ImportantDates />
      <Participation />
      <Speakers />
      <Program />
      <Organizers />
      <Venue />
      <Contact />
    </main>
  );
}
