import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


import "antd/dist/antd.css";

import "./App.css";

function App() {
  return (
    <div>
      <ProductsContextProvider>
        <BrowserRouter>
          <Header />
          <Routing />
          <Footer />
        </BrowserRouter>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
