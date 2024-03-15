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
    Cypher,
    Ord,
    Tezos,
    W3E,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Blockchain Developer",
      icon: mobile,
    },
    {
      title: "Community Leader",
      icon: backend,
    },
    {
      title: "Community Contributor",
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
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "President",
      company_name: "Ordinateur: The Computer Science Society of Hansraj College",
      icon: Ord,
      iconBg: "#383E56",
      date: "Oct 2022 - Oct 2023",
      points: [
        "Strategically Assembling Exceptional Talent by Expertly Reviewing Resumes and Conducting Rigorous Interviews.",
        "Facilitating Collaborative Team Dynamics through Regularly Scheduled Meetings and Interactive Workshops.",
        "Exemplary Oversight and Leadership in the Execution of All Organized Events.",
        "Efficiently Managing Recruitment Processes to Select Heads and Members, Conducting Engaging Team Meetings and Workshops, and Providing Effective Leadership for All Event Endeavors."
      ],
    },
    {
      title: "President",
      company_name: "Tezos Hansraj: Student Chapter of Tezos India at Hansraj College",
      icon: Tezos,
      iconBg: "#E6DEDD",
      date: "April 2023 - April 2024",
      points: [
        "Empowering Over 100 Students through Comprehensive Mentorship in Blockchain Fundamentals.",
        "Elevating the Proficiency of the Entire Student Body by Providing Extensive Training in Web3 Technologies.",
        "Fostering Knowledge Exchange and Growth by Mentoring a Diverse Group of 100+ Students in Blockchain Fundamentals.",
        "Revolutionizing the Skillset of the Student Community by Offering Extensive Training in the Evolving Landscape of Web3."
      ],
    },
    {
      title: "Co-Founder",
      company_name: "Web3Entirety: A Web3 Community",
      icon: W3E,
      iconBg: "#383E56",
      date: "August 2023 - Present",
      points: [
        "Establishing a Robust Community Network of Blockchain Developers Spanning Across India, Fostering Collaboration and Knowledge Exchange.",
        "Spearheading Diverse Web3 Promotional Campaigns to Educate and Engage Audiences Across Platforms.",
        "Empowering and Uniting Blockchain Developers Across India to Drive Innovation and Collective Growth.",
        "Elevating Awareness and Participation in Web3 Initiatives through Strategic Engagement and Outreach Efforts."
      ],
    },
    {
      title: "Cypher Advocate",
      company_name: "Cypher Blockchain",
      icon: Cypher,
      iconBg: "#E6DEDD",
      date: "March 2024 - Present",
      points: [
        "Strategic Advancement and Promotion of the Cypher Blockchain Ecosystem through Innovative Marketing Initiatives.",
        "Enriching the Cypher Ecosystem through Active Contribution and Collaboration.",
        "Pioneering the Development of Open Source Content to Foster Growth and Accessibility within the Cypher Blockchain Community.",
        "Facilitating the Expansion and Empowerment of the Cypher Community through Scalability Initiatives and Inclusive Engagement."
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
  
  export { services, technologies, experiences, testimonials, projects };