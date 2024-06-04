import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import {NextUIProvider} from "@nextui-org/react";
import Login from './Authenticate/Login';
import SignUp from './Authenticate/SignUp';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import MyProfile from './pages/MyProfile';
import LikePage from './pages/LikePage';
import CartPage from './pages/CartPage';
import AdminHome from './Admin/AdminHome';
import ProductUpdate from './Admin/ProductUpdate';
import NewsletterPage from './Admin/NewsletterPage';


function App() {
  return (
    <NextUIProvider>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/shoppage' element={<ShopPage/>} />
        <Route path='/productpage' element={<ProductPage/>} />
        <Route path='/aboutpage' element={<AboutPage/>} />
        <Route path='/profilepage' element={<MyProfile/>} />
        <Route path='/likepage' element={<LikePage/>} />
        <Route path='/cartpage' element={<CartPage/>} />
        <Route path='/adminhome' element={<AdminHome/>} />
        <Route path='/productupdate/:id' element={<ProductUpdate/>} />
        <Route path='/subscriberspage' element={<NewsletterPage/>} />
      </Routes>
    </NextUIProvider>
  );
}

export default App;
