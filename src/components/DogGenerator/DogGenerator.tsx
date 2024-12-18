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
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [selectedBreeds, setSelectedBreeds] = useState<string[]>([]);
  const getDogImage = async () => {
    setIsLoading(true);
    const data = await getRequestTo("https://dog.ceo/api/breeds/image/random");
    const dogImage = data.message;
    // console.log(data, "data");
    setImageUrl(dogImage);
    setIsLoading(false);
  };

  const handleSelectedBreeds = (selected: string[]) => {
    console.log("Selected Breeds:", selected);
    setSelectedBreeds(selected);
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
        <Button onClick={getDogImage} className={styles.generateButton}>
          Generate
        </Button>
      </div>
    </div>
  );
};

export default DogGenerator;
