import forkify from "@/../public/forkify.png";
import omnifood from "@/../public/omnifood.png";
import crownClothing from "@/../public/crown-clothing.png";

const PROJECT_TYPES = {
  landingPage: "Landing Page",
  sPA: "Single Page Application (SPA)",
  restAPI: "REST API",
};

const PORTFOLIO = [
  {
    title: "Forkify",
    description: "Search over 1,000,000 recipes",
    type: PROJECT_TYPES.sPA,
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
    title: "Crown Clothing",
    description: "A modern E-commerce store",
    type: PROJECT_TYPES.sPA,
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
    title: "Omnifood",
    type: PROJECT_TYPES.landingPage,
    description: "A modern E-commerce store",
    technologies: ["HTML", "CSS", "Javascript"],
    imageUrl: omnifood,
    url: "https://usama-365.github.io/omnifood/",
  },
  {
    title: "Omnifood",
    type: PROJECT_TYPES.landingPage,
    description: "A modern E-commerce store",
    technologies: ["HTML", "CSS", "Javascript"],
    imageUrl: omnifood,
    url: "https://usama-365.github.io/omnifood/",
  },
  {
    title: "Omnifood",
    type: PROJECT_TYPES.landingPage,
    description: "A modern E-commerce store",
    technologies: ["HTML", "CSS", "Javascript"],
    imageUrl: omnifood,
    url: "https://usama-365.github.io/omnifood/",
  },
  {
    title: "Omnifood",
    type: PROJECT_TYPES.landingPage,
    description: "A modern E-commerce store",
    technologies: ["HTML", "CSS", "Javascript"],
    imageUrl: omnifood,
    url: "https://usama-365.github.io/omnifood/",
  },
];

export default PORTFOLIO;
