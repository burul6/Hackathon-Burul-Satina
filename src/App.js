import { BrowserRouter, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";
import { Route } from "react-router";
// import Routing from './Routing';

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route />
          <Header />
          <Routing />
          <Footer />
        </Routes>
      </BrowserRouter> */}
      <Header />
    </>
  );
}

export default App;
