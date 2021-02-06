import React from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartScreen from "./screens/CartScreen";
import {Container} from "react-bootstrap";

const App=()=> {
  return (
      <Router>
        <Header/>
        <main>
            <Container>
                <Route path="/" component={HomeScreen} exact/>
                <Route path="/product/:id" component={ProductScreen}/>
                <Route path="/cart/:id?" component={CartScreen}/>
            </Container>
        </main>
        <Footer/>
      </Router>
  )
}

export default App;
