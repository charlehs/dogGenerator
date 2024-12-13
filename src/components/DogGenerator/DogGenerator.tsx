import React from "react";
import { Button } from "../Button/Button";
import styles from "./DogGenerator.module.scss";
const DogGenerator = () => {
  return (
    <div className={styles.background}>
      <div className={styles.layout}>
        <div className={styles.image}>
          <img />
        </div>
        <Button className={styles.generateButton}>Generate</Button>
      </div>
    </div>
  );
};

export default DogGenerator;
