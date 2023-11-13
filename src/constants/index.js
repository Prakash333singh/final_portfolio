import {
  mobile,
  backend,
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
  airpods,
  bigboytoys,
  interacts,
  threejs,
  cognizant,
  mit,
  ghd,
  conestoga,
  CV_Duncan,
} from "../assets";

export const CVDuncan = CV_Duncan;

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
  {
    id: "resume",
    title: "Download Resume",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "React  Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },

  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },

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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },

  // {
  //   name: "Figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Bachelor of Engineering - (I.T)",
    company_name: "Panjab University",
    icon: mit,
    iconBg: "#383E56",
    date: "2021 - 2025",
    points: [
      "Learned all the fundamentals of Computer Science along with the Data structure.",
      "Studied in detail about programming languages like C, C++,JavaScript and hands on practical as well.",
      "Along with theoretical knowledge, gained practical skills in critical thinking, problem solving, and analysis of the given problems.",
      "Developed multiple real world projects in the pre final year of my degree, such as real time chat app,google clone,ecommerce webapp etc.",
    ],
  },
  {
    title: "SDE Intern",
    company_name: "Desi Qna",
    icon: cognizant,
    iconBg: "#E6DEDD",
    date: "june 2023 - july 2023",
    points: [
      " Worked on the Design,and Development of part of a fully responsive webpage for a particular section of Desi QnA.",
      " Optimised the Existing Code using React Hooks like useMemo Hook useCallback Hook.",
      " Working with the team on the design, development, and Integration of API.",
      " Worked on Data Verification, API Integration, Designing and Creating New Components Using ReactJS, React Styled Components",
    ],
  },
  // {
  //   title: "Software Development Engineer in Test - COOP",
  //   company_name: "GHD Pvt Ltd",
  //   icon: ghd,
  //   iconBg: "#E6DEDD",
  //   date: "Sept 2022 - Dec 2022",
  //   points: [
  //     "Developed and implemented automated test scripts using Cypress JavaScript framework and Selenium which reduced testing time, and collaborating with development teams to identify and fix software defects promptly, resulting in 30% reduction of code defects.",
  //     "Utilized agile testing methodologies to prioritize and execute test cases, I have achieved a 25% increase in testing efficiency and increased application performance.",
  //     "Created Test Cases, Test Scenarios and performed them on the websites. Presented results with developers and the client.",
  //     "Conducted comprehensive end-to-end testing to ensure the quality and stability of the software, I have achieved a 90% reduction in post-release defects. Also managed defects and tickets with Azure DevOps.",
  //   ],
  // },

  // {
  //   title: "Mobile Solutions Development - Post Graduation",
  //   company_name: "Conestoga College",
  //   icon: conestoga,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - April 2023",
  //   points: [
  //     "Learned about system design and development, its concepts and analysis of software development.",
  //     "Developed wireframes and create UI's in Adobe Creative Suite.",
  //     "Developed user friendly apps for iOS and Android mobile operating system along with Full Stack Web Applications.",
  //     "Developed a Real Time Chat application as my capstone project to connect international student before arriving in Canada.",
  //   ],
  // },
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

const myWords = [
  {
    text: "Here you can download my Resume by clicking on Download button. I would be glad to connect with you.",
    name: "Prakash Singh",
    // designation: "The owner",
    // company: "",
    // image: me,
  },
];

const projects = [
  {
    name: "Google Clone",
    description:
      "Replicated  Google Clone using Html,Tailwind,react, JavaScript to showcase my UI Skills.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Taliwind Css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Pagination",
        color: "green-text-gradient",
      },
    ],
    image: airpods,
    source_code_link: "https://github.com/Prakash333singh/Google__Clone__",
    live_link: "https://rapidapiadhikari1.netlify.app/",
  },
  {
    name: "Neflix Clone",
    description:
      " Neflix Clone website to demonstrate Frontend Skills.This Website is Completely Responsive and contains Login,Sign in, and Logout Functionality",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind Css",
        color: "pink-text-gradient",
      },
    ],
    image: bigboytoys,
    source_code_link: "https://github.com/Prakash333singh/netflix_clone",
    live_link: "https://adhikari2.netlify.app/",
  },
  {
    name: "Chat's App",
    description:
      "A Real Time Chat application for International Students to interacts with eachother and dicuss college ideas together.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },

      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "end to end encrypted",
        color: "pink-text-gradient",
      },
      {
        name: "node,express",
        color: "green-text-gradient",
      },
    ],
    image: interacts,
    source_code_link: "https://github.com/Prakash333singh/chatsApp_",
    live_link: "https://realtime-chat-application.netlify.app",
  },
  {
    name: "Google Clone",
    description:
      "Replicated  Google Clone using Html,Tailwind,react, JavaScript to showcase my UI Skills.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Taliwind Css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Pagination",
        color: "green-text-gradient",
      },
    ],
    image: airpods,
    source_code_link: "https://github.com/Prakash333singh/Google__Clone__",
    live_link: "https://rapidapiadhikari1.netlify.app/",
  },
  {
    name: "Google Clone",
    description:
      "Replicated  Google Clone using Html,Tailwind,react, JavaScript to showcase my UI Skills.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Taliwind Css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Pagination",
        color: "green-text-gradient",
      },
    ],
    image: airpods,
    source_code_link: "https://github.com/Prakash333singh/Google__Clone__",
    live_link: "https://rapidapiadhikari1.netlify.app/",
  },
  {
    name: "Google Clone",
    description:
      "Replicated  Google Clone using Html,Tailwind,react, JavaScript to showcase my UI Skills.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Taliwind Css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Pagination",
        color: "green-text-gradient",
      },
    ],
    image: airpods,
    source_code_link: "https://github.com/Prakash333singh/Google__Clone__",
    live_link: "https://rapidapiadhikari1.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects, myWords };
