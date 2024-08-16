import { SingleProject } from "../components/Project";

const rfTrainingSGS = "./video/rfTrainingSGS.mp4";
const netflik = "./video/netflik.mp4";
const chartMyJog = "./video/chartMyJog.mp4";
const calcQuest = "./video/calcQuest.mp4";

// import emojiStore from "../assets/img/emoji-store.png";
// import dsa from "../assets/img/dsa.png";

const projects: SingleProject[] = [
  {
    name: "CalcQuest",
    description:
      "CalcQuest is a SaaS platform that utilizes AI to help students improve math skills through engaging activities.",
    github: "https://github.com/AiDabblers/Flash_Card",
    website: "https://calcquest.netlify.app/",
    video: calcQuest,
  },
  {
    name: "Chart My Jog",
    description:
"Chart My Jog is a fitness app built with React, Tailwind, Material UI, Firebase, Firestore, Mapbox, Leaflet, and the Geolocation API. It tracks and records jogs in real-time, displaying routes on a map. Users can track progress, view, and share their accomplishments.",    github: "https://github.com/KYu-2468/ChartMyJog",
    website: "https://chart-my-jog.web.app/",
    video: chartMyJog,
  },
  {
    name: "RF Training",
    description:
"RF Training Website is an independent project built with React, Tailwind, Windmill, and Firebase. It helped new SGS hires learn 4G/5G RF systems, improving onboarding efficiency by 55% and reducing training costs by 65%. Firebase Authentication and Storage rules secure sensitive materials.",    github: "https://github.com/KYu-2468/RF-Training",
    website: "https://rf-training-sgs.web.app/",
    video: rfTrainingSGS,
  },
  {
    name: "Netflix-clone",
    description:
      "Netflix is one of the most popular streaming services currently available in the market. Netflik is built with React, Tailwind, TMDB API, React-Youtube, and AWS Amplify. All current videos are trailers of the corresponding movies.",
    github: "https://github.com/KYu-2468/netflixk",
    website: "https://prod.d3w3n4pah8m9bk.amplifyapp.com",
    video: netflik,
  },
  // {
  //   name: "Emoji Store",
  //   description:
  //     "An awesome E-commerce website built with React, Tailwind, Node.js, Express.js, PostgreSQL, React-three-fiber, Spline, and Stripe API! Users can purchase and sell emojis via our website. Payment methods are implemented using Stripe API.",
  //   github: "https://github.com/KYu-2468/EmojiStore",
  //   website: "#projects",
  //   image: emojiStore,
  // },
  // {
  //   name: "DSA",
  //   description:
  //     "An open source project that aims to help new software engineers learn how to contribute to open source projects through implementing efficient data structures and algorithms.",
  //   github: "https://github.com/MakeContributions/DSA",
  //   website: "#projects",
  //   image: dsa,
  // },
];

export default projects;
