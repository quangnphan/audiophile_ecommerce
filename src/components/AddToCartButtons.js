import React, { useState } from "react";
import { useGlobalContext } from "../context/context";

const AddToCartButtons = (data) => {
  const [amount, setAmount] = useState(1);
  const { addToCart } = useGlobalContext();
  const increase = () => {
    setAmount((oldAmount)=>{
      const newAmount = oldAmount + 1;
      return newAmount
    });
  };

  const decrease = () => {
    setAmount((oldAmount)=>{
      if(oldAmount <= 1){
        return setAmount(1)
      }else{
        const newAmount = oldAmount - 1;
        return newAmount
      }
    })
  };

  return (
    <section className="addcart-wrapper">
      <div className="counter">
        <button onClick={decrease}>-</button>
        <span>{amount}</span>
        <button onClick={increase}>+</button>
      </div>
      <button
        className="seeproductBtn addBtn"
        onClick={() => addToCart({ ...data, amount })}
      >
        Add to cart
      </button>
    </section>
  );
};

export default AddToCartButtons;
