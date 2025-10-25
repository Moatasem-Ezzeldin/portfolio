// Images Fanilla
import speed_game from './images/fanilla/tiping-speed.png'
import quiz_game from './images/fanilla/quiz.png'
import block_game from './images/fanilla/block-game.png'
import todo_list_fanilla from './images/fanilla/todo-list-fanilla.png'
import slider_fanilla from './images/fanilla/slider-fanilla.png'
import tamplate_01 from './images/fanilla/tamplate-01.png'
import tamplate_02 from './images/fanilla/tamplate-02.png'
import tamplate_03 from './images/fanilla/tamplate-03.png'
import tamplate_04 from './images/fanilla/tamplate-04.png'
import github_repo from './images/fanilla/githubRepo.png'
import bootstrap_01 from './images/fremworkCSS/bootstrap-psd.png'
import sass_tamplate_01 from './images/fremworkCSS/sass-psd.png'
// Images React.js
import react_todo  from './images/react/react-todo.png' 
import react_slider  from './images/react/react-slider.png' 
import react_tailwind_tamplate  from './images/react/react-tailwind-tamplate.png' 

const myProjects = [
  // Vanilla
    {
      id: 1,
      title: "Tiping Speed Game", 
      description:"Three levels, each level has appropriate words and a specific time to write the word. I used html, css, JS",
      category: "vanilla",
      image_url: speed_game,
      code_link: "https://github.com/Moatasem-Ezzeldin/TypingSpeedTestGame",
      visit_link: "https://moatasem-ezzeldin.github.io/TypingSpeedTestGame/",
    },
    {
      id: 2,
      title: "Quiz Application", 
      description:"Three levels, each level has a number of questions and a specific time. I used html, css, JS",
      category: "vanilla",
      image_url: quiz_game,
      code_link: "https://github.com/Moatasem-Ezzeldin/QuizApplication",
      visit_link: "https://moatasem-ezzeldin.github.io/QuizApplication/",
    },
    {
      id: 3,
      title: "Memory Blocks Game", 
      description:"Click on the box to see the image and search for a similar one. You have a minute and a minute. I used HTML, CSS, JS",
      category: "vanilla",
      image_url: block_game,
      code_link: "https://github.com/Moatasem-Ezzeldin/MemoryBlocksGame",
      visit_link: "https://moatasem-ezzeldin.github.io/MemoryBlocksGame/",
    },
    {
      id: 4,
      title: "todo List", 
      description:"Type anything when you press the button it will be added to the list and saved and not deleted when you reload the page. I used HTML, CSS, JS",
      category: "vanilla",
      image_url: todo_list_fanilla,
      code_link: "https://github.com/Moatasem-Ezzeldin/todo_List_FanillaJS",
      visit_link: "https://moatasem-ezzeldin.github.io/todo_List_FanillaJS/",
    },
    {
      id: 5,
      title: "Image Slider JS", 
      description:"You can navigate between images by pressing the button. I used html, css, JS",
      category: "vanilla",
      image_url: slider_fanilla,
      code_link: "https://github.com/Moatasem-Ezzeldin/Slider_JS",
      visit_link: "https://moatasem-ezzeldin.github.io/Slider_JS/",
    },
    {
      id: 6,
      title: "Tamplate One", 
      description:"I took this design from the internet and implemented it. I used html, css",
      category: "vanilla",
      image_url: tamplate_01,
      code_link: "https://github.com/Moatasem-Ezzeldin/Tamplate_One_HTML-CSS",
      visit_link: "https://moatasem-ezzeldin.github.io/Tamplate_One_HTML-CSS/",
    },
    {
      id: 7,
      title: "Tamplate Tow", 
      description:"I took this design from the internet and implemented it. I used html, css",
      category: "vanilla",
      image_url: tamplate_02,
      code_link: "https://github.com/Moatasem-Ezzeldin/Tamplate_Tow_HTML-CSS",
      visit_link: "https://moatasem-ezzeldin.github.io/Tamplate_Tow_HTML-CSS/",
    },
    {
      id: 8,
      title: "Tamplate_Three", 
      description:"I took this design from the internet and implemented it. I used html, css",
      category: "vanilla",
      image_url: tamplate_03,
      code_link: "https://github.com/Moatasem-Ezzeldin/Tamplate_Three",
      visit_link: "https://moatasem-ezzeldin.github.io/Tamplate_Three/",
    },
    {
      id: 9,
      title: "Tamplate Four", 
      description:"I took this design from the internet and implemented it. I used html, css",
      category: "vanilla",
      image_url: tamplate_04,
      code_link: "https://github.com/Moatasem-Ezzeldin/Tamplate_Four",
      visit_link: "https://moatasem-ezzeldin.github.io/Tamplate_Four/",
    },
    {
      id: 10,
      title: "Github Repos With Fetch API", 
      description:"Enter any username on GitHub and it will show you all its repositories and you can visit them. I used html, css, JS",
      category: "vanilla",
      image_url: github_repo,
      code_link: "https://github.com/Moatasem-Ezzeldin/githubReposWithFetchAPI",
      visit_link: "https://moatasem-ezzeldin.github.io/githubReposWithFetchAPI/",
    },
    {
      id: 11,
      title: "Bootstrap Tamplate One", 
      description:"I took this design from the internet and implemented it. I used html, bootstrap",
      category: "vanilla",
      image_url: bootstrap_01,
      code_link: "https://github.com/Moatasem-Ezzeldin/Bootstrap_Tamplate_One",
      visit_link: "https://moatasem-ezzeldin.github.io/Bootstrap_Tamplate_One/",
    },
    {
      id: 12,
      title: "SAAS Tamplate One", 
      description:"I took this design from the internet and implemented it. I used html, sass",
      category: "vanilla",
      image_url: sass_tamplate_01,
      code_link: "https://github.com/Moatasem-Ezzeldin/SAAS_Tamplate_One",
      visit_link: "https://moatasem-ezzeldin.github.io/SAAS_Tamplate_One/",
    },
    // React.JS
    {
      id: 13,
      title: "Todo List", 
      description:"I took this design from the internet and implemented it. I used html, sass",
      category: "react",
      image_url: react_todo,
      code_link: "https://github.com/Moatasem-Ezzeldin/React_Todo_List",
      visit_link: "https://moatasem-ezzeldin.github.io/React_Todo_List/",
    },
    {
      id: 14,
      title: "React Slider", 
      description:"I took this design from the internet and implemented it. I used html, sass",
      category: "react",
      image_url: react_slider,
      code_link: "https://github.com/Moatasem-Ezzeldin/React_Slider",
      visit_link: "https://moatasem-ezzeldin.github.io/React_Slider/",
    },
    {
      id: 15,
      title: "React Tailwindcss Tamplate", 
      description:"I took this design from the internet and implemented it. I used html, sass",
      category: "react",
      image_url: react_tailwind_tamplate,
      code_link: "https://github.com/Moatasem-Ezzeldin/React_Tailwindcss_Tamplate",
      visit_link: "https://moatasem-ezzeldin.github.io/React_Tailwindcss_Tamplate/",
    },
    // Next.JS
]
export default myProjects;
