import React, { useState } from "react";
import { useTheme } from "../ThemeContext";

// ======================
// 🔹 FontAwesome Icons
// ======================
import {
  FaDatabase,
  FaProjectDiagram,
  FaUsers,
  FaHandsHelping,
  FaChartBar,
  FaLaptopCode,
  FaChartPie,
  FaBrain,
  FaLanguage,
  FaComments,
  FaGlobeEurope,
  FaCogs,
  FaClipboardList,
  FaChalkboardTeacher,
  FaHandshake,
  FaNetworkWired,
  FaBalanceScale,
  FaRobot,
  FaJava,
  FaPhp,
  FaPython,
  FaSchool,
  FaGraduationCap,
  FaUniversity,
  FaBuilding,
  FaCode,
  FaTrophy,
  FaBriefcase,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle 
} from "react-icons/fa";

// ======================
// 🔹 Simple Icons (Si...)
// ======================
import {
  SiPython,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiApachecassandra,
  SiTableau,
  SiDataiku,
  SiSnowflake,
  SiMicrosoftsqlserver,
  SiPowerautomate,
  SiPowerapps,
  SiScrumalliance,
  SiNumpy,
  SiPandas,
  SiHtml5
} from "react-icons/si";

// ======================
// 🔹 BoxIcons (Bi...)
// ======================
import { BiBrain, BiGroup, BiCommentDetail, BiNetworkChart } from "react-icons/bi";

// ======================
// 🔹 Material Design Icons (Md...)
// ======================
import { MdOutlineVolunteerActivism, MdOutlineInsights, MdOutlineDiversity3, MdOutlineGroupWork } from "react-icons/md";



// ========== THEME STYLES (certificate style) ==========
const themeStyles = {
  icy: {
    cardBg: "bg-white/15 backdrop-blur-xl border-white/20",
    cardHover: "hover:bg-white/25 hover:border-cyan-300/40 hover:shadow-cyan-400/20",
    text: "text-gray-800",
    textSecondary: "text-gray-600",
    accent: "text-cyan-600",
    cardTitle: "font-bold text-gray-800",
    cardDesc: "font-normal text-gray-700",
    percent: "text-cyan-500",
    barBg: "bg-cyan-100/50",
    bar: "from-cyan-400 to-cyan-200",
    button: "bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-800 border-cyan-400/40",
    glow: "shadow-cyan-400/20",
    badge: "bg-cyan-100/30 text-cyan-800 border-cyan-300/40",
    filterActive: "bg-cyan-500/30 text-cyan-800 border-cyan-400/60",
    sidebarActive: "bg-cyan-500/20 text-cyan-800 border-cyan-400/40 font-bold",
    sidebar: "text-cyan-900 hover:text-cyan-700"
  },
  hot: {
    cardBg: "bg-yellow-50/15 backdrop-blur-xl border-yellow-300/20",
    cardHover: "hover:bg-yellow-50/25 hover:border-yellow-400/40 hover:shadow-yellow-400/20",
    text: "text-yellow-900",
    textSecondary: "text-yellow-800",
    accent: "text-yellow-600",
    cardTitle: "font-bold text-yellow-900",
    cardDesc: "font-normal text-yellow-800",
    percent: "text-yellow-600",
    barBg: "bg-yellow-100/50",
    bar: "from-yellow-400 to-yellow-200",
    button: "bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-900 border-yellow-500/40",
    glow: "shadow-yellow-400/20",
    badge: "bg-yellow-100/30 text-yellow-900 border-yellow-400/40",
    filterActive: "bg-yellow-500/30 text-yellow-900 border-yellow-500/60",
    sidebarActive: "bg-yellow-400/20 text-yellow-900 border-yellow-500/40 font-bold",
    sidebar: "text-yellow-900 hover:text-yellow-700"
  },
  dark: {
    cardBg: "bg-gray-900/15 backdrop-blur-xl border-gray-700/20",
    cardHover: "hover:bg-gray-900/25 hover:border-blue-500/40 hover:shadow-blue-400/20",
    text: "text-gray-100",
    textSecondary: "text-gray-300",
    accent: "text-blue-400",
    cardTitle: "font-bold text-gray-100",
    cardDesc: "font-normal text-gray-300",
    percent: "text-blue-400",
    barBg: "bg-blue-900/50",
    bar: "from-blue-400 to-blue-900",
    button: "bg-blue-600/20 hover:bg-blue-600/30 text-blue-200 border-blue-500/40",
    glow: "shadow-blue-400/20",
    badge: "bg-blue-900/30 text-blue-200 border-blue-500/40",
    filterActive: "bg-blue-600/30 text-blue-200 border-blue-500/60",
    sidebarActive: "bg-blue-600/20 text-blue-200 border-blue-500/40 font-bold",
    sidebar: "text-blue-200 hover:text-blue-400"
  }
};

