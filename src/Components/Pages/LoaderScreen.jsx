import { useEffect, useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
import { MdOutlineSkipNext } from "react-icons/md"

const LoaderScreen = ({
  isPageReady = false, // جاهزية البيانات + الصور
  loadError = false,   // خطأ من API
  onRetry = () => {},
  onFinish = () => {},
}) => {
  const text1 = "I'm Moatasem Ezzeldin";
  const text2 = "Welcome to my portfolio";

  const [displayed1, setDisplayed1] = useState("");
  const [displayed2, setDisplayed2] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [fakeLoading, setFakeLoading] = useState(false);
  const [finalProgress, setFinalProgress] = useState(false);

  // كتابة النصوص تدريجيًا
  useEffect(() => {
    let i = 0;
    const t1 = setInterval(() => {
      setDisplayed1(text1.slice(0, i + 1));
      i++;
      if (i >= text1.length) {
        clearInterval(t1);
        let j = 0;
        const t2 = setInterval(() => {
          setDisplayed2(text2.slice(0, j + 1));
          j++;
          if (j >= text2.length) {
            clearInterval(t2);
            setTypingDone(true);
          }
        }, 60);
      }
    }, 60);
    return () => clearInterval(t1);
  }, []);

  // نبدأ تحميل مبدئي بعد انتهاء الكتابة
  useEffect(() => {
    if (typingDone) {
      setFakeLoading(true);
    }
  }, [typingDone]);

  // التحميل المبدئي (Fake progress)
  useEffect(() => {
    if (!fakeLoading) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 60 || loadError) {
          clearInterval(interval);
          return prev >= 60 ? 60 : prev;
        }
        return prev + 1;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [fakeLoading, loadError]);

  // عند وصول البيانات فعلاً → كمل للـ100%
  useEffect(() => {
    if (isPageReady && typingDone && !loadError) {
      setFinalProgress(true);
    }
  }, [isPageReady, typingDone, loadError]);

  useEffect(() => {
    if (!finalProgress) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setFadeOut(true);
          setTimeout(() => onFinish(), 1200); // أبطأنا الفيد آوت
          return 100;
        }
        return prev + 4;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [finalProgress, onFinish]);

  // عند الخطأ → أظهر الأزرار بعد لحظة بسيطة
  useEffect(() => {
    if (typingDone && loadError) {
      const timeout = setTimeout(() => setShowButtons(true), 1000);
      return () => clearTimeout(timeout);
    }
  }, [typingDone, loadError]);

  // زر تخطي
  const handleFinishWithCheck = () => {
    setFadeOut(true);
    setTimeout(() => onFinish(), 1200);
  };

  // زر إعادة المحاولة
  const handleRetry = () => {
    setProgress(0);
    setFakeLoading(false);
    setFinalProgress(false);
    setShowButtons(false);
    onRetry();
    setTimeout(() => setFakeLoading(true), 300);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-4 transition-all 
        duration-1200 ${fadeOut ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
    >
      {/* صورة البروفايل */}
      <img
        src="/portfolio/images/moatasem.png"
        alt="Moatasem"
        className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover mb-6 shadow-lg
         transition-transform duration-700 hover:scale-105"
      />

      {/* النصوص */}
      <div className="flex flex-col items-center text-center gap-2 mb-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--title)]">
          {displayed1}
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-[var(--subtitle)]">
          {displayed2}
        </h2>
      </div>
      {/* شريط التحميل */}
      {typingDone && (
        <div className="w-full max-w-sm mb-6">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden shadow-inner">
            <div
              className="h-full rounded-full transition-all duration-200"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, #14b8a6, #0d9488)",
              }}
            ></div>
          </div>
          <div className="text-center mt-1 font-medium text-gray-700 dark:text-gray-300">
            {progress}%
          </div>
        </div>
      )}
      {/* الأزرار عند الخطأ */}
      {showButtons && (
        <>
          <p className="mb-2 text-[1rem] md:text-xl lg:text-2xl font-medium text-red-400">
            ! Error fetching data from the server, Please reload the page.
          </p>
          <div className="flex gap-4 mt-1">
            <button
              onClick={handleRetry}
              className="flex-center gap-1 px-4 py-2 bg-[#14b8a6] hover:bg-[#0e9387] text-white rounded-lg transition-all duration-300"
            >
              <AiOutlineReload size={20} />
              Reload
            </button>
            <button
              onClick={handleFinishWithCheck}
              className="flex-center gap-1 px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-lg transition-all duration-300"
            >
              <MdOutlineSkipNext size={20} color="" />
              Skip
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default LoaderScreen;