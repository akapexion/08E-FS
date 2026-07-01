import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AddUser from './components/AddUser'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllUsers from './components/AllUsers';
import Counter from './Counter';
import Register from './pages/Register';
import Login from './pages/Login';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<AllUsers/>}/>
                <Route path="/adduser" element={<AddUser/>}/>
                <Route path="/count" element={<Counter/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>

        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App