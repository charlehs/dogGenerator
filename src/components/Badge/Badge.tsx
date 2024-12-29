import React, { ReactNode } from "react";
import styles from "./Badge.module.scss";

interface BadgeProps {
  children: ReactNode;
}
const Badge = ({ children }: BadgeProps) => {
  return <div className={styles.badge}>{children}</div>;
};

export default Badge;
