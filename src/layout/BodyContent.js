import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

function BodyContent() {
  const location = useLocation()
  const showFooter = 
  location.pathname !== '/testcode' && location.pathname !== '/home' && location.pathname !== '/answer';
  
  return (
    <div>
      <Outlet />
      {showFooter && <Footer />}
    </div>
  );
}

export default BodyContent;