// ===========================
// 🔹 ALL SKILL DETAILS
// ===========================
const allSkillDetails = [
  // Business Intelligence & Data Analysis
  { key: "powerbi", name: "Power BI", icon: <FaChartBar className="text-yellow-500"/>, desc: "Data visualization and interactive reporting tool.", percent: 88 },
  { key: "dataiku", name: "Dataiku DSS", icon: <SiDataiku className="text-green-700"/>, desc: "End-to-end data platform for analytics and machine learning.", percent: 78 },
  { key: "tableau", name: "Tableau", icon: <SiTableau className="text-orange-600"/>, desc: "Data visualization software for dashboards and insights.", percent: 82 },
  { key: "powerquery", name: "Power Query / M Language / DAX", icon: <SiMicrosoftsqlserver className="text-red-600"/>, desc: "Data transformation and formula languages for BI.", percent: 84 },
  { key: "dataflow", name: "Dataflow / ETL", icon: <FaProjectDiagram className="text-indigo-500"/>, desc: "Extract, Transform, Load processes for data preparation.", percent: 80 },
  { key: "dataanalysis", name: "Data Analysis / Analytics", icon: <MdOutlineInsights className="text-blue-500"/>, desc: "Interpreting and structuring data to support decision-making.", percent: 75 },

  // Data Engineering & Data Management
  { key: "sql", name: "SQL / MySQL / PL-SQL", icon: <SiMysql className="text-sky-600"/>, desc: "Query languages for relational database management.", percent: 85 },
  { key: "hiveql", name: "HiveQL", icon: <FaRobot  className="text-yellow-500"/>, desc: "SQL-like language for querying big data on Hadoop.", percent: 70 },
  { key: "mongodb", name: "MongoDB", icon: <SiMongodb className="text-green-600"/>, desc: "NoSQL database for flexible document-based storage.", percent: 80 },
  { key: "cassandra", name: "Cassandra", icon: <SiApachecassandra className="text-cyan-600"/>, desc: "Distributed NoSQL database for large-scale data.", percent: 75 },
  { key: "snowflake", name: "Snowflake", icon: <SiSnowflake className="text-blue-400"/>, desc: "Cloud-based data warehousing and analytics solution.", percent: 77 },
  { key: "datamodeling", name: "Data Modeling & Management", icon: <FaDatabase className="text-gray-500"/>, desc: "Structuring and maintaining consistent data systems.", percent: 83 },

  // Data Science & Machine Learning
  { key: "python", name: "Python", icon: <FaPython className="text-yellow-400"/>, desc: "Programming language for data analysis and machine learning.", percent: 88 },
  { key: "knime", name: "KNIME", icon: <FaRobot className="text-yellow-700"/>, desc: "Low-code data analytics and workflow automation platform.", percent: 75 },
  { key: "ml", name: "Machine Learning", icon: <FaBrain className="text-pink-600"/>, desc: "Building predictive and classification models from data.", percent: 80 },
  { key: "stats", name: "Statistical Data Analysis", icon: <SiNumpy className="text-blue-600"/>, desc: "Applying statistical methods to extract insights.", percent: 78 },
  { key: "llama", name: "LLaMA (AI / NLP)", icon: <BiBrain className="text-purple-600"/>, desc: "Large language model framework for natural language processing.", percent: 70 },
  { key: "pipeline", name: "Data Pipeline Architecture", icon: <FaNetworkWired className="text-cyan-500"/>, desc: "Designing automated workflows for data processing.", percent: 82 },

  // Development & Decision Systems
  { key: "java", name: "Java", icon: <FaJava className="text-orange-600"/>, desc: "Object-oriented programming for backend development.", percent: 70 },
  { key: "javascript", name: "JavaScript", icon: <SiJavascript className="text-yellow-400"/>, desc: "Front-end and web interactivity programming language.", percent: 75 },
  { key: "php", name: "PHP", icon: <FaPhp className="text-indigo-600"/>, desc: "Server-side scripting for web development.", percent: 68 },
  { key: "htmlcss", name: "HTML / CSS", icon: <SiHtml5 className="text-red-500"/>, desc: "Markup and styling languages for web design.", percent: 85 },
  { key: "powerapps", name: "PowerApps / Automate / Lists", icon: <SiPowerapps className="text-purple-700"/>, desc: "Low-code tools for automation and data management.", percent: 80 },
  { key: "erpcegid", name: "ERP CeGid", icon: <FaCogs className="text-gray-600"/>, desc: "Enterprise Resource Planning system for business operations.", percent: 72 },

  // Project Management & Methodologies
  { key: "project", name: "Project Management", icon: <FaClipboardList className="text-blue-600"/>, desc: "Planning, executing, and monitoring project objectives.", percent: 85 },
  { key: "agile", name: "Agile / Scrum", icon: <SiScrumalliance className="text-orange-500"/>, desc: "Iterative frameworks for adaptive project delivery.", percent: 78 },
  { key: "communication", name: "Internal Communication", icon: <BiCommentDetail className="text-gray-700"/>, desc: "Coordinating and sharing information within teams.", percent: 82 },
  { key: "facilitation", name: "Large Group Facilitation", icon: <FaChalkboardTeacher className="text-rose-500"/>, desc: "Leading collaborative workshops and discussions.", percent: 80 },
  { key: "risk", name: "Risk Analysis", icon: <FaBalanceScale className="text-red-700"/>, desc: "Identifying and mitigating project and operational risks.", percent: 77 },
  { key: "research", name: "Research & Documentation", icon: <FaLaptopCode className="text-green-600"/>, desc: "Gathering and structuring information for technical projects.", percent: 79 },

  // Communication & Soft Skills
  { key: "communication2", name: "Interpersonal / Intercultural Communication", icon: <FaComments className="text-indigo-500"/>, desc: "Building effective relationships across cultures.", percent: 85 },
  { key: "publicspeaking", name: "Public Speaking", icon: <FaChalkboardTeacher className="text-yellow-600"/>, desc: "Presenting ideas and data insights to audiences.", percent: 80 },
  { key: "visualcom", name: "Visual Communication", icon: <FaGlobeEurope className="text-blue-500"/>, desc: "Designing clear and impactful visual messages.", percent: 76 },
  { key: "teamwork", name: "Teamwork & Collaboration", icon: <FaUsers className="text-cyan-600"/>, desc: "Working efficiently with cross-functional teams.", percent: 88 },
  { key: "english", name: "Business English (TOEIC 800/990)", icon: <FaLanguage className="text-gray-700"/>, desc: "Professional English proficiency in a business environment.", percent: 90 },
  { key: "critical", name: "Critical Thinking & Adaptability", icon: <BiBrain className="text-purple-700"/>, desc: "Problem-solving and adjusting to evolving contexts.", percent: 82 },

  // Community Engagement & Inclusion
  { key: "volunteering", name: "Volunteering", icon: <MdOutlineVolunteerActivism className="text-green-700"/>, desc: "Contributing time and skills to non-profit initiatives.", percent: 95 },
  { key: "inclusion", name: "Transgender Inclusion in Sports", icon: <MdOutlineDiversity3 className="text-pink-600"/>, desc: "Promoting equality and inclusivity through education.", percent: 90 },
  { key: "eurogames", name: "EuroGames Lyon 2025 – Volunteer Program", icon: <FaHandshake className="text-blue-600"/>, desc: "Supporting European LGBTQIA+ sports events.", percent: 85 },
  { key: "community", name: "Community Development", icon: <MdOutlineGroupWork className="text-purple-600"/>, desc: "Managing initiatives for social and cultural impact.", percent: 88 },
  { key: "leadership", name: "Association Leadership", icon: <FaHandsHelping className="text-yellow-500"/>, desc: "Leading teams and organizing non-profit activities.", percent: 90 },
  { key: "inclusivecom", name: "Inclusive Communication", icon: <BiGroup className="text-green-600"/>, desc: "Ensuring accessibility and respect for all identities.", percent: 85 },
];

