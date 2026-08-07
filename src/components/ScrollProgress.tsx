import { useEffect, useState } from "react";

function ScrollProgress() {

  const [scroll, setScroll] = useState(0);

  useEffect(() => {

    const update = () => {

      const total =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        (window.scrollY / total) * 100;

      setScroll(progress);

    };

    window.addEventListener("scroll", update);

    return () =>
      window.removeEventListener("scroll", update);

  }, []);

  return (

    <div
      className="fixed top-0 left-0 h-1 bg-cyan-400 z-[999]"
      style={{
        width: `${scroll}%`,
      }}
    />

  );

}

export default ScrollProgress;