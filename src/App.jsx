import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './pages/Products'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import ProductList from './components/ProductList'
import CartPage from './pages/CartPage'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='cart' element={<CartPage/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='register' element={<Register/>}></Route>
      </Routes>
     
    </>
  )
}

export default App