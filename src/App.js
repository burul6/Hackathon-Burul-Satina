import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import Routing from './Routing';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header /> 
          <Routes>
            {/* <Routing /> */}
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
