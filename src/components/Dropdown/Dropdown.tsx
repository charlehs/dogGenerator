"use client";
import { getRequestTo } from "@/utils/getRequestTo";
import React, { useState } from "react";
import { Button } from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import styles from "./Dropdown.module.scss";

interface DropdownProps {
  onSelectionChange: (selected: string[]) => void;
}

const Dropdown = ({ onSelectionChange }: DropdownProps) => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);
  const handleCheckboxChange = (id: string) => {
    setSelectedCheckboxes((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
    // Pass the selected values up to the parent component
    onSelectionChange(selectedCheckboxes);
  };
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [breeds, setBreeds] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const getBreeds = async () => {
    setIsLoading(true);
    const data = await getRequestTo("https://dog.ceo/api/breeds/list/all");
    setBreeds(Object.keys(data.message));
    setIsLoading(false);
  };

  return (
    <div className={styles.dropdown}>
      <Button
        className=""
        onClick={() => {
          getBreeds(), setShowDropdown(!showDropdown);
        }}
      >
        Select Breed
      </Button>
      {showDropdown && (
        <div className={styles.dropdownbox}>
          {isLoading ? (
            <p>loading</p>
          ) : (
            <>
              {breeds.length > 0 ? (
                <>
                  {breeds.map((breed) => (
                    <Checkbox
                      id={breed}
                      label={breed}
                      checked={selectedCheckboxes.includes(breed)}
                      onChange={() => handleCheckboxChange(breed)}
                    />
                  ))}
                </>
              ) : (
                <p>Failed to get results</p>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