// ===========================
// 🔸 SKILL SECTIONS (Groups)
// ===========================
const skillSections = [
  { group: "Business Intelligence & Data Analysis", icon: <FaChartPie className="text-yellow-600"/>, keys: ["powerbi", "dataiku", "tableau", "powerquery", "dataflow", "dataanalysis"] },
  { group: "Data Engineering & Data Management", icon: <FaDatabase className="text-blue-500"/>, keys: ["sql", "hiveql", "mongodb", "cassandra", "snowflake", "datamodeling"] },
  { group: "Data Science & Machine Learning", icon: <FaBrain className="text-pink-600"/>, keys: ["python", "knime", "ml", "stats", "llama", "pipeline"] },
  { group: "Development & Decision Systems", icon: <FaLaptopCode className="text-green-500"/>, keys: ["java", "javascript", "php", "htmlcss", "powerapps", "erpcegid"] },
  { group: "Project Management & Methodologies", icon: <FaClipboardList className="text-indigo-500"/>, keys: ["project", "agile", "communication", "facilitation", "risk", "research"] },
  { group: "Communication, Leadership & Soft Skills", icon: <FaUsers className="text-purple-500"/>, keys: ["communication2", "publicspeaking", "visualcom", "teamwork", "english", "critical"] },
  { group: "Community Engagement & Inclusion", icon: <MdOutlineVolunteerActivism className="text-pink-600"/>, keys: ["volunteering", "inclusion", "eurogames", "community", "leadership", "inclusivecom"] },
];

