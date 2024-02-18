import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

function BodyContent() {
  const location = useLocation()
  const showFooter = location.pathname !== '/testcode'
  
  return (
    <div>
      <Outlet />
      {showFooter && <Footer />}
    </div>
  );
}

export default BodyContent;
