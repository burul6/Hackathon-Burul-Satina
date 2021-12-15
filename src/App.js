import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import ProductsContextProvider from "./contexts/productsContext";
import Routing from "./Routing";

import "antd/dist/antd.css";

import './App.css';
import CartContextProvider from "./contexts/cartContext";
import FavContextProvider from "./contexts/favoriteContext";
import { googleContext } from "./fire";


function App() {
  return (
    <>
    <googleContext>
    <FavContextProvider>
    <CartContextProvider>
      <ProductsContextProvider>
        <BrowserRouter>
          <Header />
          <Routing />
          <Footer />
        </BrowserRouter>
      </ProductsContextProvider>
      </CartContextProvider>
      </FavContextProvider>
      </googleContext>
    </>
  );
}

export default App;
