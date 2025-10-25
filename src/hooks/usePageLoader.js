// usePageLoader.js
import { useEffect, useState } from "react";

const usePageLoader = (assets = []) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!Array.isArray(assets) || assets.length === 0) {
      setIsReady(true); // إذا لا صور → جاهز مباشرة
      return;
    }

    let loadedCount = 0;
    const handleLoad = () => {
      loadedCount += 1;
      if (loadedCount >= assets.length) setIsReady(true);
    };

    assets.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = handleLoad;
      img.onerror = handleLoad; // لو صورة فشلت → نعتبرها محملة
    });
  }, [assets]);

  return isReady;
};

export default usePageLoader;