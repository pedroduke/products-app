import { Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product/:id' element={<ProductDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
