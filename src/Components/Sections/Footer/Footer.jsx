// import './Footer.css'
import { FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa";
import { FaInstagram,FaPhoneVolume, FaLocationDot  } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className='container p-[3rem_1rem] sm:p-[3rem_2rem]'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]  text-white ">
        <div className="">
          <h1 className="text-[var(--cyan)] font-bold mb-[1.6rem] text-2xl">Eng Moatasem</h1>
          <div className="text-[var(--subtitle)] flex gap-[2rem] text-[1.7rem] mb-[1.6rem]">
            <a target="_blank"
              rel="noopener noreferrer" className="hover:scale-[1.2] transition-300" href="https://www.facebook.com/ezzeldin.moatasem">
              <span className="hover:text-blue-600 transition-300 hover:scale-[1.2] cursor-pointer"><FaFacebook /></span>
            </a>
            <a target="_blank"
              rel="noopener noreferrer" className="hover:scale-[1.2] transition-300" href="https://www.instagram.com/moatasem.ezzeldin">
              <span className="hover:text-red-400 transition-300 hover:scale-[1.2] cursor-pointer"><FaInstagram /></span>
            </a>
            <a target="_blank"
              rel="noopener noreferrer" className="hover:scale-[1.2] transition-300" href="https://github.com/Moatasem-Ezzeldin">
              <span className="hover:text-fuchsia-400 transition-300 hover:scale-[1.2] cursor-pointer"><FaGithub/></span>
            </a>
            <a target="_blank"
              rel="noopener noreferrer" className="hover:scale-[1.2] transition-300" href="https://www.linkedin.com/in/MoatasemEzzeldin">
              <span className="hover:text-blue-400 transition-300 hover:scale-[1.2] cursor-pointer"><FaLinkedin/></span>
            </a>
          </div>
          <p className="text-[var(--subtitle)] font-normal">
           Contact me for more information and<br/>Get notified when I publish something new.
          </p>
        </div>
        <div className="text-[var(--subtitle)] font-normal text-[0.9rem] flex flex-col gap-[1.6rem] justify-start">
          <div className="flex items-center gap-[1rem]">
            <span className="text-[var(--cyan)] text-[1.4rem]"><FaLocationDot/></span>
            <p className="">From Syria, I move between Aleppo, Damascus, and Sweida, depending on work.</p>
          </div>
          <div className="flex items-center gap-[1rem]">
            <span className="text-[var(--cyan)] text-[1.4rem]"><MdEmail/></span>
            <p className="">moutasem083@gmail.com</p>
          </div>
          <div className="flex items-center gap-[1rem]">
            <span className="text-[var(--cyan)] text-[1.2rem] leading-[1.7]"><FaPhoneVolume/></span>
            <p className="">+963945831172<br/>+963934636708</p>
          </div>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-[1rem] ">
          <img className="border-1 border-solid border-[var(--border)] animate-moveModel rounded-[10px]"
           src="/portfolio/images/footer-01.png" alt="img" />
          <img className="border-1 border-solid border-[var(--border)] animate-moveModel rounded-[10px]"
             src="/portfolio/images/footer-02.png" alt="img" />
          <img className="border-1 lg:hidden xl:inline-block border-solid border-[var(--border)] animate-moveModel rounded-[10px]" 
          src="/portfolio/images/footer-03.png" alt="img" />
        </div>
      </div>
    </footer>
  )
}

export default Footer