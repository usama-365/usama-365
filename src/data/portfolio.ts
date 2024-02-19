import type { StaticImageData } from "next/image";

import forkify from "@/../public/portfolio/forkify.png";
import omnifood from "@/../public/portfolio/omnifood.png";
import crownClothing from "@/../public/portfolio/crown-clothing.png";
import antheia from "@/../public/portfolio/antheia.png";
import retrosGallery from "@/../public/portfolio/retros-gallery.png";
import triform from "@/../public/portfolio/triform.png";
import truebrydge from "@/../public/portfolio/truebrydge.png";
import allonia from "@/../public/portfolio/allonia.png";
import voytravel from "@/../public/portfolio/voytravel.png";
import bankist from "@/../public/portfolio/bankist.png";
import wishbux from "@/../public/portfolio/wishbux.png";
import natours from "@/../public/portfolio/natours.png";
import natoursApp from "@/../public/portfolio/natours-app.png";

enum PROJECT_TYPES {
  LANDING_PAGE = "Landing Page",
  WEBSITE = "Website",
  WEB_APP = "Web Application",
  SPA = "Single Page Application (SPA)",
  REST_API = "REST API",
}

type PortfolioItem = {
  title: string;
  description: string;
  type: PROJECT_TYPES;
  technologies: string[];
  imageUrl: StaticImageData;
  url: string;
};

let PORTFOLIO: PortfolioItem[] = [
  {
    title: "Antheia",
    description: "A synthetic biology company",
    type: PROJECT_TYPES.WEBSITE,
    technologies: [
      "PHP",
      "Wordpress",
      "Greenhouse",
      "jQuery",
      "MySQL",
      "GSAP",
      "Swiper",
      "LottieFiles",
    ],
    imageUrl: antheia,
    url: "https://antheia.bio/",
  },
  {
    title: "Wishbux",
    type: PROJECT_TYPES.LANDING_PAGE,
    description: "Turn your wishes into cash!",
    technologies: [
      "React",
      "NextJS",
      "NodeJS",
      "Tailwind CSS",
      "Vercel",
      "HTML",
      "Typescript",
    ],
    imageUrl: wishbux,
    url: "https://www.wishbux.com/",
  },
  {
    title: "Triform",
    description: "Unleashing AI Potential",
    type: PROJECT_TYPES.WEB_APP,
    technologies: [
      "Laravel",
      "PHP",
      "Livewire",
      "Alpine",
      "Ace",
      "Lodash",
      "Axios",
    ],
    imageUrl: triform,
    url: "https://triform.movs.ai/",
  },
  {
    title: "Forkify",
    description: "Search over 1,000,000 recipes",
    type: PROJECT_TYPES.SPA,
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "Parcel",
      "Fracty",
      "CoreJS",
      "Regenerator Runtime",
    ],
    imageUrl: forkify,
    url: "https://usama-365-forkify.vercel.app",
  },

  {
    title: "Allonia",
    description: "Transformative in nature",
    type: PROJECT_TYPES.WEBSITE,
    technologies: [
      "GSAP",
      "PHP",
      "jQuery",
      "Elementor",
      "MySQL",
      "Swiper",
      "GSAP",
      "Hubspot",
    ],
    imageUrl: allonia,
    url: "https://allonnia.com/",
  },
  {
    title: "Natours",
    type: PROJECT_TYPES.WEB_APP,
    description: "Book your tours now!",
    technologies: [
      "NodeJS",
      "ExpressJS",
      "Stripe",
      "Parcel",
      "Vercel",
      "HTML",
      "CSS",
    ],
    imageUrl: natoursApp,
    url: "https://usama-365-natours.vercel.app/",
  },
  {
    title: "Omnifood",
    type: PROJECT_TYPES.LANDING_PAGE,
    description: "Never cook again!",
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "jQuery",
      "Isotope",
      "Github Pages",
    ],
    imageUrl: omnifood,
    url: "https://usama-365.github.io/omnifood/",
  },

  {
    title: "Voy Travel",
    description: "Unlock the value of travel",
    type: PROJECT_TYPES.WEBSITE,
    technologies: [
      "GSAP",
      "PHP",
      "jQuery",
      "Elementor",
      "MySQL",
      "Swiper",
      "GSAP",
    ],
    imageUrl: voytravel,
    url: "https://www.voytravel.com/",
  },
  {
    title: "Crown Clothing",
    description: "A modern E-commerce store",
    type: PROJECT_TYPES.SPA,
    technologies: [
      "React",
      "Redux",
      "Typescript",
      "Stripe",
      "SASS",
      "Firebase",
    ],
    imageUrl: crownClothing,
    url: "https://usama-365-crown-clothing.vercel.app",
  },
  {
    title: "TrueBrydge",
    description: "Build relationships, not campaigns",
    type: PROJECT_TYPES.WEBSITE,
    technologies: [
      "GSAP",
      "PHP",
      "jQuery",
      "Wordpress",
      "MySQL",
      "Swiper",
      "GSAP",
    ],
    imageUrl: truebrydge,
    url: "https://truebrydge.com/",
  },
  {
    title: "Bankist",
    type: PROJECT_TYPES.LANDING_PAGE,
    description: "Where banking meets minimalism",
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "jQuery",
      "Isotope",
      "Github Pages",
    ],
    imageUrl: bankist,
    url: "https://usama-365.github.io/bankist-landing-page/",
  },
  {
    title: "Retros Gallery",
    description: "A Vintage design dealer from Bucharest",
    type: PROJECT_TYPES.WEBSITE,
    technologies: [
      "GSAP",
      "PHP",
      "jQuery",
      "Wordpress",
      "MySQL",
      "Swiper",
      "GSAP",
    ],
    imageUrl: retrosGallery,
    url: "https://www.retros-gallery.com/",
  },
  {
    title: "Natours",
    type: PROJECT_TYPES.LANDING_PAGE,
    description: "Exciting tours for adventurous people!",
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "jQuery",
      "Isotope",
      "Github Pages",
    ],
    imageUrl: natours,
    url: "https://usama-365.github.io/natours/",
  },
];

export default PORTFOLIO;
