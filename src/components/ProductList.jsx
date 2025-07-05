<<<<<<< HEAD
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

function ProductList() {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/products")
        .then((res)=>setProducts(res.data))
        .catch((e)=>console.log(e))
    },[])
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-6">
        
        {products.length>0?
        products.map((product)=>(
            <ProductCard key={product.id} product={product}/>
        )):
        <p className="text-gray-600 text-xl">Loading products...</p>        }
    </div>
  )
}

=======
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

function ProductList() {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/products")
        .then((res)=>setProducts(res.data))
        .catch((e)=>console.log(e))
    },[])
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-6">
        
        {products.length>0?
        products.map((product)=>(
            <ProductCard key={product.id} product={product}/>
        )):
        <p className="text-gray-600 text-xl">Loading products...</p>        }
    </div>
  )
}

>>>>>>> 397bf7e0ff0d106e5d3c0f654ea24a3df1e6a119
export default ProductList