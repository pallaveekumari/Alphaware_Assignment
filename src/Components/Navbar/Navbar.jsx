import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from "./Navbar.module.css"
import { AppContext } from '../../Context/MyContextProvider';
const Navbar = () => {
  const MyContext=useContext(AppContext)
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

        <div className={styles.cartDataNumber}>{MyContext.cartData.length}</div>
      </div>
    </div>
  );
}

export default Navbar