import React from "react";
import { Mobile, PC } from "./layout/MediaQuery";
import styles from "./App.module.css";
import BodyContent from "./layout/BodyContent";


function App() {
  return (
    <>
      <PC>
        <div className={styles.pcview}>
          <BodyContent />
        </div>
      </PC>
      <Mobile>
        <div className={styles.mobileview}>
          <BodyContent />
        </div>
      </Mobile>
    </>
  );
}

export default App;
