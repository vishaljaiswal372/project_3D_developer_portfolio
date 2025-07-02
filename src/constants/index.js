import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import insta from "../assets/tech/insta.png";
import Linkedin from "../assets/tech/Linkedin.png";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Competitive Programmer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Recoil Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    web:"https://www.geeksforgeeks.org/user/vishal200oazh/" ,
    title: "GeeksForGeeks",
    icon: starbucks,
    iconBg: "#383E56",
    points: [
      "Solved 450+ DSA Questions",
      "Contest Rating 1650",
    ],
  },
  {
    web:"https://leetcode.com/u/vishal2004jaiswal/",
    title: "LeetCode",
    icon: tesla,
    iconBg: "#E6DEDD",
    points: [
      "Solved 400+ DSA Questions",
      "Contest Rating 1610 plus",
    ],
  },
  {
    web:"https://www.codechef.com/user/vishajais",
    title: "CodeChef",
    icon: shopify,
    iconBg: "#383E56",
    points: [
      "two star Coder",
      "contest Rating 1410 plus"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const media=[{id:"3",title:"instagram",link:"https://www.instagram.com/vishal_denzel/",icon:insta},{id:"1",title:"Linkedin",link:"https://www.linkedin.com/in/vishal-jaiswal-10b962248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",icon:Linkedin},{id:"2",title:"Github",link:"https://github.com/vishaljaiswal372",icon:git}];

const projects = [
  {
    name: "Code Editor",
    description:"code editor that allows users to write and run code in HTML, CSS, and JavaScript.editor provides an interface for users to input their code, and upon execution, it renders the output on the same page.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/vishaljaiswal372/code-editor-",
  },
  {
    name: "virtual Assistant",
    description:
      " virtual assistant that interacts with users and redirects them to relevant pages based on the questions they ask.Designed CSS to ensure a user-friendly and visually appealing interface.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "hTML",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/vishaljaiswal372/virtual-assistant",
  },
];

export { services, technologies, experiences, testimonials, projects ,media};
