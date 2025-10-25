// import './Hero.css'
import { FaFacebook, FaGithub, FaLinkedin, FaCheckCircle} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import hero from '../../../assets/animations/hero.json'
import { FaAnglesUp } from "react-icons/fa6";
import { useEffect, useState } from "react";
import MemoLottie from "../../MemoLottie/MemoLottie";

const Hero = () => {
  const [goTop, setGoTop] = useState(false)

  const handleScrollToTOP = () => {
      window.scrollTo({
        top:0,
        behavior:"smooth",
    });
  }

  // if scroll y 300 show bottom go to top
  useEffect(() => {
    window.addEventListener("scroll", ()=> {
      window.scrollY > 300 ? setGoTop(true) : setGoTop(false)
    })
  }, [])
  return (
    <section className='container mx-auto p-[2.6rem_1rem] sm:p-[3.5rem_2rem] 
      flex-between xl:flex-center xl:gap-[12rem] border-b-1 border-solid border-b-[var(--border)]'>
      <div className="info">
        <div className="flex items-end gap-[0.2rem] mb-[2rem]">
          <img className='border-1 border-solid border-[var(--cyan)] p-[1px] shadow-[inset_3px_3px_10px_var(--cyan)] 
           rounded-full' src="/portfolio/images/moatasem.png" alt="avatar" />
          <div className='text-[var(--cyan)] text-[1.3rem] mb-[1.4rem]'><FaCheckCircle /></div>
        </div>
        <h1 className="text-[var(--title)] mb-[1.5rem] text-[1.1rem] sm:text-2xl font-bold w-full md:w-[500px] leading-[1.5]">
          I'm Moatasem Ezzeldin<br/>
          Computer engineer,<br />Front end Developer React.JS
        </h1>
        <p className="text-[var(--subtitle)] text-[0.8rem] sm:text-[1rem] leading-[1.3] w-full md:w-[500px] 
         font-normal mb-[2.5rem]">
          I design websites and web applicatiom responsive and<br/> 
          easy to use with clean code and modern user interface,<br/>  
          it halps businesses succeed in the digital world.
        </p>
        <div className="text-[var(--subtitle)] flex gap-[1.4rem] text-[1.9rem] ">
          <a className="hover:scale-[1.1] transition-300"
           href="https://www.facebook.com/ezzeldin.moatasem"
           target="_blank"
           rel="noopener noreferrer" >
            <span className="hover:text-blue-600 transition-300 hover:scale-[1.07] cursor-pointer"><FaFacebook /></span>
          </a>
          <a target="_blank"
              rel="noopener noreferrer" 
              className="hover:scale-[1.1] transition-300" href="https://www.instagram.com/moatasem.ezzeldin">
            <span className="hover:text-red-400 transition-300 hover:scale-[1.07] cursor-pointer"><FaInstagram /></span>
          </a>
          <a target="_blank"
              rel="noopener noreferrer" className="hover:scale-[1.1] transition-300" href="https://github.com/Moatasem-Ezzeldin">
            <span className="hover:text-fuchsia-400 transition-300 hover:scale-[1.07] cursor-pointer"><FaGithub/></span>
          </a>
          <a target="_blank"
              rel="noopener noreferrer" className="hover:scale-[1.1] transition-300" href="https://www.linkedin.com/in/MoatasemEzzeldin">
            <span className="hover:text-blue-400 transition-300 hover:scale-[1.07] cursor-pointer"><FaLinkedin/></span>
          </a>
        </div>
      </div>
      <div className="hidden lg:block">
          <MemoLottie className="h-[400px] " animationData={hero} />
      </div>
      {goTop && 
        <button 
          className='btn  w-[2.8rem] h-[2.8rem] text-[var(--cyan-light)] hover:opacity-[1] 
          rounded-full border-2 border-solid border-[var(--border)] bg-transparent
          hover:shadow-[inset_1px_1px_10px_var(--cyan)] hover:text-[var(--cyan)] fixed bottom-[2.5rem] right-[1.5rem]
          md:right-[2.5rem] z-50' 
          onClick = {handleScrollToTOP} 
          >
          <FaAnglesUp />
        </button>
      }
    </section>
  )
}

export default Hero