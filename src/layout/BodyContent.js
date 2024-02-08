import styles from "./BodyContent.module.css";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function BodyContent() {
  return (
    <div className={styles.body}>
      <Outlet />
      <Footer />
    </div>
  );
}

export default BodyContent;
