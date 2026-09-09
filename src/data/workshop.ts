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
    dateIso: string;
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
    keywords: string[];
  };
}

const officialWorkshopHref =
  "https://www.hipeac.net/events/sessions/8320/admit-accountable-decision-making-integrated-trust-autonomous-ai-systems/";

export const workshop: WorkshopData = {
  acronym: "ADMIT",
  fullTitle:
    "Accountable Decision-Making and Integrated Trust for Autonomous AI Systems",
  tagline:
    "Connecting responsible AI, security, and hardware for accountable autonomous systems.",
  event: {
    name: "HiPEAC 2027",
    dates: "18–20 January 2027",
    href: "https://www.hipeac.net/2027/glasgow/",
  },
  schedule: {
    date: "Monday, 18 January 2027",
    dateIso: "2027-01-18",
    time: "14:00–17:30",
  },
  venue: {
    name: "Scottish Event Campus (SEC)",
    room: "Etive",
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
      status: "tba",
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
          date: "Monday, 18 January 2027",
          time: "14:00–17:30",
          status: "confirmed",
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
        "ADMIT will take place in room Etive at the Scottish Event Campus in Glasgow.",
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
      label: "Official HiPEAC listing",
      href: officialWorkshopHref,
    },
    event: {
      label: "HiPEAC 2027",
      href: "https://www.hipeac.net/2027/glasgow/",
    },
  },
  seo: {
    title:
      "ADMIT | Accountable Decision-Making and Integrated Trust for Autonomous AI Systems",
    description:
      "ADMIT at HiPEAC 2027 explores responsible AI, security, and hardware for accountable autonomous systems and safe mobility.",
    siteUrl: "https://admit-workshop.github.io/",
    keywords: [
      "ADMIT workshop",
      "HiPEAC 2027",
      "accountable AI",
      "autonomous systems",
      "responsible AI",
      "automotive security",
      "hardware security",
      "real-time enforcement",
    ],
  },
};

export const visibleNavigation = workshop.navigation.filter(
  (item) => workshop.sections[item.section].status !== "hidden",
);
