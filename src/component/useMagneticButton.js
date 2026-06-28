import { useEffect, useRef } from "react";

export default function useMagneticButton() {
  const btnRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    function handleMouseMove(e) {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px) translateY(-2px)`;
    }

    function handleMouseLeave() {
      btn.style.transform = "";
    }

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup
    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return btnRef;
}