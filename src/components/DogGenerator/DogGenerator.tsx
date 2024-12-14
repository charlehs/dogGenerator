"use client";
import React, { useState } from "react";
import { Button } from "../Button/Button";
import styles from "./DogGenerator.module.scss";
const DogGenerator = () => {
  const [imageUrl, setImageUrl] = useState("");
  const getDogImage = async () => {
    const url = "https://dog.ceo/api/breeds/image/random";
    try {
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      console.log(data, "data");
      setImageUrl(data.message);
      return data;
    } catch (error: any) {
      console.error("There was an error fetching the data:", error);
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.layout}>
        <div className={styles.imageContainer}>
          {imageUrl && (
            <img
              className={styles.image}
              src={imageUrl}
              alt="An image of a dog"
            />
          )}
        </div>
        <Button onClick={getDogImage} className={styles.generateButton}>
          Generate
        </Button>
      </div>
    </div>
  );
};

export default DogGenerator;
