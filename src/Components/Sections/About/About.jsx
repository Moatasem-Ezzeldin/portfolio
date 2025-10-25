// import './About.css'
import {SectionWrapper} from "../../index"

const About = () => {
  return (
    <SectionWrapper id="about" className="container mx-auto p-[3rem_1rem] sm:p-[3rem_2rem] border-b-1 border-solid
     border-b-[var(--border)] scroll-mt-[60px]">
            <h1 className="main-title">
                About Me
            </h1>
            <div className="flex-center xl:flex-center xl:gap-[12rem]">
                <img className="mt-[2.6rem] hidden xl:anim xl:block border-1 border-solid border-[var(--border)] p-[3px] 
                shadow-[inset_1px_1px_16px_var(--cyan)] w-[350px] h-[350px] object-cover relative 
                xl:animate-moveTopAndBottom rounded-[100%]" src="/portfolio/images/moatasem.png" alt="" />
                <div className=" rounded-[14px] shadow-[1px_1px_10px_var(--cyan)] w-auto sm:w-[550px] text-[var(--subtitle)]
                 p-[0_1rem_0] ">
                    <h3 className="text-[var(--title)] flex justify-center mt-[1rem] text-[1.3rem] font-semibold">
                        Do you want to know about me ?
                    </h3>
                    <div className="my-[0.7rem]">
                        <p className="mb-[0.8rem]">
                        I'm Moatasem Ezzeldin from Syria<br/>
                        I'm a fourth-year computer engineering student at the University of Aleppo.<br/>
                        I move between three governorates : Aleppo, Damascus and Sweida.
                    </p>
                    <p className="mb-[0.8rem]">
                        In the first year of University, i started learning programming<br/>
                        i started with c++ and leared data structures and oop,<br/>
                        then i learned Java and delved into it and learned Java swing library 
                        and implemented several simple projects such as a calculator,
                        a simple banking system, and unistaff application.
                    </p>
                    <p className="mb-[0.8rem]">
                        Then i got interested in websites and started on the front end,
                        i learned html and css and implemented several simple websites,
                        i learned java script and implemented several simple applications,
                        i learned sass, bootstrap and tailwindcss, but i prefer css or 
                        tailwindcss for work.
                    </p>
                    <p className="">
                        Then i started with React.js and learned most libraries i need with React.JS,
                        currently i am applying everything i have learned in React.js,
                        and then i will start Next.js .
                    </p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
  )
}

export default About