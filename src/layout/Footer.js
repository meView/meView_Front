import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footercontent}>
        {/* testcode / testcode2 / about으로 링크 가능하게 만들어줘 링크 써서 */}
        <Link to="/testcode">TestCode</Link>
        <Link to="/testcode2">TestCode2</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default Footer;
