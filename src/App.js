import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './pages/AboutUs';
import Games from './pages/Games';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Games/' element={<Games />} />
          <Route path='/AboutUs' element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
