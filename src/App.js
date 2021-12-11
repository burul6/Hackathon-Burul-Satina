import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/Home/HomePage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header /> 
          <Routes>
            <Route path='/' element={ <HomePage/> }  />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
