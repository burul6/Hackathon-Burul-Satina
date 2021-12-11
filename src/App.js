import { BrowserRouter, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";
// import Routing from './Routing';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Header />
          {/* <Routing /> */}
          <Footer />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
