import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MenuList from './components/MenuList/MenuList';
import HomePage from './pages/Home/HomePage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header /> 
          <Routes>
            <Route path='/' element={ <HomePage/> }  />
            <Route path='/menu' element ={ <MenuList/> } />
            <Route path='/about-us' element={<AboutUs/>} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
