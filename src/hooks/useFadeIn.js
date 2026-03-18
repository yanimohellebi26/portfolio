import { useEffect, useRef, useState } from "react";

/**
 * Returns a ref and a boolean `visible`.
 * Attach the ref to a wrapper element; `visible` turns true once
 * the element scrolls into the viewport (stays true permanently).
 */
export default function useFadeIn(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { ref, visible };
}
