import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AddUser from './components/AddUser'

const App = () => {
  return (
    <div>
        <Navbar/>

            <AddUser/>

        <Footer/>
    </div>
  )
}

export default App