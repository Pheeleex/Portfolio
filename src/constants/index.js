import {
    mobile,
    backend,
    creator,
    Thrive,
    tree,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    estate,
    redux,
    tailwind,
    fire,
    git,
    figma,
    steeze,
    pfin,
    Apple
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
      title: "Software Developer",
      icon: backend,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Content Writer",
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
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Firebase",
      icon: fire,
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
      title: "Digital Marketer/Content creator",
      company_name: "Thrive collective",
      icon: tree,
      iconBg: "#383E56",
      date: "March 2022 - December 2022",
      points: [
        "Creating, Scheduling and uploading content for the company.",
        "Customising email templates, finding leads and reaching out to potential clients",
      ],
    },
    
    {
      title: "Freelance Software Developer",
      company_name: "Oyster labs",
      icon: Thrive,
      iconBg: "#383E56",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Solving problems and creating new avenues for profit.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
  
  const projects = [
    {
      name: "Oyster estate",
      description:
        "Real estate website aimed at helping clients buy, sell and rent houses with ease, with our modern web features we created this website with the aim of making property shopping 5x easier than traditional methods",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: estate,
      demo_link:'https://real-estate-app-umber-zeta.vercel.app/',
      source_code_link: "https://github.com/Pheeleex/Real-estateApp",
    },
    {
      name: "Oyster Finance",
      description:
        "Web application that enables users to track their savings and expenses, the app is aimed at helping users progressively make better finance decisions",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: pfin,
      demo_link:'https://oyster-tracker.vercel.app/',
      source_code_link: "https://github.com/Pheeleex/Oyster-tracker",
    },
    {
      name: "Oyster steeze",
      description:
        "We all love personalised products, even your customers, check out this 3D tshirt customiser and see how much your product needs one, peep the cool animations from three library",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: steeze,
      demo_link:'https://modern-estore.vercel.app/',
      source_code_link: "https://github.com/Pheeleex/Modern-Estore",
    },
    {
      name: "Apple Clone Website",
      description:
        "A mix of great advertising, aesthetics and functionality, cloning the landing showcases my skills in; turning designs to code, paying attention to advertising and SEO key words, paying attention to brand placement and brand identity.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: Apple,
      demo_link:'https://modern-estore.vercel.app/',
      source_code_link: "https://github.com/Pheeleex/Modern-Estore",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };