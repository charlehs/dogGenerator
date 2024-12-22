"use client";
import { getRequestTo } from "@/utils/getRequestTo";
import React, { useState, useRef } from "react";
import { Button } from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import Loader from "../Loader/Loader";
import styles from "./Dropdown.module.scss";

interface DropdownProps {
  onSelectionChange: (selected: string[]) => void;
}

const Dropdown = ({ onSelectionChange }: DropdownProps) => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);

  const handleCheckboxChange = (id: string) => {
    setSelectedCheckboxes((prev) => {
      const updatedCheckboxes = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];
      onSelectionChange(updatedCheckboxes);
      return updatedCheckboxes;
    });
  };

  const breedDropdown = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [breeds, setBreeds] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const getBreeds = async () => {
    setIsLoading(true);
    const data = await getRequestTo("https://dog.ceo/api/breeds/list/all");
    setBreeds(Object.keys(data.message));
    setIsLoading(false);
  };
  const closeOpenMenu = (e: MouseEvent) => {
    if (showDropdown && !breedDropdown.current?.contains(e.target as Node)) {
      setShowDropdown(false);
    }
  };
  document.addEventListener("mousedown", closeOpenMenu);

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
        <div ref={breedDropdown} className={styles.dropdownbox}>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {breeds.length > 0 ? (
                <>
                  {breeds.map((breed) => (
                    <Checkbox
                      key={breed}
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
