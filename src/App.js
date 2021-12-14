import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MenuList from './components/MenuList/MenuList';
import HomePage from './pages/Home/HomePage';
import Services from './pages/Services/Services';
import Reservation from './components/Reservation/Reservation';

import 'antd/dist/antd.css';

import './App.css';
import ProductCart from './components/Cart/ProductCart';
import AdminPage from './pages/AdminPage';
import Review from './components/Review/Review';
import ProductList from './components/ProductList/ProductList';
import LoginPage from './components/Registration/LoginPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header /> 
          <Routes>
            <Route path='/' element={ <HomePage/> }  />
            <Route path='/services' element={ <Services />} />
            <Route path='/menu' element ={ <MenuList/> } />
            <Route path='/about-us' element={<AboutUs/>} />
            <Route path='/reservation' element={ <Reservation />} />
            <Route path='/cart' element={<ProductCart/>} /> 
            <Route path='/admin'element={<AdminPage/>} />
            <Route path='/reviews' element={<Review/>} />
            <Route path='/products'  element={<ProductList/>} />
            <Route path='/login' element={<LoginPage/>} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
