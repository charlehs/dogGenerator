"use client";
import { getRequestTo } from "@/utils/getRequestTo";
import React, { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import styles from "./DogGenerator.module.scss";
const DogGenerator = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getDogImage = async () => {
    setIsLoading(true);
    const data = await getRequestTo("https://dog.ceo/api/breeds/image/random");
    const dogImage = data.message;
    // console.log(data, "data");
    setImageUrl(dogImage);
    setIsLoading(false);
  };

  useEffect(() => {
    console.log(imageUrl, "image");
  }, [imageUrl]);

  return (
    <div className={styles.background}>
      <div className={styles.layout}>
        <div className={styles.imageContainer}>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              {imageUrl && (
                <img
                  className={styles.image}
                  src={imageUrl}
                  alt="An image of a dog"
                />
              )}
            </>
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
