import { motion } from "framer-motion";
import { Header, Footer, Hero, Projects, Skills, About, Contact } from "../index";

const MainPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default MainPage;