// HIGHLIGHTS, EXPERIENCE, EDUCATION
const highlights = [
  { emoji: "👾", text: "I’m passionate about video games, especially competitive multiplayer titles like Valorant and League of Legends. Right now, I’m diving into Hollow Knight: Silksong.", link: "" },
  { emoji: "🎞️", text: "I love going to the cinema, whether alone or with friends. My Letterboxd :", link: "https://letterboxd.com/Wasabiii/" },
  { emoji: "🏅", text: "I primarily focus on swimming but also practice running, cycling, hiking to stay physically versatile and well-rounded. My Strava :", link: "https://www.strava.com/athletes/152317913" },
  { emoji: "🌟", text: "I nurture my creative side through visual arts, cultural outings, short film projects, and video editing, while enjoying collaboration with others and building meaningful connections.", link: "" },
];

const experienceGroups = [
  {
    label: "Cyclable",
    entries: [
      {
        title: "Data Manager Assistant",
        company: "Cyclable",
        location: "France, Lyon",
        period: "Aug 2023 — Today",
        description: [
          "Support the IT team on various projects, including the audit and cleanup of database tables.",
          "Analyze data quality and research cleansing solutions, using ERP exports or direct database connections.",
          "Implement automated processes between the company's interfaces and those of its suppliers.",
          "Provide support for over 80 franchise and branch stores in using the ERP (CeGid).",
          "Assist in implementing tools to improve data management practices and standardize workflows.",
          "Contribute to enhancing operational efficiency across the store network.",
        ],
        skills: [
          "Excel",
          "Power Query",
          "DAX",
          "ERP Cegid",
          "Python",
          "Pipedrive",
          "Apizr",
          "MAKE",
          "Postman",
          "API",
          "Javascript"
        ]
      }
    ]
  },
  {
    label: "HYDREKA",
    entries: [
      {
        title: "BI Intern (Internship)",
        company: "HYDREKA",
        location: "France, Lyon",
        period: "Apr 2023 – Jun 2023",
        description: [
          "Built a centralized data repository from multiple ERP systems.",
          "Created KPI dashboards and reports to support business decision-making."
        ],
        skills: [
          "Power BI",
          "Microsoft Dataflows",
          "Power Query",
          "Microsoft Power Apps",
          "Microsoft Lists",
          "Excel",
          "Python"
        ]
      }
    ]
  }
];


const educationGroups = [
  {
    label: "BUT Informatique",
    icon: <FaSchool className="text-cyan-500" />,
    entries: [{  institution: "IUT Site de la Doua, UCBL", period: "2021-2024", location: "France, Lyon", grade: "Parcours : Administration, Gestion et Exploitation des Données" }]
  },
  {
    label: "MSc Data Engineering",
    icon: <FaGraduationCap className="text-yellow-600" />,
    entries: [{  institution: "EPSI Lyon", period: "2024-2025", location: "France, Lyon", grade: "Parcours : Expert en Ingénierie des Données" }]
  },
  {
    label: "Master BI & Analytics",
    icon: <FaUniversity className="text-blue-500" />,
    entries: [{  institution: "Université Lumière Lyon 2", period: "2025-2026", location: "France, Lyon", grade: "En cours..." }]
  }
];

