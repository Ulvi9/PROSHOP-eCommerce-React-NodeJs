import {createStore,combineReducers,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {productListReducer,productDetailReducer} from "./reducers/productReducers";
import {cartReducer} from "./reducers/cartReducers";


const reducer=combineReducers({
    productList:productListReducer,
    productDetail:productDetailReducer,
    cart:cartReducer
});
const middleware=[thunk];
const cartFromLocalStorage=localStorage.getItem("cartItems")?
    JSON.parse(localStorage.getItem("cartItems")):[];
const initialState={
    cart:{
        cartItems: cartFromLocalStorage
    },
};
const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));
export  default store;