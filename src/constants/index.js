import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    ntlk,
    vite,
    css,
    reactjs,
    sklearn,
    tailwind,
    opencv,
    tensorflow,
    git,
    figma,
    pytorch,
    ai,
    figma1,
    fend,
    ml,
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
        title: "AI/ML Engineer",
        icon: web,
    },
    {
        title: "Software Developer",
        icon: mobile,
    },
    {
        title: "Frontend Developer",
        icon: backend,
    },
    {
        title: "UI/UX Designer",
        icon: creator,
    },
];
const technologies = [
    {
        name: "Vite",
        icon: vite,
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
        name: "NLTK",
        icon: ntlk,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Scikit Learn",
        icon: sklearn,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Open CV",
        icon: opencv,
    },
    {
        name: "tensorflow",
        icon: tensorflow,
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
        name: "pytorch",
        icon: pytorch,
    },
];
const experiences = [
    {
        title: "UI/UX Odyssey",
        company_name: "2nd Semester",
        icon: figma1,
        iconBg: "#383E56",
        date: "Apr 2023 - Jul 2023",
        points: [
            "Designing captivating web experiences with Figma to ensuring seamless user interactions.",
            "Secured second runner-up in a prestigious competition with exceptional website designs, demonstrating keen attention to detail and a talent for engaging user experiences.",
        ],
    },
    {
        title: "Frontend Exploration",
        company_name: "3rd Semester",
        icon: fend,
        iconBg: "#E6DEDD",
        date: "Aug 2023 - Dec 2023",
        points: [
            "Expertise in modern frontend frameworks like React.js, Vite.js, or TailwindCSS for building dynamic web applications.",
            "Proficient in implementing pixel-perfect designs and ensuring cross-browser compatibility.",
            "Collaborative team player, working closely with designers and backend developers to deliver top-quality products.",
            "Familiarity with version control systems such as Git, facilitating seamless collaboration and efficient code management within development teams.",
        ],
    },
    {
        title: "Making Digital Assistant Using Python/Django",
        company_name: "4th Semester",
        icon: ml,
        iconBg: "#383E56",
        date: "Jan 2024 - Apr 2024",
        points: [
             "Expertise in developing and deploying Deploying JARVIS as a web-based AI assistant allows users to interact with a smart.",
              "voice-controlled system accessible from any device.",
              "Built using Python and integrated with Flask.",
               "from fetching information via APIs to automating tasks.",
               "Once deployed, JARVIS can Understand and respond to voice commands or text input Fetch current news.",
               "weather updates, or tell jokes Control smart devices or perform searches using Wikipedia and the web Provide personalized experiences based on user commands.",
        ],
    },
    {
        title: "React & Node.js",
        company_name: "5th Semester",
        icon: ai,
        iconBg: "#E6DEDD",
        date: "Aug 2024 - Present",
        points: [
             "Expertise in full stack using react and node.jshere i develop some of my projects Movie App: Built with React, it allows users to browse.",
             "search, and view movie details via API integration.",
             "Task Prioritization App: Developed using React, enabling task creation, deletion, and priority management with Node.js for data storage.",
             "Tweet Prediction Extension: A Chrome extension using React and Node.js to predict tweet virality with AI and real-time Twitter integration.",
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
        image: "https://randomuser.me/api/portraits/men/7.jpg",
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
        name: "Jarvis Digital Assistant",
        description:
            "The JARVIS Assistant is an AI-powered virtual assistant designed to perform various tasks using voice commands. It can play music, fetch weather updates, tell jokes, search the web, open applications, send emails, and more. Built with Python, it leverages speech recognition and automation libraries to streamline daily tasks and enhance productivity.Adding more advanced AI-driven features like predictive text and smart task suggestions.",
        tags: [
            {
                name: "python Programing",
                color: "blue-text-gradient",
            },
            {
                name: "HTML",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_Link: "https://github.com/singhshivansh63/Digital-Assistant--Jarvis-.git",
    },
    {
        name: "Movie-App",
        description:
             "The Movie App is a dynamic web application built with React.js that allows users to explore, search, and view details of movies. The app leverages modern web technologies to create a responsive and interactive user interface. It fetches movie data from an external API to provide real-time information on various movies, including title, release date, genere, and user ratings as well providing feedback to user.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Node.js",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/singhshivansh63/my-app.git",
    },
    {
        name: "Task prioritization App",
        description:
             "A Task Prioritization App helps users manage tasks by assigning priority levels and organizing them efficiently. It features a clean UI for creating, editing, and deleting tasks, with options to categorize by urgency or importance. Users can easily track progress, mark tasks as complete, and prioritize what matters most using color codes or labels. The app enhances productivity by ensuring that high-priority tasks get attention first, improving time management and focus.",
        tags: [
            {
                name: "Node.js",
                color: "blue-text-gradient",
            },
            {
                name: "React",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/singhshivansh63/task-prioritization.git",
    },
     
];
export { services, technologies, experiences, testimonials, projects };