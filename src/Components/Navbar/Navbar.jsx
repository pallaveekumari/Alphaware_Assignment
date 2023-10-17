import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from "./Navbar.module.css"
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.navbar}>
      <div onClick={() => navigate("/")} className={styles.navIcon}>
        Home
      </div>
      <div onClick={() => navigate("/products")} className={styles.navIcon}>
        Products
      </div>
      <div onClick={() => navigate("/cart")} className={styles.navIcon}>
        Cart
      </div>
    </div>
  );
}

export default Navbar