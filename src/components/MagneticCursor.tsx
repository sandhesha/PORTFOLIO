import { useEffect, useRef } from "react";

function MagneticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;

    if (!cursor || !dot) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let cursorX = mouseX;
    let cursorY = mouseY;

    const move = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;

      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);

    const animation = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(animation);
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      "a, button"
    );

    const handleEnter = (event: Event) => {
      const element = event.currentTarget as HTMLElement;

      element.style.transition = "transform 0.2s ease";

      element.addEventListener("mousemove", handleMagneticMove);
      element.addEventListener("mouseleave", handleMagneticLeave);
    };

    const handleMagneticMove = (event: Event) => {
      const mouseEvent = event as MouseEvent;
      const element = event.currentTarget as HTMLElement;

      const rect = element.getBoundingClientRect();

      const x =
        mouseEvent.clientX -
        (rect.left + rect.width / 2);

      const y =
        mouseEvent.clientY -
        (rect.top + rect.height / 2);

      element.style.transform = `
        translate(${x * 0.18}px, ${y * 0.18}px)
      `;
    };

    const handleMagneticLeave = (event: Event) => {
      const element = event.currentTarget as HTMLElement;

      element.style.transform = "translate(0, 0)";

      element.removeEventListener(
        "mousemove",
        handleMagneticMove
      );

      element.removeEventListener(
        "mouseleave",
        handleMagneticLeave
      );
    };

    elements.forEach((element) => {
      element.addEventListener("mouseenter", handleEnter);
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener(
          "mouseenter",
          handleEnter
        );
      });
    };
  }, []);

  return (
    <>
      {/* Outer cursor */}
      <div
        ref={cursorRef}
        className="
          fixed
          top-0
          left-0
          z-[99999]
          pointer-events-none
          w-10
          h-10
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border-2
          border-[#ff5a00]
          hidden
          md:block
        "
      />

      {/* Inner dot */}
      <div
        ref={dotRef}
        className="
          fixed
          top-0
          left-0
          z-[100000]
          pointer-events-none
          w-2
          h-2
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#ff5a00]
          hidden
          md:block
        "
      />
    </>
  );
}

export default MagneticCursor;