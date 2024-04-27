import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import {NextUIProvider} from "@nextui-org/react";
import Login from './Authenticate/Login';
import SignUp from './Authenticate/SignUp';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';


function App() {
  return (
    <NextUIProvider>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/shoppage' element={<ShopPage/>} />
        <Route path='/productpage' element={<ProductPage/>} />
      </Routes>
    </NextUIProvider>
  );
}

export default App;
