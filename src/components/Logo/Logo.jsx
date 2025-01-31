import React from "react";
import styles from "./Logo.module.css";
import LogoImg from "../../assets/Logo.png"; // Updated to match the correct case

const Logo = () => {
  return (
    <div className={styles.logoDiv}>
      <img src={LogoImg} width={67} alt="logo" />
    </div>
  );
};

export default Logo;
