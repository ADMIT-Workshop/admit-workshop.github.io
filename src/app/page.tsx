import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { ImportantDates } from "@/components/ImportantDates";
import { News } from "@/components/News";
import { Organizers } from "@/components/Organizers";
import { Participation } from "@/components/Participation";
import { Program } from "@/components/Program";
import { Speakers } from "@/components/Speakers";
import { Venue } from "@/components/Venue";

export default function Home() {
  return (
    <main>
      <Hero />
      <News />
      <About />
      <Speakers />
      <ImportantDates />
      <Participation />
      <Program />
      <Organizers />
      <Venue />
      <Contact />
    </main>
  );
}
