import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import {NextUIProvider} from "@nextui-org/react";


function App() {
  return (
    <NextUIProvider>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </NextUIProvider>
  );
}

export default App;
