

    //port { createContext, useContext } from "react";
   //mport useFetch from "../hooks/useFetch";

   //onst ProductsContext = createContext(null);   

    //export function ProductsProvider({ children }) {
  //const { data, loading, error, refetch } = useFetch(API_URL);  e

//  const value = {                               
//      products: data || [],
 //     loading,
//      error,
//      refetch,
//  };

//  return (
//      <ProductsContext.Provider value={value}>
//      {children}
//      </ProductsContext.Provider>
//  );
//  }

//  export function useProducts() {                 
 // const ctx = useContext(ProductsContext);
//  if (!ctx) throw new Error("useProducts must be used inside <ProductsProvider>");
  //return ctx;
 //}

 import { createContext, useContext, useState } from 'react';
import localdata from '../data/db.json';

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(localdata.menu || []);
  const [currency] = useState(localdata.settings?.currency || 'Ksh');
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prev) => [...prev, product]);
  }

  function removeFromCart(indexToRemove) {
    setCart((prev) => prev.filter((_, index) => index !== indexToRemove));
  }

  function addProduct(newProduct) {
    setProducts((prev) => [
      ...prev,
      { ...newProduct, id: String(Date.now()) },
    ]);
  }

  function deleteProduct(id) {
    setProducts((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        currency,
        cart,
        addToCart,
        removeFromCart,
        addProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductContext);
}