import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight, FaLink } from "react-icons/fa6";
import { FaEdit, FaTrash } from "react-icons/fa";

const Card = ({ item, page, handleDelete, handleEdit }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    // نحدد إذا الجهاز موبايل (أقل من 768px)
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCardClick = () => {
    if (isMobile) setShowInfo((prev) => !prev);
  };

  return (
    <article
      onClick={handleCardClick}
      className="group select-none w-[250px] h-[340px] mr-8 transition-300 rounded-[14px] 
        hover:rotate-[1deg] animate-moveCard relative overflow-hidden"
    >
      <img
        className="rounded-[10px] w-full h-full"
        src={item.image_url}
        alt={item.title}
      />

      <div
        className={`absolute w-full transition-all hover:shadow-[inset_1px_1px_10px_var(--cyan)]
          duration-1000 ease-in-out rounded-[10px] bg-[var(--bg-header)] left-0
          ${
            showInfo
              ? "bottom-0"
              : "bottom-[-100%] group-hover:bottom-0"
          }`}
      >
        <h2 className="text-[var(--title)] p-[1rem_1rem_0.5rem_1rem] font-semibold">
          {item.title}
        </h2>
        <p className="text-[var(--subtitle)] p-[0_1rem_1rem_1rem] font-normal">
          {item.description}
        </p>

        {page === "dashboard" ? (
          <div className="flex-center gap-3 p-[1rem_0] border-t-1 border-solid border-t-[var(--border)]">
            <div>
              <button
                onClick={() => handleEdit(item)}
                className="btn w-[2.4rem] border-amber-300 text-yellow-300 hover:text-yellow-500 h-[2.4rem] rounded-full
                  hover:border-amber-500 transition-300"
              >
                <FaEdit />
              </button>
            </div>
            <div>
              <button
                onClick={() => handleDelete(item.id)}
                className="btn w-[2.4rem] border-red-400 text-red-400 hover:text-red-500 h-[2.4rem] rounded-full
                  hover:border-red-500 transition-300"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex-between p-[1rem_0] border-t-1 border-solid border-t-[var(--border)]">
            <div className="flex gap-[1rem] px-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-[1.6rem] cursor-pointer text-[var(--subtitle)] transition-300 
                hover:text-[var(--cyan)] hover:scale-[1.2]"
                href={item.visit_link}
              >
                <FaLink />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-[1.6rem] cursor-pointer text-[var(--subtitle)] transition-300
                 hover:text-fuchsia-400 hover:scale-[1.2]"
                href={item.code_link}
              >
                <FaGithub />
              </a>
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Moatasem-Ezzeldin"
              className="px-4 cursor-pointer flex-center gap-[0.2rem] text-[var(--cyan)] text-[1.3rem]"
            >
              more
              <FaArrowRight className="text-[1rem] mt-[3px] animate-moveRight" />
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

export default Card;