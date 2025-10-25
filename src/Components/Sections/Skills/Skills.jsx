import { motion } from "framer-motion";
import { GiSkills } from "react-icons/gi";
import {SectionWrapper} from "../../index"

const Skills = () => {
  const skillsData = [
    {
      title: "Desktop Applications",
      items: ["Java", "Java Swing", "Sqlite", "Mysql", "AWT"],
    },
    {
      title: "Front end",
      items: [
        "React",
        "Bootstrap",
        "Tailwind",
        "HTML",
        "CSS",
        "JavaScript",
        "SASS",
        "Redux",
        "Redux Toolkit",
        "Axios",
      ],
    },
    {
      title: "Other Skills",
      items: [
        "Firebase",
        "Git",
        "C++",
        "OOP",
        "Data Structure",
        "Algorithms",
        "Database",
        "Postman",
        "Problem Solving",
      ],
    },
  ];

  return (
    <SectionWrapper
      id="skills"
      className="container mx-auto p-[3rem_1rem] sm:p-[3rem_2rem] border-b-1 border-solid border-b-[var(--border)]
      scroll-mt-[60px]"
    >
      <h1 className="main-title">
        My Skills
      </h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 4px 15px rgba(20,184,166,0.5)",
            }}
            className="bg-[var(--bg-header)] rounded-2xl p-6 transition-all duration-300 shadow-[0_3px_10px_rgba(20,184,166,0.2)]"
          >
            <h3 className="text-xl text-center font-semibold mb-4 text-[var(--cyan)] flex items-center justify-center gap-2">
              <GiSkills className="text-[var(--cyan-light)]" /> {skill.title}
            </h3>
            <motion.ul
              className="flex flex-wrap justify-center"
              initial="hidden"
              whileInView="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.05 },
                },
              }}
            >
              {skill.items.map((item, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  className="bg-[var(--dark)] text-[var(--subtitle)] px-3 py-1 rounded-lg text-sm m-1 hover:bg-[#14b8a6] hover:text-white transition-all duration-300"
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;