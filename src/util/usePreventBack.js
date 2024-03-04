// utils/usePreventBack.js
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const usePreventBack = (block) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleBackButtonEvent = (e) => {
      if (block) {
        e.preventDefault(); 
        const userConfirmed = window.confirm(
          "Are you sure you want to leave? Changes you made may not be saved."
        );

        if (userConfirmed) {
          navigate(-1); 
        } else {
        
          window.history.pushState(null, null, location.pathname);
        }
      }
    };

  
    window.history.pushState(null, null, location.pathname);
    window.addEventListener("popstate", handleBackButtonEvent);

    return () => {
  
      window.removeEventListener("popstate", handleBackButtonEvent);
    };
  }, [block, navigate, location.pathname]);
};

export default usePreventBack;
