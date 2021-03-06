import React from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartScreen from "./screens/CartScreen";
import {Container} from "react-bootstrap";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import UserListScreen from "./screens/UserListScreen";

const App=()=> {
  return (
      <Router>
        <Header/>
        <main>
            <Container>
                <Route path="/product/:id" component={ProductScreen}/>
                <Route path="/login" component={LoginScreen}/>
                <Route path="/shipping" component={ShippingScreen}/>
                <Route path="/payment" component={PaymentScreen}/>
                <Route path="/placeOrder" component={PlaceOrderScreen}/>
                <Route path="/register" component={RegisterScreen}/>
                <Route path="/profile" component={ProfileScreen}/>
                <Route path="/cart/:id?" component={CartScreen}/>
                <Route path="/admin/userList" component={UserListScreen}/>
                <Route path="/" component={HomeScreen} exact/>
            </Container>
        </main>
        <Footer/>
      </Router>
  )
}

export default App;
