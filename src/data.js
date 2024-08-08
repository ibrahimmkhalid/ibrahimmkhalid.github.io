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

export { experiences, education };
