import { useEffect, useRef, useState } from 'react';
import { FaRegMoon } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { MdOutlineWbSunny } from "react-icons/md";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const links = ['Home', 'Projects', 'Skills', 'About', 'Contact'];
  const [showMenu, setShowMenu] = useState(false);
  const [lightMode, setLightMode] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("lightMode");
      return stored === "true";
    }
    return false;
  });

  const menuRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) setShowMenu(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenu = () => setShowMenu(true);
  const handleClose = () => setShowMenu(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if(element) element.scrollIntoView({behavior: 'smooth'});
  }

  // إغلاق القائمة عند الضغط خارجها
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    if (showMenu) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showMenu]);

  // Light / Dark mode
  useEffect(() => {
    const root = document.documentElement;
    if(lightMode) root.classList.add("light");
    else root.classList.remove("light");
    localStorage.setItem("lightMode", lightMode.toString());
  }, [lightMode]);

  return (
    <header className='container mx-auto flex-between p-[1rem] sm:p-[1rem_2rem] relative z-50'>
      <div className="text-[var(--cyan)] font-bold text-2xl cursor-pointer">
        Eng Moatasem
      </div>

      {/* القائمة الكبيرة */}
      <ul className="hidden lg:flex gap-3 lg:bg-[var(--bg-header)] px-[15px] text-[var(--subtitle)]
       rounded-[2rem]">
        {links.map(link => (
          <li key={link.toLowerCase()}>
            <a
              onClick={() => scrollToSection(link.toLowerCase())}
              className={`block transition-300 cursor-pointer ${link==='Home'?'home text-[var(--cyan)]'
                :'text-[var(--subtitle)] hover:text-[var(--cyan-light)]'} p-2`}
            >
              {link}
            </a>
          </li>
        ))}
        <li>
          <Link
            to='/dashboard'
            className="block transition-300 cursor-pointer text-[var(--subtitle)] hover:text-[var(--cyan-light)] p-2"
          >
            Dashboard
          </Link>
        </li>
      </ul>

      {/* القائمة الصغيرة (< lg) */}
      {isSmallScreen && (
        <>
          {showMenu && <div className="menu-overlay" onClick={handleClose}></div>}
          <motion.ul
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={showMenu ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`flex flex-col absolute top-[72px] left-0 w-[80%] mx-[10%] bg-[var(--darkest)] border-1 border-solid border-[var(--border)] rounded-2xl shadow-lg z-20 lg:hidden ${showMenu ? "pointer-events-auto" : "pointer-events-none"}`}
          >
            <li className="flex justify-end p-2 lg:hidden">
              <button onClick={handleClose} className="close-btn text-2xl">
                <IoMdClose />
              </button>
            </li>
            {links.map(link => (

<li key={link.toLowerCase()} onClick={handleClose}>
                <a
                  onClick={() => scrollToSection(link.toLowerCase())}
                  className={`block cursor-pointer transition-300 border-t-1 border-t-solid ${link==='Home'? "text-[var(--cyan)] hover:text-[var(--cyan-light)] border-t-[var(--cyan)]" : "text-[var(--subtitle)] hover:px-8 hover:text-[var(--cyan-light)] border-t-[var(--border)] hover:border-t-[var(--cyan-light)]"} 
                     p-4  `}
                >
                  {link}
                </a>
              </li>
            ))}
            <li>
              <Link
                to='/dashboard'
                onClick={handleClose}
                className="block border-t-1 cursor-pointer border-t-solid transition-300 text-[var(--subtitle)] 
                hover:text-[var(--cyan-light)] border-t-[var(--border)] hover:border-t-[var(--cyan-light)] p-4 hover:px-8"
              >
                Dashboard
              </Link>
            </li>
          </motion.ul>
        </>
      )}

      {/* أزرار Light / Menu */}
      <div className="flex gap-4">
        <button
          className='btn w-[2.4rem] h-[2.4rem] rounded-full hover:shadow-[inset_1px_1px_10px_var(--cyan)] hover:text-[var(--cyan)]'
          onClick={() => setLightMode(!lightMode)}
        >
          {!lightMode ? <FaRegMoon /> : <MdOutlineWbSunny />}
        </button>
        {isSmallScreen && (
          <button
            className='btn w-[2.4rem] h-[2.4rem] rounded-full hover:shadow-[inset_1px_1px_10px_var(--cyan)] hover:text-[var(--cyan)]'
            onClick={handleMenu}
          >
            <FiMenu />
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;