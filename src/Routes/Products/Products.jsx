import React, { useContext, useEffect } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { AppContext } from "../../Context/MyContextProvider";
import styles from "./Products.module.css";
import Navbar from "../../Components/Navbar/Navbar";
const Products = () => {
  const MyContext = useContext(AppContext);
  useEffect(() => {
    let payload = {
      limit: 100,
      page: 0,
      search: "",
    };
    MyContext.handleGetProducts(payload);
  }, []);
  return (
    <div className={styles.mainContainer}>
      <Navbar />
      <div className={styles.Container}>
        {MyContext.products.map((product, i) => {
          return (
            <ProductCard
              key={i}
              cardData={product}
              placeofCall="productsPage"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
