import React from "react";
import styles from "./Checkbox.module.scss";

interface CheckboxProps extends React.ComponentProps<"input"> {
  label: string;
  id: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, id, ...rest }) => {
  return (
    <div className={styles.checkbox}>
      <input id={id} type="checkbox" {...rest} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;
