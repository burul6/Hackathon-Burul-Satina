import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import ProductsContextProvider from "./contexts/productsContext";
import Routing from "./Routing";

import "antd/dist/antd.css";

import './App.css';


function App() {
  return (
    <>

      <ProductsContextProvider>
        <BrowserRouter>
          <Header />
          <Routing />
          <Footer />
        </BrowserRouter>
      </ProductsContextProvider>

    </>
  );
}

export default App;
