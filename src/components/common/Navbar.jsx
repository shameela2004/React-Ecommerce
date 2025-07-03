import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider'
import Button from './Button'

function Navbar() {
  const {login,user}=useAuth()
  return (
    <nav className='bg-white p-4 px-8 flex justify-between items-center'>
      <Link to="/" className='font-bold text-pink-600 text-2xl'>NewBornNest</Link>
      {user?<div className='flex gap-4'>
      <Link to='/' className='hover:text-pink-600'>Home</Link>
      <Link to='/products' className="hover:text-pink-600">Products</Link>
      <Link to='/cart' className='hover:text-pink-600'>Cart</Link>
      <Button className="rounded-full" text="Logout"></Button>
      </div>:
      <div className='flex gap-4'>
      <Link to='/' className='hover:text-pink-600'>Home</Link>
      <Link to='/products' className="hover:text-pink-600">Products</Link>
      <Link to='/cart' className='hover:text-pink-600'>Cart</Link>
      <Link to='/login' className='hover:text-pink-600'>Login</Link>
      <Link to='/register' className='hover:text-pink-600'>Register</Link>
      </div>
      }
      
    </nav>
  )
}

export default Navbar