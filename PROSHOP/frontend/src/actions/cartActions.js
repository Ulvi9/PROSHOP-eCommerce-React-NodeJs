import {
    CARD_ADD_ITEM,
    CARD_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD,
    CART_SAVE_SHIPPING_ADDRESS
}
    from "../constants/cartConstants";
import axios from "axios";

export const addToCart=(id,qty)=>async (dispatch,getState)=>{
  const {data}=await axios.get( `/api/products/${id}`);
  dispatch({
      type:CARD_ADD_ITEM,
      payload:{
          product:data._id,
          name:data.name,
          price:data.price,
          image:data.image,
          countInStock:data.countInStock,
          qty
      }
  });
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))
}
export const removeFromCard=(id)=>async (dispatch,getState)=>{
    dispatch({
        type:CARD_REMOVE_ITEM,
        payload:id
    })
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems));
}
//shipping
export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data,
    })

    localStorage.setItem('shippingAddress', JSON.stringify(data))
}
//payment
export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_PAYMENT_METHOD,
        payload: data,
    })

    localStorage.setItem('paymentMethod', JSON.stringify(data))
}