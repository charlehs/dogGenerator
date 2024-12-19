"use client";
import { getRequestTo } from "@/utils/getRequestTo";
import React, { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./DogGenerator.module.scss";
const DogGenerator = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [viewedImages, setViewedImages] = useState<string[]>([""]);
  const [selectedBreeds, setSelectedBreeds] = useState<string[]>([]);
  const getDogImage = async () => {
    setIsLoading(true);
    const data = await getRequestTo("https://dog.ceo/api/breeds/image/random");
    const dogImage = data.message;
    // console.log(data, "data");
    setImageUrl(dogImage);
    setViewedImages((prevViewedImages) => [...prevViewedImages, dogImage]);
    console.log(viewedImages[viewedImages.length - 1], "viewedImages");
    setIsLoading(false);
  };

  const handleSelectedBreeds = (selected: string[]) => {
    console.log("Selected Breeds:", selected);
    setSelectedBreeds(selected);
  };

  const updateImage = () => {
    setViewedImages((prevViewedImages) => {
      if (prevViewedImages.length > 1) {
        const newImages = [...prevViewedImages];
        newImages.pop();
        setImageUrl(newImages[newImages.length - 1]);
        return newImages;
      }
      return prevViewedImages;
    });
  };

  return (
    <div className={styles.background}>
      <div className={styles.layout}>
        <div className={styles.options}>
          {/* start adding selection fields for what breed the user wants to select */}
          <Dropdown onSelectionChange={handleSelectedBreeds} />
        </div>
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
        <div className={styles.buttons}>
          <Button onClick={getDogImage} className={styles.generateButton}>
            Generate
          </Button>
          {viewedImages.length > 2 && (
            <Button onClick={updateImage} className={styles.generateButton}>
              Prev
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DogGenerator;
