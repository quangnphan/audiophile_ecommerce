import React, { createContext, useContext, useReducer } from "react";
import { useEffect } from "react/cjs/react.development";
import { data } from "../context/mockData/data";
import reducer from "../reducer";

const GlobalContext = createContext();

const checkLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const initialState = {
  single_product_error: true,
  single_product_loading: false,
  single_product: {},
  cart: checkLocalStorage(),
  isCartOpen: false,
  total_amount:0,
  total_price: 0,
  vat: 0,
  shipping: 5000,
  grand_total: 0,
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getSingleProduct = (id) => {
    dispatch({ type: "GET_SINGLE_PRODUCT_BEGIN" });
    try {
      const product = data.find((item) => item.id === parseInt(id));
      if (product) {
        dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: { product } });
      }
    } catch (error) {
      dispatch({ type: "GET_SINGLE_PRODUCT_ERROR" });
    }
  };

  const toggleCart = () => {
    dispatch({ type: "TOGGLE_CART" });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const addToCart = ( data ) => {
    const { id, name, amount, price, image, cartImage, slug } = data;
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, name, amount, price, image, cartImage, slug },
    });
  };

  const toggleAmount = (id,value) => {
    dispatch({
      type:"TOGGLE_CART_AMOUNT",
      payload: {id,value},
    })
  };

  useEffect(()=>{
    // dispatch({type: "COUNT_GRAND_TOTAL"});
    // dispatch({type: "COUNT_VAT"});
    dispatch({type: "GET_CART_TOTAL"});
    localStorage.setItem("cart",JSON.stringify(state.cart));
  },[state.cart])

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        getSingleProduct,
        toggleCart,
        clearCart,
        addToCart,
        toggleAmount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
