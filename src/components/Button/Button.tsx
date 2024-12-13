import { PropsWithChildren } from "react";
import styles from "./Button.module.scss";
import { cx } from "@/utils/className.utils";

export const Button = (
  props: PropsWithChildren<{
    className: string;
    onClick?: () => unknown;
    type?: "button" | "submit" | "reset";
  }>
) => {
  return (
    <button
      className={cx(props.className, styles.button)}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
