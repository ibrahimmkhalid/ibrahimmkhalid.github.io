export const SITE_TITLE = 'Ibrahim Khalid';
export const SITE_DESCRIPTION = 'Welcome to my website!';

interface ResumeEntry {
  title: string;
  where: string;
  from: string;
  to: string;
  topSkills: string[];
  links?: string[];
  short?: string;
  points?: string[];
}

interface ProjectEntry {
  title: string;
  body: string;
  buttons: string[];
  image?: string;
  link: string;
}

export const experiences: ResumeEntry[] = [
  {
    title: "Backend Developer",
    where: "GrocerApp",
    from: "Apr 2021",
    to: "Jul 2023",
    topSkills: ["PHP", "Laravel", "MySQL"],
    short:
      "Maintained and developed backend APIs for a leading grocery ecommerce website. Used PHP/Laravel and MySQL to build various features leading to product improvement.",
    links: ["grocerapp.pk"],
    points: [
      "Developed backend APIs for a leading grocery ecommerce website. Used PHP/Laravel and MySQL to build various features",
      "Automated customer verification in user signup flow, reducing abusive accounts by 85+%",
      "Developed internal tools to create time and stock limited promos on select products, increasing impulse purchases by 10%",
      "Created a REST API endpoint allowing users to subscribe to stock notifications, leading to an increase in sales by 35% QoQ",
      "Completed over 40 software bug tickets in a timely manner on backend, web, and mobile, using unit testing for quality control",
      "Ensured scalability and performance by optimizing queries and ensuring proper concurrency to handle high traffic efficiently",
      "Used CI/CD to deploy all builds for apps and updated backend server using GitHub Workflow",
      "Communicated and collaborated with multiple teams across finance, design, product, and operations domains to collaborate on various features",
      "Followed the Agile workflow for all sprints, using SOLID principles and design patterns to guide our efforts",
      "Wrote a well documented internal docker script for new developer onboarding, saving multiple hours of configuration",
    ],
  },
  {
    title: "Software Development Intern",
    where: "Ebryx LLC",
    from: "Jun 2019",
    to: "Aug 2019",
    topSkills: ["C++", "Windows APIs"],
    short: "Studied cybersecurity and engineered a C++ windows firewall application using WFP API libraries",
    points: [
      "Covered 1500+ possible configurations for firewall on basis of port, IP address, direction, or application",
      "Completed project 1.5 weeks ahead of schedule, allowing further refinements based on feedback from team lead",
      "Followed modern coding procedures from designing, testing, documentation, and development",
    ],
  },
];

export const education: ResumeEntry[] = [
  {
    title: "MS. Data Analytics",
    where: "San Jose State University",
    from: "Fall 2023",
    to: "Spring 2025",
    topSkills: ["Python", "Data Analytics", "Machine Learning"],
    links: ["sjsu.edu"],
  },
  {
    title: "BS. Electrical Engineering",
    where: "National University of Computer and Emerging Sciences",
    from: "Fall 2017",
    to: "Spring 2021",
    topSkills: ["C/C++", "SQL", "Python", "Digital Design", "Computer Engineering"],
    links: ["lhr.nu.edu.pk"],
  },
];

export const projects: ProjectEntry[] = [
  {
    title: "Obstacle detection for drone flight path",
    body: "End to end computer vision web platform with a focus on creating models for use in camera-equipped drones",
    image: "https://nhlswcz663.ufs.sh/f/XSbHnEIqVcDzqJAqidPGQyVWODFxcg1i3nNrlBRYf69KhaA2",
    buttons: ["Convolutional Neural Networks", "Ultralytics", "AWS", "Next.js"],
    link: "https://sjsu-msda-f24-team6-webportal.vercel.app/",
  },
  {
    title: "Comic book face generator",
    body: "Using StyleGAN deep learning model to generate faces trained on a dataset of 10,000 images",
    buttons: ["Deep Learning", "PyTorch", "Convolutional Neural Networks"],
    image: "https://raw.githubusercontent.com/ibrahimmkhalid/stylegan-pytorch/refs/heads/main/assets/sample.png",
    link: "https://github.com/ibrahimmkhalid/stylegan-pytorch",
  },
  {
    title: "Portfolio",
    body: "A personal website that showcases my work, experience, socials, resume, and also hosts my blogs",
    buttons: ["React", "TailwindCSS"],
    image: "https://utfs.io/f/a16bbc8f-b47f-44ee-ae01-82c02e04ea18-ijvnt4.png",
    link: "#",
  },
  {
    title: "Video game trend report",
    body: "A brief report on the trends in video games over the last 40 years",
    buttons: ["Django", "HTMX"],
    image: "https://utfs.io/f/ce42f155-b39a-45b8-8050-ab2685e5b568-m0jdt1.png",
    link: "https://django-video-games-report-s13lc.kinsta.app",
  },
  {
    title: "IBKBD",
    body: "Ergonomic keyboards designed and developed by me for my needs. MX wired for desktop use, choc wireless for on the go.",
    buttons: ["Circuit Design"],
    image: "https://utfs.io/f/e96d2b18-80a9-4b74-a826-46b2179e9b75-1nj8s4.jpg",
    link: "https://github.com/ibrahimmkhalid/ibkbd",
  },
  {
    title: "Fast network threat detection model",
    body: "An investigation into which model is best at accurate and quick detection of known and novel network anomalies",
    buttons: ["Machine Learning", "Python"],
    image: "https://utfs.io/f/f5c5c355-0ad9-421c-84b4-b89fcae68fb4-tka03.png",
    link: "https://github.com/ibrahimmkhalid/data-245-project",
  },
  {
    title: "HTTP Server in GoLang",
    body: "A simple web server communicating over HTTP to serve some predefined endpoints. Based on CodeCrafters build",
    buttons: ["GoLang", "HTTP"],
    link: "https://github.com/ibrahimmkhalid/http-server-go",
  },
  {
    title: "Shopping application full stack in PyQT",
    body: "Multi user shopping application client and server. Includes administrator and customer view",
    buttons: ["PyQT", "MySQL"],
    image: "https://utfs.io/f/efe43b4d-924b-471c-a3c9-80e29d2ccb5b-1z9hq2.png",
    link: "https://github.com/ibrahimmkhalid/shopping-application-pyqt",
  },
];
