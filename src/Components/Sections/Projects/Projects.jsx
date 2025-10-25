import {  useState } from "react";
import {Card} from '../../index'
import { FaRProject } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import MyProjectes from "../../../assets/MyProjectes"
import {SectionWrapper} from "../../index"
import {Slider} from "../../index"


const Projects = () => {
  const projectsData = useSelector((state) => state.projects.data);
  const loading = useSelector((state) => state.projects.loadingFetch);
  const error = useSelector((state) => state.projects.errorFetch);
  const [projects, setProjects] = useState(projectsData);
  const [projectsJS, setProjectsJS] = useState(MyProjectes);
  const [active, setActive] = useState("all");
 
  const handleBtnAll = () => {
    setActive("all");
    error ? setProjectsJS(MyProjectes) : setProjects(projectsData);;
  }
  const handleBtnFanilla = () => {
    setActive("vanilla");
    error 
    ? setProjectsJS(MyProjectes.filter((item) => item.category === "vanilla")) 
    : setProjects(projectsData.filter((item) => item.category === "vanilla"));
  }
  const handleBtnReact = () => {
    setActive("react");
    error 
    ? setProjectsJS(MyProjectes.filter((item) => item.category === "react")) 
    : setProjects(projectsData.filter((item) => item.category === "react"));
  }
  const handleBtnNext = () => {
    setActive("next");
    error 
    ? setProjectsJS(MyProjectes.filter((item) => item.category === "next")) 
    : setProjects(projectsData.filter((item) => item.category === "next"));
  }
  
  return (
    <SectionWrapper id='projects' className='Container mx-auto p-[3rem_1rem] sm:p-[3rem_2rem] border-b-1 border-solid
     border-b-[var(--border)] scroll-mt-[60px]'>
      <h2 className='main-title'>
        Projects
      </h2>
      <div className="flex justify-center gap-[1.6rem] flex-wrap mb-[3rem] ">
        <button onClick={handleBtnAll} 
        className={`btn ${active === "all" ? "text-[var(--cyan-light)] shadow-[inset_1px_1px_10px_var(--cyan)]" 
        : 'hover:shadow-[inset_1px_1px_10px_var(--cyan)] hover:text-[var(--cyan-light)] hover:opacity-40'} 
        p-[0.75rem_0] rounded-[6px] w-[8rem] text-center font-semibold  `}
        >
          All Projects
        </button>
        <button onClick={handleBtnFanilla} 
        className={`btn ${active === "vanilla" ? "text-[var(--cyan-light)] shadow-[inset_1px_1px_10px_var(--cyan)]" 
        : 'hover:shadow-[inset_1px_1px_10px_var(--cyan)] hover:text-[var(--cyan-light)] hover:opacity-40'} 
        p-[0.75rem_0] rounded-[6px] w-[8rem] text-center font-semibold  `}
        >
          Vanilla.JS
        </button>
        <button onClick={handleBtnReact} 
        className={`btn ${active === "react" ? "text-[var(--cyan-light)] shadow-[inset_1px_1px_10px_var(--cyan)]" 
        : 'hover:shadow-[inset_1px_1px_10px_var(--cyan)] hover:text-[var(--cyan-light)] hover:opacity-40'} 
        p-[0.75rem_0] rounded-[6px] w-[8rem] text-center font-semibold  `}
        >
          React.JS
        </button>
        <button onClick={handleBtnNext} 
        className={`btn ${active === "next" ? "text-[var(--cyan-light)] shadow-[inset_1px_1px_10px_var(--cyan)]" 
        : 'hover:shadow-[inset_1px_1px_10px_var(--cyan)] hover:text-[var(--cyan-light)] hover:opacity-40'} 
        p-[0.75rem_0] rounded-[6px] w-[8rem] text-center font-semibold  `}
        >
          Next.JS
        </button>
      </div>
      {loading && 
        <div className="flex-center">
          <p className="text-[var(--subtitle)] text-[1.2rem]">Loading</p>
        </div>
      }
      {projects.length === 0 && !loading && error &&
        <Slider projects={projectsJS} />
      }
      {projects.length > 0 && !loading && !error &&(
        <Slider projects={projects} />
      )}
    </SectionWrapper>
  )
}

export default Projects