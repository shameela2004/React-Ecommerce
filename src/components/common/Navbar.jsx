<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider'
import Button from './Button'

function Navbar() {
  const {logout,user}=useAuth()
  function handleLogout(){
    let isConfirm=confirm("Do You want Logout from this account?")
    if(isConfirm){
      logout()
    }
  }
  return (
    <nav className="bg-white px-4 md:px-10 py-4 flex flex-wrap justify-between items-center gap-3 position:fixed">
      <Link to="/" className='font-bold text-pink-600 text-2xl'>BabeNest</Link>
      {user?
      <div className='flex gap-4'>
      <Link to='/' className='hover:text-pink-600'>Home</Link>
      <Link to='/products' className="hover:text-pink-600">Products</Link>
      <Link to='/cart' className='hover:text-pink-600'>🛒</Link>
       <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-[5px] font-light rounded leading-none">logout</button>
      </div>
      
      :
      <div className='flex gap-4'>
      <Link to='/' className='hover:text-pink-600'>Home</Link>
      <Link to='/products' className="hover:text-pink-600">Products</Link>
      <Link to='/cart' className='hover:text-pink-600'>Cart</Link>
      <div>
      <Link to='/login' className='hover:text-pink-600'>Login |</Link>
      <Link to='/register' className='hover:text-pink-600'> Register</Link>
      </div>
      </div>
      }
      
    </nav>
  )
}

=======
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

>>>>>>> 397bf7e0ff0d106e5d3c0f654ea24a3df1e6a119
export default Navbar