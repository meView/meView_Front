import { useEffect } from "react";

const usePreventRefresh = (block) => {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (block) {
        event.preventDefault();
        event.returnValue = "Are you sure you want to leave?";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [block]);
};

export default usePreventRefresh;
