import React, { useContext } from 'react'
import { AppContext } from '../../Context/MyContextProvider';
import styles from "./Cart.module.css"
import ProductCard from '../../Components/ProductCard/ProductCard';
import Navbar from '../../Components/Navbar/Navbar';
const Cart = () => {
  const MyContext = useContext(AppContext);
  return (
    <div className={styles.mainContainer}>
      <Navbar />
      {MyContext.cartData.length > 0 ? (
        <div className={styles.Container}>
          {MyContext.cartData.map((product, i) => {
            return (
              <ProductCard
                key={i}
                cardData={product}
                placeofCall="cartPage"
              />
            );
          })}
        </div>
      ) : (
        <h1>No Items In The Cart</h1>
      )}
    </div>
  );
}

export default Cart