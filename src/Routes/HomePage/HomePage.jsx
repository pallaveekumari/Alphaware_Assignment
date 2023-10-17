import React from "react";
import styles from "./HomePage.module.css";
import Navbar from "../../Components/Navbar/Navbar";
const HomePage = () => {
  return (
    <div className={styles.homepageImg}>
      <Navbar />
      <p className={styles.heading}>Alphaware</p>
    </div>
  );
};

export default HomePage;
