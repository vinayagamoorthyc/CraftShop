import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import {NextUIProvider} from "@nextui-org/react";
import Login from './Authentication/Login';
import SignUp from './Authentication/SignUp';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import MyProfile from './pages/MyProfile';
import LikePage from './pages/LikePage';
import CartPage from './pages/CartPage';
import AdminHome from './Admin/AdminHome';
import ProductUpdate from './Admin/ProductUpdate';
import NewsletterPage from './Admin/NewsletterPage';
import ReportsPage from './Admin/ReportsPage';
import UsersPage from './Admin/UsersPage';
import EditProfilePage from './pages/EditProfilePage';


function App() {
  return (
    <NextUIProvider>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/shoppage' element={<ShopPage/>} />
        <Route path='/productpage/:id' element={<ProductPage/>} />
        <Route path='/aboutpage' element={<AboutPage/>} />
        <Route path='/profilepage' element={<MyProfile/>} />
        <Route path='/likepage' element={<LikePage/>} />
        <Route path='/cartpage' element={<CartPage/>} />
        <Route path='/adminhome' element={<AdminHome/>} />
        <Route path='/productupdate/:id' element={<ProductUpdate/>} />
        <Route path='/subscriberspage' element={<NewsletterPage/>} />
        <Route path='/reportspage' element={<ReportsPage/>} />
        <Route path='/userspage' element={<UsersPage/>} />
        <Route path='/editprofile/:id' element={<EditProfilePage/>} />
      </Routes>
    </NextUIProvider>
  );
}

export default App;
