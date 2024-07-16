/**
 * @typedef {Object} ResumeEntry
 * @property {string} title - The title of the position.
 * @property {string} where - The name of the company.
 * @property {string} from - The start date of the position.
 * @property {string|boolean} to - The end date of the position.
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

export { experiences };
