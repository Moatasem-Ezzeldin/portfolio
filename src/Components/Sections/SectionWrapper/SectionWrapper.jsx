import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SectionWrapper = ({ children, id, className }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // نتحقق من حجم الشاشة مرة وحدة
    const checkScreen = () => {
      setIsLargeScreen(window.innerWidth >= 1200);
    };

    checkScreen(); // أول تحميل
    window.addEventListener("resize", checkScreen); // في حال تغيّر الحجم

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // إذا كانت الشاشة صغيرة => رجّع القسم بدون أي أنيميشن
  if (!isLargeScreen) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  // إذا كانت الشاشة كبيرة => فعّل الأنيميشن مرة وحدة فقط
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;