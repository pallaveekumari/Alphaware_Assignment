import React, { createContext, useState } from 'react'

export const AppContext = createContext();



const MyContextProvider = ({children}) => {

const [products,setProducts]=useState([])
    const handleGetProducts = async (payload) => {
        try {
          let res = await fetch(" http://3.7.252.58:4001/product/getAllProduct", {
            method: "POST",
            headers: {
              "content-type": "Application/json",
              cookie:
                "connect.sid=s%253AC9UlQ9M1W1aslddIqBNrrk68Yx4GleaF.OyLqPkC%252FpbJKf070EG6KIJoS70bHaP5GOYxBXBV6hG8",
            },
            body: JSON.stringify(payload),
          });
          let data = await res.json();
        console.log(data)
          setProducts(data);
        } catch (err) {
          console.log("Something Went Wrong");
        }
      };







  return (
    <AppContext.Provider value={{handleGetProducts,products}}>
        {children}
    </AppContext.Provider>
  )
}

export default MyContextProvider