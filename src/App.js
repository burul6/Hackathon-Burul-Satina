import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MenuList from './components/MenuList/MenuList';
import HomePage from './pages/Home/HomePage';

import 'antd/dist/antd.css';

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header /> 
          <Routes>
            <Route path='/' element={ <HomePage/> }  />
            <Route path='/menu' element ={ <MenuList/> } />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
