import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MenuList from './components/MenuList/MenuList';
import HomePage from './pages/Home/HomePage';

import 'antd/dist/antd.css';
import Services from './pages/Services/Services';

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
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
