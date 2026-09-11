export type SectionStatus = "published" | "tba" | "hidden";

export type WorkshopSectionKey =
  | "news"
  | "about"
  | "importantDates"
  | "participation"
  | "speakers"
  | "program"
  | "organizers"
  | "venue"
  | "contact";

export interface SectionBase {
  id: string;
  eyebrow: string;
  title: string;
  status: SectionStatus;
  tbaMessage?: string;
}

export interface WorkshopLink {
  label: string;
  href: string;
}

export interface NavigationItem extends WorkshopLink {
  section: WorkshopSectionKey;
}

export interface NewsItem {
  title: string;
  summary: string;
  href?: string;
}

export interface ImportantDate {
  label: string;
  date: string;
  time?: string;
  status: "confirmed" | "tba";
}

export interface Speaker {
  name: string;
  affiliation: string;
  talkTitle?: string;
  href?: string;
}

export interface Organizer {
  name: string;
  affiliation: string;
  href?: string;
}

export interface ProgramEntry {
  time: string;
  title: string;
  speaker?: string;
  description?: string;
}

export interface WorkshopData {
  acronym: string;
  fullTitle: string;
  tagline: string;
  event: {
    name: string;
    dates: string;
    href: string;
  };
  schedule: {
    date: string;
    dateIso?: string;
    time: string;
  };
  venue: {
    name: string;
    room: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
  navigation: NavigationItem[];
  sections: {
    news: SectionBase & { items: NewsItem[] };
    about: SectionBase & { paragraphs: string[] };
    importantDates: SectionBase & {
      items: ImportantDate[];
      note?: string;
    };
    participation: SectionBase & {
      summary?: string;
      submissionHref?: string;
    };
    speakers: SectionBase & { items: Speaker[] };
    program: SectionBase & {
      summary?: string;
      items: ProgramEntry[];
    };
    organizers: SectionBase & { items: Organizer[] };
    venue: SectionBase & { summary: string };
    contact: SectionBase & {
      email?: string;
      summary?: string;
    };
  };
  links: {
    officialWorkshop: WorkshopLink;
    event: WorkshopLink;
  };
  seo: {
    title: string;
    description: string;
    siteUrl: string;
    image: {
      path: string;
      width: number;
      height: number;
      alt: string;
    };
  };
}

const officialWorkshopHref =
  "https://www.hipeac.net/events/sessions/8320/admit-accountable-decision-making-integrated-trust-autonomous-ai-systems/";

export const workshop: WorkshopData = {
  acronym: "ADMIT",
  fullTitle:
    "Accountable Decision-Making and Integrated Trust for Autonomous AI Systems",
  tagline:
    "The ADMIT Workshop at HiPEAC 2027 connects accountable AI, AI security, and hardware security for trustworthy autonomous systems.",
  event: {
    name: "HiPEAC 2027",
    dates: "18–20 January 2027",
    href: "https://www.hipeac.net/2027/glasgow/",
  },
  schedule: {
    date: "TBD",
    time: "TBD",
  },
  venue: {
    name: "Scottish Event Campus (SEC)",
    room: "TBD",
    address: "Exhibition Way",
    city: "Glasgow",
    postalCode: "G3 8YW",
    country: "United Kingdom",
  },
  navigation: [
    { label: "News", href: "#news", section: "news" },
    { label: "About", href: "#about", section: "about" },
    { label: "Speakers", href: "#speakers", section: "speakers" },
    {
      label: "Important Dates",
      href: "#important-dates",
      section: "importantDates",
    },
    {
      label: "Participation",
      href: "#participation",
      section: "participation",
    },
    { label: "Program", href: "#program", section: "program" },
    { label: "Organizers", href: "#organizers", section: "organizers" },
    { label: "Venue", href: "#venue", section: "venue" },
    { label: "Contact", href: "#contact", section: "contact" },
  ],
  sections: {
    news: {
      id: "news",
      eyebrow: "Updates",
      title: "News",
      status: "hidden",
      tbaMessage: "Workshop announcements will be posted here.",
      items: [],
    },
    about: {
      id: "about",
      eyebrow: "About ADMIT",
      title: "Accountability before actuation",
      status: "published",
      paragraphs: [
        "Autonomous vehicles can improve safety and mobility, but failures can have severe consequences. A trustworthy system must recognize when an action is unreliable and move to a safe fallback before harm occurs.",
        "That assurance is difficult in tightly coupled AI pipelines that combine heterogeneous sensors, safety-critical communication, and strict real-time constraints. ADMIT brings the full decision chain into view before a command reaches vehicle actuators.",
      ],
    },
    importantDates: {
      id: "important-dates",
      eyebrow: "Calendar",
      title: "Important Dates",
      status: "published",
      items: [
        {
          label: "ADMIT workshop",
          date: "TBD",
          time: "TBD",
          status: "tba",
        },
      ],
      note: "Submission and participation dates are to be announced.",
    },
    participation: {
      id: "participation",
      eyebrow: "Contribute",
      title: "Call for Papers / Participation",
      status: "tba",
      tbaMessage:
        "Submission and participation details have not yet been announced.",
    },
    speakers: {
      id: "speakers",
      eyebrow: "Invited Programme",
      title: "Invited Speakers",
      status: "tba",
      tbaMessage: "Confirmed invited speakers will be announced here.",
      items: [],
    },
    program: {
      id: "program",
      eyebrow: "Schedule",
      title: "Program",
      status: "tba",
      tbaMessage: "The detailed workshop program is to be announced.",
      summary:
        "The invited programme will connect AI, security, and hardware perspectives, with autonomous driving as the motivating application.",
      items: [],
    },
    organizers: {
      id: "organizers",
      eyebrow: "People",
      title: "Organizers",
      status: "published",
      items: [
        {
          name: "Pedro Trancoso",
          affiliation: "Chalmers University of Technology",
          href: "https://www.hipeac.net/~pedro/",
        },
        {
          name: "Magnus Almgren",
          affiliation: "Chalmers University of Technology",
          href: "https://www.hipeac.net/~magnus.almgren9/",
        },
      ],
    },
    venue: {
      id: "venue",
      eyebrow: "HiPEAC 2027",
      title: "Venue",
      status: "published",
      summary:
        "ADMIT will take place at the Scottish Event Campus in Glasgow. Room: TBD.",
    },
    contact: {
      id: "contact",
      eyebrow: "Get in Touch",
      title: "Contact",
      status: "tba",
      tbaMessage:
        "A workshop-specific contact address has not yet been announced.",
      summary:
        "For the latest confirmed information, please consult the official HiPEAC workshop listing.",
    },
  },
  links: {
    officialWorkshop: {
      label: "ADMIT Workshop on HiPEAC",
      href: officialWorkshopHref,
    },
    event: {
      label: "HiPEAC 2027",
      href: "https://www.hipeac.net/2027/glasgow/",
    },
  },
  seo: {
    title:
      "ADMIT Workshop at HiPEAC 2027 | Accountable & Trustworthy AI",
    description:
      "ADMIT Workshop at HiPEAC 2027 explores accountable decision-making, trustworthy autonomous AI systems, AI security, and hardware security in Glasgow.",
    siteUrl: "https://admit-workshop.github.io/",
    image: {
      path: "/share-image.png",
      width: 1200,
      height: 630,
      alt: "ADMIT Workshop at HiPEAC 2027 — Accountable Decision-Making and Integrated Trust for Autonomous AI Systems",
    },
  },
};

export const visibleNavigation = workshop.navigation.filter(
  (item) => workshop.sections[item.section].status !== "hidden",
);
