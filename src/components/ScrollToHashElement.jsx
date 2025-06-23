import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 0); // delay to make sure DOM is ready
      }
    }
  }, [location]);

  return null;
}
