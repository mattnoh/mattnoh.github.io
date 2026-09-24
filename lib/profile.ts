// Single source of truth for everything shown on the site.
// Every entry here is a verified fact — keep it that way.

export const profile = {
  name: "SungJin Noh",
  nameKo: "노성진",
  role: "M.S. Student, Electrical and Electronic Engineering",
  lab: "Computational Robotics and Autonomy (CORA) Lab",
  university: "Inha University",
  advisor: "Prof. Kwang-Ki K. Kim",
  location: "Incheon, Republic of Korea",
  tagline:
    "Trajectory optimization and numerical optimal control for aerial vehicles.",
  email: "mattnoh@inha.edu",
  emailAlt: "mattnoh0111@gmail.com",
  github: "https://github.com/mattnoh",
  githubHandle: "github.com/mattnoh",
  linkedin: "https://www.linkedin.com/in/matthew-noh-bb4647377/",
  linkedinHandle: "linkedin.com/in/matthew-noh-bb4647377",
  cvPath: "/Sungjin_Noh_CV.pdf",
};

export const researchInterests = [
  "Trajectory optimization",
  "Differential dynamic programming",
  "State-triggered constraints",
  "Model predictive control",
  "Second-order cone programming",
  "Aerial robotics",
];

export type Publication = {
  id?: string;
  authors: string;
  title: string;
  venue: string;
  detail?: string;
  year: number;
  status?: string;
  also?: string[];
  thumb?: string;
  links?: { label: string; href: string }[];
};

export const journalPublications: Publication[] = [
  {
    id: "jkros-soc-landing",
    authors: "SungJin Noh, JunGee Hong, and Kwang-Ki K. Kim",
    title:
      "Attitude-aware Second-order Conic-constrained Trajectory Optimization for 6-DOF Quadrotor Precision Landing",
    venue: "Journal of Korea Robotics Society",
    detail: "vol. 21, no. 1, pp. 100–108",
    year: 2026,
    thumb: "/media/papers/jkros.png",
    links: [
      {
        label: "DOI",
        href: "https://doi.org/10.7746/jkros.2026.21.1.100",
      },
    ],
    also: [
      "Presented at the 21st Korea Robotics Society Annual Conference (KRoC), Pyeongchang, February 2026, under the journal's simultaneous submission option",
      "Korean patent application pending, Ref. KR07990 / PD26-154-N",
    ],
  },
];

export const conferencePublications: Publication[] = [
  {
    id: "iccas-cstc-ddp",
    authors: "SungJin Noh, Yong-Hee Kim, Yeohosua Kim, and Kwang-Ki K. Kim",
    title:
      "Compound State-Triggered Constrained DDP for Receding-Horizon Quadrotor Landing on a Moving Platform",
    venue:
      "26th International Conference on Control, Automation and Systems (ICCAS)",
    detail: "Sapporo, Japan · October 2026",
    year: 2026,
    status: "accepted",
    thumb: "/media/papers/iccas.png",
    links: [
      {
        label: "Project page",
        href: "https://mattnoh.github.io/onlinereplanninglanding/",
      },
    ],
  },
];

export const inPreparation: Publication[] = [];

export type ResearchLink = { label: string; href: string };

export type ResearchThread = {
  id: string;
  kind: string;
  title: string;
  problem: string;
  approach: string;
  scale?: string;
  links: ResearchLink[];
  paper?: string;
};

export const research: ResearchThread[] = [
  {
    id: "cstc-ddp",
    kind: "Method",
    title: "State-triggered constraints inside the solver",
    problem:
      "A glideslope cone protects the final approach, but holding it over the whole horizon makes the problem infeasible from most initial conditions.",
    approach:
      "The trigger is written as a compound state-triggered constraint whose violation is integrated as a continuous-time accumulator, so the cone binds only inside the approach region.",
    links: [],
    paper: "iccas-cstc-ddp",
  },
  {
    id: "soc-landing",
    kind: "Method",
    title: "Keeping cone constraints exact",
    problem:
      "A landing cone and a thrust-vector tilt limit are both second-order cones, and relaxing them into inequalities costs either accuracy or solve time.",
    approach:
      "Both are kept in exact SOC form over a quaternion attitude representation. Flown on a Crazyflie 2.1 with Lighthouse positioning.",
    links: [],
    paper: "jkros-soc-landing",
  },
  {
    id: "ros-wrapper",
    kind: "Software",
    title: "ROS wrappers for the CoManDO planner",
    problem:
      "A solver that returns a trajectory every 100 ms still has to drive a vehicle that needs a command every 20 ms.",
    approach:
      "ROS 2 and ROS 1 wrappers that run the CoManDO planner on Crazyflie and PX4, keeping the command stream running while a solve is in flight.",
    links: [
      { label: "GitHub", href: "https://github.com/mattnoh/CoManDO_Planner" },
    ],
  },
];

export const education = [
  {
    degree: "M.S. in Electrical and Electronic Engineering",
    institution: "Inha University",
    department: "Department of Electrical and Computer Engineering",
    period: "Mar. 2025 – Feb. 2027 (expected)",
    notes: [
      "Computational Robotics and Autonomy (CORA) Lab",
      "Advisor: Prof. Kwang-Ki K. Kim",
    ],
  },
  {
    degree: "B.S. in Electrical Engineering",
    institution: "Inha University",
    department: "Incheon, Republic of Korea",
    period: "Mar. 2019 – Feb. 2025",
    notes: [],
  },
];

export const experience = [
  {
    role: "Computational Robotics and Autonomy Lab",
    place: "Inha University",
    period: "Mar. 2025 – present",
    points: [
      "State-triggered constrained DDP for receding-horizon landing on a moving platform (first author, ICCAS 2026).",
      "SOC-constrained 6-DOF trajectory optimization for precision landing, validated on Crazyflie 2.1 hardware (first author, J. Korea Robotics Society 2026).",
      "ROS 2 and ROS 1 wrappers running the CoManDO planner on Crazyflie and PX4; CrazySim SITL and Qualisys hardware experiments.",
    ],
  },
];

export const teaching = [
  {
    course: "Robotics",
    institution: "Inha University",
    period: "Spring 2026",
    role: "Teaching Assistant — assignment and exam grading",
  },
  {
    course: "Numerical Analysis (EEC3600)",
    institution: "Inha University",
    period: "Spring 2025, Spring 2026",
    role: "Teaching Assistant — assignment and exam grading",
  },
];

export const skills = [
  {
    category: "Programming",
    items: ["C++", "Python", "MATLAB", "Julia", "LaTeX"],
  },
  {
    category: "Optimization & Control",
    items: [
      "DDP / iLQR",
      "Interior-point methods",
      "Augmented Lagrangian",
      "SCP",
      "MPC",
      "SOCP",
    ],
  },
  {
    category: "Libraries & Solvers",
    items: ["ALIPDDP", "acados", "OCS2", "CVXPY", "IPOPT"],
  },
  {
    category: "Robotics",
    items: [
      "ROS / ROS2",
      "PX4",
      "MAVROS",
      "Gazebo",
      "Crazyswarm / CrazySim",
      "Isaac Sim",
    ],
  },
];
