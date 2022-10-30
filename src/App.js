import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './pages/Login';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter ,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Signup from './pages/Signup';
import Home from './pages/Home'
import Pets from './pages/pets'
import Petedit from './pages/petedit';

import Petadd from './pages/petadd';
import './App.css'
import { Navbar } from 'react-bootstrap';
import NavbarComp from './pages/Navbar';
import Footer from './pages/footer';
function App() {
  return (
    <BrowserRouter >
    
<NavbarComp/>
    {/* Route components would be visible only at their route */}
    <Routes>
    <Route path="/" element={<Home/>} exact /> 
   
    <Route path="/pets" element={<Pets/>} exact />
    <Route path="/petedit/:id" element={<Petedit/>} exact /> 
     <Route path="/petadd" element={<Petadd/>} exact />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
