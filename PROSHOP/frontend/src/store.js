import {createStore,combineReducers,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {productListReducer,productDetailReducer} from "./reducers/productReducers";
import {cartReducer} from "./reducers/cartReducers";
import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer
} from "./reducers/userReducers"


const reducer=combineReducers({
    productList:productListReducer,
    productDetail:productDetailReducer,
    cart:cartReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer
});
const middleware=[thunk];
//cart from localstorage
const cartFromLocalStorage=localStorage.getItem("cartItems")?
    JSON.parse(localStorage.getItem("cartItems")):[];
//user info from localstorage
const userInfoLocalStorage=localStorage.getItem("userInfo")?
    JSON.parse(localStorage.getItem("userInfo")):null;
//shipping
const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
    ? JSON.parse(localStorage.getItem('shippingAddress'))
    : {}
const initialState={
    cart:{
        cartItems: cartFromLocalStorage,
        shippingAddress: shippingAddressFromStorage,
    },
    userLogin:{userInfo:userInfoLocalStorage}
};
const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));
export  default store;