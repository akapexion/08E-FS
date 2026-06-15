import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AddUser from './components/AddUser'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllUsers from './components/AllUsers';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<AllUsers/>}/>
                <Route path="/adduser" element={<AddUser/>}/>
            </Routes>

        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App