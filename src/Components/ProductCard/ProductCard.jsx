import React, { useContext } from "react";
import { AppContext } from "../../Context/MyContextProvider";
import styles from "./ProductCard.module.css";
const ProductCard = ({ cardData, placeofCall }) => {
  const appContext = useContext(AppContext);
  return (
    <div className={styles.cardContainer}>
      <img className={styles.image} src={cardData.imageUrl} alt="" />
      <p className={styles.name}>{cardData.name}</p>

      <p className={styles.price}>
        Price : &#8377; {cardData.discountAmount} <span>{cardData.price}</span>
      </p>
      <p>Rating : {cardData.rating}</p>
      {placeofCall == "productsPage" ? (
        <button
          onClick={() => appContext.handleAddToCart(cardData)}
          className={styles.addToCartButton}
        >
          Add To Cart
        </button>
      ) : (
        <button
          onClick={() => appContext.handleRemoveItemFromCart(cardData)}
          className={styles.addToCartButton}
        >
          Remove
        </button>
      )}
    </div>
  );
};

export default ProductCard;
