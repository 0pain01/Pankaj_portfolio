import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  java,
  html,
  css,
  reactjs,
  tensorflow,
  tailwind,
  nodejs,
  mongodb,
  git,
  cplus,
  python,
  axisbank,
  cognizant,
  carrent,
  jobit,
  tripguide,
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
    title: "Fullstack Developer",
    icon: web,
  },
  {
    title: "ML Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "IoT Developer",
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
    name: "C++",
    icon: cplus,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "python",
    icon: python,
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
    name: "java",
    icon: java,
  },
  {
    name: "tensorflow",
    icon: tensorflow,
  },
];

const experiences = [
  {
    title: "IT Deputy Manager",
    company_name: "Axis Bank",
    icon: axisbank,
    iconBg: "#383E56",
    date: "August 2023 - Present",
    points: [
      "Proficient in Core Java, PowerApps, and Agile Software Development Fundamentals, demonstratingexpertise in object-oriented programming, efficient business solution development, and adherence toAgile methodologies.",
      "Possess foundational knowledge in AWS Fundamentals, showcasing understanding of cloud infrastructureand services.",
      "Currently engaged in Oracle Golden Gate, Oracle SQL, Kafka, and Informatica Intelligent Cloud Services,gaining hands-on experience in real-time data integration, database management, scalable streamingplatforms, and cloud-based data integration respectively.",
      "Adept in utilizing Jira for efficient project management and collaboration in software developmentenvironments.",
    ],
  },
  {
    title: "Genc Intern - Java Fullstack Developer",
    company_name: "Cognizant",
    icon: cognizant,
    iconBg: "#E6DEDD",
    date: "March 2023 - July 2023",
    points: [
      "Acquired proficiency in Java Core and front-end technologies, including HTML, CSS, and JavaScript,complemented by a solid understanding of MySQL basics and advanced topics.",
      "Developed a comprehensive Customer Management System using Spring Boot and Maven, integratingAngular for a robust and responsive user interface.",
      "Demonstrated expertise in RestAPIs, microservices architecture, and key technologies such as FeignClient, JWT Security, Swagger, Eureka Server, Mockito, contributing to the creation of efficient and securesoftware solutions.",
      "Expanded skills in Angular development, enhancing the functionality and user experience of webapplications.",
    ],
  }
];


const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };