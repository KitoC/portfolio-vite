"use client";

import React from "react";
import styles from "./AnimatedClouds.module.css";

const CSSCloud: React.FC = () => {
  return (
    <div>
      <div className={styles.cloud} />
      <div className={`${styles.cloud} ${styles.shadow}`} />
      <div className={`${styles.cloud} ${styles.silverLining}`} />
    </div>
  );
};

export default CSSCloud;
