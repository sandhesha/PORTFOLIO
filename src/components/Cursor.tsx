import { useEffect, useRef } from "react";

function Cursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const followerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;

    let followerX = 0;
    let followerY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      cursor.style.transform = `translate3d(
        ${mouseX - 5}px,
        ${mouseY - 5}px,
        0
      )`;
    };

    const animate = () => {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;

      follower.style.transform = `translate3d(
        ${followerX - 18}px,
        ${followerY - 18}px,
        0
      )`;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Small cursor */}
      <div
        ref={cursorRef}
        className="
          hidden
          md:block
          fixed
          top-0
          left-0
          w-[10px]
          h-[10px]
          rounded-full
          bg-[#ff3b30]
          pointer-events-none
          z-[9999]
        "
      />

      {/* Large follower */}
      <div
        ref={followerRef}
        className="
          hidden
          md:block
          fixed
          top-0
          left-0
          w-9
          h-9
          rounded-full
          border
          border-[#ff3b30]/50
          pointer-events-none
          z-[9998]
        "
      />
    </>
  );
}

export default Cursor;