import { FaEnvelope, FaPaperPlane } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { useForm, ValidationError } from '@formspree/react';
import { useState } from "react";
import {motion} from 'framer-motion';
import {SectionWrapper} from "../../index"

const Contact = () => {
  
  const messageForm = import.meta.env.VITE_FORM_MESSAGE;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [state, handleSubmit] = useForm(messageForm);
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData( prev => ({
      ...prev,
      [name]: value
    }))
  }
  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  return (
    <SectionWrapper id="contact" className="container mx-auto p-[3rem_1rem] sm:p-[3rem_2rem] border-b-1 border-solid
     border-b-[var(--border)] scroll-mt-[60px]">
      <h1 className="main-title">
        Contact me
      </h1>
      <div className="flex-center xl:flex-center xl:gap-[12rem]">
        <div className="">
          <form  action=''
          onSubmit={handleSubmit}
          className=' p-[2rem]
          shadow-[3px_3px_10px_var(--cyan-shadow-hover)] rounded-[14px] bg-transparent border-1 border-solid
           border-[var(--border)] transition-300 '>
          <div className="flex flex-col md:flex-row md:items-center gap-[1rem] mb-[1.5rem]">
            <label className='text-[var(--subtitle)] w-[110px] cursor-pointer' htmlFor="name">User Name</label>
            <input 
              onChange={handleChange}
              value={formData.name}
              className='input transition-300 border-1 border-solid border-[var(--border)] 
                hover:shadow-[inset_3px_3px_10px_var(--cyan-shadow)]
                rounded-[16px] p-[10px_1rem] text-[var(--cyan)] placeholder:text-[var(--subtitle)]
                shadow-[inset_2px_2px_10px_var(--cyan-shadow)] focus:shadow-[inset_-3px_-3px_10px_var(--cyan-shadow-hover)]' 
              type="text" name='name' id='name' required placeholder='User Name'/>
              <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-[1rem] mb-[1.5rem]">
            <label className='text-[var(--subtitle)] w-[110px] cursor-pointer' htmlFor="email">User Email</label>
            <input 
              onChange={handleChange}
              value={formData.email}
              className='input transition-300 border-1 border-solid border-[var(--border)] 
                hover:shadow-[inset_3px_3px_10px_var(--cyan-shadow)]
                rounded-[16px] p-[10px_1rem] text-[var(--cyan)] placeholder:text-[var(--subtitle)]
                shadow-[inset_2px_2px_10px_var(--cyan-shadow)] focus:shadow-[inset_-3px_-3px_10px_var(--cyan-shadow-hover)]' 
              type="email" name='email' id='email' required placeholder='User Email'/>
              <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-[1rem] mb-[2rem]">
            <label className='text-[var(--subtitle)] w-[110px] cursor-pointer' htmlFor="message">User Message</label>
            <textarea onChange={handleChange} value={formData.message}
            className='input min-h-[9rem] resize-y transition-300 border-1 border-solid border-[var(--border)] 
                hover:shadow-[inset_3px_3px_10px_var(--cyan-shadow)]
                rounded-[16px] p-[10px_1rem] text-[var(--cyan)] placeholder:text-[var(--subtitle)]
                shadow-[inset_2px_2px_10px_var(--cyan-shadow)] focus:shadow-[inset_-3px_-3px_10px_var(--cyan-shadow-hover)]'
                name="message" id="message" required placeholder='User Message'
            ></textarea>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="flex mb-4">
            <button
            type="reset"
            onClick={handleReset} 
            className='btn text-white bg-[var(--cyan)] transition-300 hover:bg-[var(--cyan-light)] text-[1.2rem] 
            rounded-[25px] disabled:bg-[var(--cyan-disabled)] w-full py-3
             shadow-[0_3px_10px_rgba(20. 184, 166, 0.3)] hover:shadow-[0_5px_15px_rgba(20. 184, 166, 0.5)]'>
              Resat
          </button>
          </div>
          <div className="flex ">
            <button 
            type="submit"
            disabled={state.submitting}
            className='btn text-white bg-[var(--cyan)] transition-300 hover:bg-[var(--cyan-light)] text-[1.2rem] 
            rounded-[25px] disabled:bg-[var(--cyan-disabled)] w-full py-3
             shadow-[0_3px_10px_rgba(20. 184, 166, 0.3)] hover:shadow-[0_5px_15px_rgba(20. 184, 166, 0.5)]'>
              {state.submitting ? "Submittig" : "Submit"}
          </button>
          </div>
          {  state.succeeded &&
            <div className="text-[var(--title)] mt-2 flex gap-1 items-center">
              <FaCheckCircle className="text-[#2dd4bf]" />
              <h3 className="">Your Message has been sent successfully</h3>
            </div>
          }
          </form>
        </div>
        <div className="relative hidden xl:block xl:animate-moveModel mb-[3rem]">
          <FaEnvelope className="text-[350px] text-[#2dd4bf]"/>
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: 'linear'
            }}
            style={{transformOrigin: 'center 180px'}}
          >
            <FaPaperPlane className="text-[var(--subtitle)]"/>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Contact