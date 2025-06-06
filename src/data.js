/**
 * @typedef {Object} ResumeEntry
 * @property {string} title - The title of the position.
 * @property {string} where - The name of the company.
 * @property {string} from - The start date of the position.
 * @property {string} to - The end date of the position.
 * @property {string[]} topSkills - An array of up to the top 3 skills used in the position.
 * @property {string[]} [links] - An array of links related to the position.
 * @property {string} [short] - A short description of the position.
 * @property {string[]} [points] - An array of points describing the position.
 */

/**
 * An array of experience objects.
 * @type {ResumeEntry[]}
 */
const experiences = [
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
      "Automated customer verification in user signup flow, reducing abusive accounts by 85+%.",
      "Created an endpoint allowing users to subscribe to product stock notifications, leading to an increase in sales by 35%",
      "Developed internal tools to create time and stock limited promos on select products, increasing impulse purchases by 10%",
      "Completed over 40 software bug tickets in a timely manner on backend, web, and mobile",
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

/**
 * An array of education objects.
 * @type {ResumeEntry[]}
 */
const education = [
  {
    title: "Master's of Science in Data Analytics",
    where: "San Jose State University",
    from: "Fall 2023",
    to: "Current",
    topSkills: ["Python", "Data Analytics", "Machine Learning"],
    short:
      "Current courses include Database systems for analytics, Machine Learning Technologies, and Big Data Technologies and Applications, providing a strong foundation for working on data and AI/ML projects.",
    points: [
      "Completed 6 courses out of a planned 11, growing a strong foundation for artificial intelligence and handling big data",
      "Achieved top scores in multiple projects and assignments",
      "assisted 10 peers in difficult tasks and lead team projects to completion",
    ],
    links: ["sjsu.edu"],
  },
  {
    title: "Bachelors's of Science in Electrical Engineering",
    where: "National University of Computer and Emerging Sciences",
    from: "Fall 2017",
    to: "Spring 2021",
    topSkills: ["C/C++", "SQL", "Python", "Digital Design", "Assembly", "Electrical Engineering"],
    short:
      "Key courses studied, such as Data Structures and Algorithms, Applied Machine Learning, and Fundamentals of databases, established a foundation for efficient and optimized programming across various disciplines",
    points: [
      "Achieved Dean's Honor List Spring 2019, Member of local chapter IEEE Robotics Club",
      "Top scorer in major courses, helped several fellow students on various topics",
      "Coordinated and led multiple projects, including developing a traffic sign classifier, a web app using .NET framework nad MySQL, a room security solution using assembly, and multiple complex algorithms",
    ],
    links: ["lhr.nu.edu.pk"],
  },
];

/**
 * @typedef {Object} ProjectEntry
 * @property {string} title - The title of the project.
 * @property {string} body - A brief description of the project.
 * @property {string[]} skills - An array of the skills learned in the project.
 * @property {string} [image] - Link to the image showcasing the project.
 * @property {string} link - Link to the project live demo or source code
 */

/**
 * An array of experience objects.
 * @type {ProjectEntry[]}
 */
const projects = [
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
    link: "https://github.com/ibrahimmkhalid/data-200-assignment-3",
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

export { experiences, education, projects };
