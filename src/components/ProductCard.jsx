<<<<<<< HEAD
import React from 'react'
import { useCart } from '../context/CartProvider'
import Button from './common/Button'

function ProductCard({product}) {
  const {addToCart}=useCart()
  return (
    <div className="w-64 p-4 border rounded-2xl shadow hover:shadow-lg bg-white text-center transition duration-300 ease-in-out">
       <img src={product.image} alt={product.name}    className="w-full h-40 object-cover rounded" loading="lazy"/>
       <h3 className="text-lg text-gray-800 font-semibold mt-2 ">{product.name}</h3>
       <p className="text-pink-600 font-bold mt-1">₹{product.price}</p>
       <p className="text-pink-600 font-bold mt-1">{product.category}</p>
        <Button
        onClick={(e) => {
          e.preventDefault();
          addToCart(product);
        }}
        text="Add to Cart"
        className="mt-2 !bg-yellow-500 !hover:bg-yellow-600 text-white px-4 py-2 rounded">
        
      </Button>
    </div>
  )
}

=======
import React from 'react'

function ProductCard({product}) {
  return (
    <div className="w-64 p-4 border rounded-2xl shadow hover:shadow-lg bg-white text-center transition duration-300 ease-in-out">
       <img src={product.image} alt={product.name}    className="w-full h-40 object-cover rounded" loading="lazy"/>
       <h3 className="text-lg text-gray-800 font-semibold mt-2 ">{product.name}</h3>
       <p className="text-pink-600 font-bold mt-1">₹{product.price}</p>
       <p className="text-pink-600 font-bold mt-1">{product.category}</p>

    </div>
  )
}

>>>>>>> 397bf7e0ff0d106e5d3c0f654ea24a3df1e6a119
export default ProductCard