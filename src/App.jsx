import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './pages/Products'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import ProductList from './components/ProductList'
import CartPage from './pages/CartPage'
import Login from './pages/Login'
import Register from './pages/Register'
<<<<<<< HEAD
import ProtectedRoute from './components/common/ProtectedRoute'
=======
>>>>>>> 397bf7e0ff0d106e5d3c0f654ea24a3df1e6a119

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='*' element={<PageNotFound/>}/>
<<<<<<< HEAD
        <Route path='/cart' element={<ProtectedRoute><CartPage/></ProtectedRoute>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
=======
        <Route path='cart' element={<CartPage/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='register' element={<Register/>}></Route>
>>>>>>> 397bf7e0ff0d106e5d3c0f654ea24a3df1e6a119
      </Routes>
     
    </>
  )
}

export default App