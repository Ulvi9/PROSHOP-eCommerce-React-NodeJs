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

const App=()=> {
  return (
      <Router>
        <Header/>
        <main>
            <Container>
                <Route path="/product/:id" component={ProductScreen}/>
                <Route path="/login" component={LoginScreen}/>
                <Route path="/register" component={RegisterScreen}/>
                <Route path="/cart/:id?" component={CartScreen}/>
                <Route path="/" component={HomeScreen} exact/>
            </Container>
        </main>
        <Footer/>
      </Router>
  )
}

export default App;
