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
function App() {
  return (
    <BrowserRouter >
    

    {/* Route components would be visible only at their route */}
    <Routes>
    <Route path="/" element={<Home/>} exact /> 
    <Route path="/login" element={<Login/>} exact />
    <Route path="/signup" element={<Signup/>} exact />
    <Route path="/pets" element={<Pets/>} exact />
    <Route path="/petedit/:id" element={<Petedit/>} exact /> 
     <Route path="/petadd" element={<Petadd/>} exact />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