// ========== COMPONENTS ==========
function MainTabBar({ activeTab, setActiveTab, styles }) {
  const tabs = [
    { id: "skills", label: "Skills", icon: <FaCode className="text-blue-500" /> },
    { id: "highlights", label: "Interests", icon: <FaTrophy className="text-yellow-500" /> },
    { id: "experience", label: "Experience", icon: <FaBriefcase className="text-purple-600" /> },
    { id: "education", label: "Education", icon: <FaGraduationCap className="text-green-500" /> }
  ];
  return (
    <div className="grid grid-cols-4 md:flex md:flex-row items-center justify-center mb-8 md:mb-12 gap-2 md:gap-0">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex items-center gap-1 md:gap-2 px-3 md:px-6 py-2 md:py-3 rounded-xl font-semibold transition-all duration-300 justify-center text-sm md:text-base
            ${activeTab === tab.id
              ? `${styles.button} border ${styles.glow} shadow-lg scale-105`
              : `${styles.textSecondary} hover:${styles.text}`
            }`}
          style={{ minWidth: "auto" }}
        >
          <span className="text-base md:text-lg flex items-center">
            {tab.icon}
          </span>
          <span className="hidden sm:inline">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}

function SideTabBar({ groups, activeIndex, setActiveIndex, iconMap = {} }) {
  const { theme } = useTheme();
  const styles = themeStyles[theme] || themeStyles.icy;
  return (
    <div className="grid grid-cols-2 md:flex md:flex-col gap-2 md:pr-6 mb-4 md:mb-0 w-full md:w-auto">
      {groups.map((g, idx) => (
        <button
          key={g.label || g.group}
          onClick={() => setActiveIndex(idx)}
          className={`
            text-left px-3 md:px-5 py-2 md:py-3 rounded-xl font-semibold transition-all duration-300 border flex items-center gap-1 md:gap-2 justify-left md:justify-start text-xs md:text-base
            ${activeIndex === idx
              ? `${styles.sidebarActive} border-2`
              : `${styles.sidebar} border-transparent`}
          `}
        >
          {iconMap && iconMap[g.label || g.group] ? iconMap[g.label || g.group] : g.icon}
          <span className="whitespace-nowrap text-xs md:text-lg leading-tight">{g.label || g.group}</span>
        </button>
      ))}
    </div>
  );
}

function SkillCard({ skill, styles, isMobile = false }) {
  if (isMobile) {
    // Mobile version - only show icon
    return (
      <div
        className={`
          ${styles.cardBg} ${styles.cardHover} border rounded-xl
          transition-all duration-300 transform ${styles.glow} shadow-lg
          hover:scale-105 flex items-center justify-center
        `}
        style={{
          minHeight: 60,
          padding: "1rem",
          border: "1.5px solid rgba(0,195,255,0.11)",
          backdropFilter: "blur(7px)",
          aspectRatio: "1"
        }}
      >
        <span className="text-2xl">{skill.icon}</span>
      </div>
    );
  }

  // Desktop version - full card
  return (
    <div
      className={`
        ${styles.cardBg} ${styles.cardHover} border rounded-2xl
        transition-all duration-300 transform ${styles.glow} shadow-lg
        hover:scale-105
      `}
      style={{
        minHeight: 110,
        padding: "1.2rem 1.4rem",
        border: "1.5px solid rgba(0,195,255,0.11)",
        backdropFilter: "blur(7px)"
      }}
    >
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <span className="text-3xl">{skill.icon}</span>
          <div>
            <div className={`text-[18px] ${styles.cardTitle}`}>{skill.name}</div>
            <div className={`text-[15px] ${styles.cardDesc}`} style={{marginTop: -2}}>{skill.desc}</div>
          </div>
        </div>
        <div className={`font-bold text-xl ${styles.percent}`}>{skill.percent}%</div>
      </div>
      {/* Progress Bar */}
      <div className="w-full mt-2 mb-1">
        <div className={`h-[6px] rounded-full relative overflow-hidden ${styles.barBg}`}>
          <div
            className={`absolute top-0 left-0 h-full rounded-full transition-all duration-300 ${styles.bar}`}
            style={{
              width: `${skill.percent}%`,
              background: styles.bar === "from-cyan-400 to-cyan-200"
                ? "linear-gradient(90deg, #22d3ee 25%, #a5f3fc 100%)"
                : styles.bar === "from-yellow-400 to-yellow-200"
                ? "linear-gradient(90deg, #facc15 25%, #fef08a 100%)"
                : "linear-gradient(90deg, #60a5fa 25%, #1e3a8a 100%)"
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

// ========== MAIN ==========
export default function About() {
  const { theme } = useTheme();
  const styles = themeStyles[theme] || themeStyles.icy;
  const [activeTab, setActiveTab] = useState("skills");
  const [skillsTab, setSkillsTab] = useState(0);
  const [expTab, setExpTab] = useState(0);
  const [eduTab, setEduTab] = useState(0);

  const experienceIcons = { Infosys: <FaBuilding />, "Digitran Technologies": <FaBuilding /> };
  const skillGroupIcons = {};
  skillSections.forEach(s => { skillGroupIcons[s.group] = s.icon; });

  // Education heading coloring per theme
  const edulabelStyle = `text-xl md:text-2xl font-bold ${styles.text}`;

  return (
    <section id="about" className="relative w-full max-w-7xl mx-auto px-4 py-8 md:py-16 scroll-mt-24">
      {/* About Me heading and description - always at the top */}
      <div className="text-center mb-8 pt-8">
        <h1 className={`text-3xl md:text-5xl lg:text-6xl font-bold ${styles.text} mb-4`}>
          About <span className={styles.accent}>Me</span>
        </h1>
        <p className={`text-lg md:text-xl ${styles.textSecondary} max-w-3xl mx-auto leading-relaxed`}>
          Data Enjoyer, 3 years Data Manager Assistant at Cyclable ! Seeking V.I.E Opportunities
        </p>
      </div>
      {/* Main Tabs */}
      <MainTabBar activeTab={activeTab} setActiveTab={setActiveTab} styles={styles} />
      <div className="min-h-[400px] md:min-h-[600px] transition-all duration-500">
        {/* Skills */}
        {activeTab === "skills" && (
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 animate-fadein">
            <SideTabBar
              groups={skillSections}
              activeIndex={skillsTab}
              setActiveIndex={setSkillsTab}
              iconMap={skillGroupIcons}
            />
            <div className="flex-1 transition-all duration-500">
              <div className="mb-4 md:mb-6 flex items-center gap-2">
                {skillSections[skillsTab].icon}
                <h2 className={`text-lg md:text-2xl font-bold ${styles.text} mb-3`}>
                  {skillSections[skillsTab].group}
                </h2>
              </div>
              {/* Mobile Grid - 4 columns */}
              <div className="grid grid-cols-4 gap-3 md:hidden">
                {skillSections[skillsTab].keys.map((key) => {
                  const skill = allSkillDetails.find(s => s.key === key);
                  if (!skill) return null;
                  return (
                    <SkillCard key={key} skill={skill} styles={styles} isMobile={true} />
                  );
                })}
              </div>
              {/* Desktop Grid - 2 columns */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-2 gap-5">
                {skillSections[skillsTab].keys.map((key) => {
                  const skill = allSkillDetails.find(s => s.key === key);
                  if (!skill) return null;
                  return (
                    <SkillCard key={key} skill={skill} styles={styles} isMobile={false} />
                  );
                })}
              </div>
            </div>
          </div>
        )}
        {/* Highlights */}
        {activeTab === "highlights" && (
          <div className="w-full transition-all duration-500 animate-fadein">
            <div className={`w-full mx-auto ${styles.cardBg} ${styles.cardHover} border rounded-2xl shadow-xl p-4 md:p-7 ${styles.glow} transition-all duration-500`}>
              <div className="flex items-center mb-4 md:mb-6 gap-3">
                <FaTrophy className={`text-2xl md:text-3xl ${styles.accent}`} />
                <h2 className={`text-2xl md:text-3xl font-bold ${styles.text}`}>Interests</h2>
              </div>
              <ul className="flex flex-col gap-4 md:gap-6 w-full">
                {highlights.map((ach, i) => (
                  <li key={i} className="flex gap-3 md:gap-4 items-start animate-slideup" style={{ animationDelay: `${i * 0.11}s` }}>
                    <span className="text-xl md:text-2xl mt-1 leading-none select-none">{ach.emoji}</span>
                    <div className="flex flex-col w-full">
                      <div className="flex items-center gap-2 text-sm md:text-lg font-medium">
                        <span className={`${styles.text}`}>{ach.text}</span>
                        {ach.link &&
                          <a
                            href={ach.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`ml-1 ${styles.accent} hover:underline inline-flex items-center`}
                          >
                            <FaExternalLinkAlt className="text-xs md:text-sm" />
                          </a>
                        }
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {/* Experience */}
        {activeTab === "experience" && (
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 animate-fadein">
            <SideTabBar
              groups={experienceGroups}
              activeIndex={expTab}
              setActiveIndex={setExpTab}
              iconMap={experienceIcons}
            />
            <div className="flex-1">
              {experienceGroups[expTab].entries.map((exp, idx) => (
                <div
                  key={idx}
                  className={`mb-6 md:mb-8 p-4 md:p-6 rounded-2xl border ${styles.cardBg} ${styles.cardHover} ${styles.glow} shadow-lg animate-slideup`}
                  style={{ animationDelay: `${idx * 0.12}s` }}
                >
                  <div className="flex flex-col md:flex-row md:flex-wrap gap-2 mb-3 md:items-center">
                    <span className={`text-lg md:text-lg font-bold ${styles.text}`}>{exp.title}</span>
                    <span className={`text-base font-semibold ${styles.accent}`}>{exp.company}</span>
                    <span className={`flex items-center gap-2 text-sm ${styles.textSecondary}`}>
                      <FaCalendarAlt className="text-xs" />
                      {exp.period}
                    </span>
                    <span className={`flex items-center gap-2 text-sm ${styles.textSecondary}`}>
                      <FaMapMarkerAlt className="text-xs" />
                      {exp.location}
                    </span>
                  </div>
                  <ul className={`mb-3 pl-0 flex flex-col gap-2`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <span className="mt-1 text-cyan-400">
                          <FaCheckCircle className="text-sm md:text-base" />
                        </span>
                        <span className={`${styles.textSecondary} text-sm md:text-base`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className={`px-2 md:px-3 py-1 rounded-full text-xs ${styles.button} border`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Education */}
        {activeTab === "education" && (
          <div className="flex flex-col md:flex-row gap-4 md:gap-7 items-stretch animate-fadein">
            {educationGroups.map((edu, idx) => (
              <div
                key={edu.label}
                className={`flex-1 min-w-[200px] mb-6 md:mb-0 p-4 md:p-6 rounded-2xl border ${styles.cardBg} ${styles.cardHover} ${styles.glow} shadow-lg flex flex-col gap-3 md:gap-4 items-center animate-slideup`}
                style={{ animationDelay: `${idx * 0.16}s` }}
              >
                <div className="mb-2 flex items-center gap-2">
                  {edu.icon}
                  <span className={edulabelStyle}>{edu.label}</span>
                </div>
                {edu.entries.map((entry, idy) => (
                  <div key={idy} className="flex flex-col items-center text-center">
                    <div className="text-base md:text-lg font-bold mb-1 flex items-center gap-2">
                      <FaGraduationCap className="text-cyan-500" />
                      {entry.degree}
                    </div>
                    <div className={`text-sm md:text-base font-semibold ${styles.accent}`}>{entry.institution}</div>
                    <div className="flex flex-wrap gap-2 md:gap-3 justify-center text-xs md:text-sm items-center my-2">
                      <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                        <FaCalendarAlt className="text-xs" />
                        {entry.period}
                      </span>
                      <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                        <FaMapMarkerAlt className="text-xs" />
                        {entry.location}
                      </span>
                    </div>
                    <div className={`text-sm md:text-base font-semibold ${styles.text} mt-2`}>
                      {entry.grade}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Animation styles */}
      <style>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideup {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadein {
          animation: fadein 0.6s ease-out forwards;
        }
        .animate-slideup {
          animation: slideup 0.8s ease-out forwards;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
}