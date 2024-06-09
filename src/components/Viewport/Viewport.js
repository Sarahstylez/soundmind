import { useEffect } from "react";

const Viewport = ({ children }) => {
  useEffect(() => {
    const setViewportHeight = () => {
      const viewport = document.getElementById("viewport");
      if (viewport) {
        viewport.style.height = "932px";
      }
    };

    setViewportHeight();
    window.addEventListener("resize", setViewportHeight);

    return () => {
      window.removeEventListener("resize", setViewportHeight);
    };
  }, []);

  return <div id="viewport">{children}</div>;
};

export default Viewport;
