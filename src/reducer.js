const reducer = (state, action) => {
  if (action.type === "GET_SINGLE_PRODUCT_BEGIN") {
    return {
      ...state,
      single_product_loading: true,
      single_product_error: false,
    };
  }
  if (action.type === "GET_SINGLE_PRODUCT_SUCCESS") {
    return {
      ...state,
      single_product_loading: false,
      single_product_error: false,
      single_product: action.payload.product,
    };
  }
  if (action.type === "GET_SINGLE_PRODUCT_ERROR") {
    return {
      ...state,
      single_product_error: true,
      single_product_loading: false,
    };
  }
  if (action.type === "TOGGLE_CART") {
    return {
      ...state,
      isCartOpen: !state.isCartOpen,
    };
  }
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === "ADD_TO_CART") {
    const { id, amount, price, name, image, cartImage, slug } = action.payload;
    const tempItem = state.cart.find((item) => item.id === id);
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id) {
          const newAmount = cartItem.amount + amount;
          return { ...cartItem, amount: newAmount };
        }
        return cartItem;
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = { id, name, amount, price, image, cartImage, slug };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === "GET_CART_TOTAL") {
    const { total_price, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;
        total.total_amount += amount;
        total.total_price += amount * price;
        return total;
      },
      {
        total_price: 0,
        total_amount: 0,
      }
    );
    return { ...state, total_amount, total_price };
  }
  if (action.type === "TOGGLE_CART_AMOUNT") {
    const { id, value } = action.payload;
    const tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === id) {
          if (value === "inc") {
            return { ...cartItem, amount: cartItem.amount + 1 };
          }
          if (value === "dec") {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }
  if(action.type === "COUNT_VAT"){
    const calculatedVat = state.total_price * 0.2;
    return {...state,vat: calculatedVat}
  }
  if(action.type === "COUNT_GRAND_TOTAL"){
    const grandTotal = state.total_price + state.shipping;
    return {...state,grand_total: grandTotal}
  }
  throw new Error(`No matching "${action.type}" action type.`);
};

export default reducer;
