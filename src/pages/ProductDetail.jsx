
import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getOneProduct } from '../api/product'

const ProductDetail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
      getOneProduct(id)
      .then(({data}) => setProduct(data))
    },[])
  return (
    <div>
      <h1>Product Detail Page</h1>
      <h2>{ product.name}</h2>
    </div>
  )
}

export default ProductDetail