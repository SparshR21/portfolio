import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  proptelligence,
  jpm,
  dhansetu,
  AI,
  threejs,
} from "../assets";

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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
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
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company_name: "Proptelligence Technologies",
    icon: proptelligence,
    iconBg: "#383E56",
    date: "July 2024 - September 2024",
    points: [
      "Managing and maintaining the company’s website by ensuring optimal performance, responsiveness, and seamless user experience across all devices and browsers.",
      "Developing and optimizing web applications using modern technologies such as React, Node.js, and Express.js to create dynamic and interactive user interfaces and robust backend services.",
      "Collaborating closely with cross-functional teams, including designers, product managers, and other developers, to design and implement scalable backend services.",
      "Staying updated with emerging web technologies and industry best practices to continuously enhance the performance, security, and scalability of web applications.",
    ],
  },
  {
    title: "J.P. Morgan Software Engineering Virtual Experience",
    company_name: "J.P. Morgan Chase & Co.",
    icon: jpm,
    iconBg: "#E6DEDD",
    date: "September 2024",
    points: [
      "Set up a local dev environment by downloading the necessary files, tools and dependencies.",
      "Fixed broken files in the repository to make web application output correctly.",
      "Used JPMorgan Chase’s Perspective to generate a live graph that displays a data feed in a clear and visually appealing way for traders to monitor.",
    ],
  },
  
];

const projects = [
  {
    name: "DanSetu",
    description:
      "Many individuals in this segment lack financial literacy and guidance on where and how to invest their money. Dhansetu bridges this gap using a machine learning algorithm that personalizes investment recommendations based on key user inputs such as income, financial goals, existing debts, occupation, and risk appetite.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: dhansetu,
    source_code_link: "https://github.com/SparshR21/Dhansetu",
  },
  {
    name: "AI Assistant",
    description:
      " AI assistant is a software application that uses artificial intelligence to understand natural language, follow commands, and perform tasks.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "speechrecognition",
        color: "green-text-gradient",
      },
    ],
    image: AI,
    source_code_link: "https://github.com/SparshR21/Dhansetu",
  },
];

export { services, technologies, experiences, projects };
