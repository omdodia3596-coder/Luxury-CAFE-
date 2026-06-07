"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  
  // Snap target state
  const [snapTarget, setSnapTarget] = useState<{
    rect: DOMRect;
    borderRadius: string;
  } | null>(null);

  // Position of mouse
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for outer ring tracking
  const springConfig = { damping: 25, stiffness: 220, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device is desktop / has hover capability
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    setIsVisible(true);
    document.body.classList.add("custom-cursor-active");

    const onMouseMove = (e: MouseEvent) => {
      if (snapTarget) {
        // If snapped to a button, keep mouse coordinate tracking but don't bind outer circle directly
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      } else {
        // Center the cursor
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Look for interactive parent links/buttons
      const clickableElement = target.closest("a, button, [role='button'], .clickable");
      
      if (clickableElement) {
        // Retrieve bounding dimensions for magnetic snap
        const rect = clickableElement.getBoundingClientRect();
        const computedStyle = window.getComputedStyle(clickableElement);
        const borderRadius = computedStyle.borderRadius || "4px";
        
        setSnapTarget({
          rect,
          borderRadius
        });
      } else {
        setSnapTarget(null);
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => {
      setSnapTarget(null);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [snapTarget]);

  if (!isVisible) return null;

  // Render snap position or pointer coordinates
  const outerX = snapTarget ? snapTarget.rect.left : smoothX;
  const outerY = snapTarget ? snapTarget.rect.top : smoothY;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
        style={{
          x: outerX,
          y: outerY,
          width: snapTarget ? snapTarget.rect.width : 28,
          height: snapTarget ? snapTarget.rect.height : 28,
          borderRadius: snapTarget ? snapTarget.borderRadius : "50%",
          translateX: snapTarget ? 0 : -14,
          translateY: snapTarget ? 0 : -14,
        }}
        animate={{
          scale: isClicked ? 0.9 : 1,
          borderWidth: snapTarget ? 1.5 : 1,
          borderColor: snapTarget ? "#CF3147" : "#F2EBE7", // Red border on snap, ivory on hover
          backgroundColor: snapTarget ? "rgba(207, 49, 71, 0.12)" : "rgba(242, 235, 231, 0)",
        }}
        transition={{
          type: "spring",
          damping: 28,
          stiffness: 240,
          mass: 0.5
        }}
      />

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-gold pointer-events-none z-[9998] mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: -3,
          translateY: -3,
        }}
        animate={{
          scale: snapTarget ? 0 : isClicked ? 0.6 : 1,
          opacity: snapTarget ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
