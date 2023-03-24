import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
const UpdateProduct = (props) => {
  const {id} = useParams()
  const [product, setProduct] = useState({})
  const [inputValue, setInputValue] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const currentProduct = props.products.find((item) => item.id == id)
    setProduct(currentProduct)
  },[])
    const updateProduct = (e) => {
        e.preventDefault();
        props.onUpdateProduct({...product, ...inputValue})
        navigate('/admin/products')
      
    }
    const onHandleChange = (e) => {
        const { name, value } = e.target
        setInputValue({...inputValue, [name]: value})
    }
  return (
      <div>
          <h3>Add product</h3>
         
              <label htmlFor="">Tên sản phẩm</label>
      <input type="text"
        defaultValue={product?.name}
              name="name"
              onChange={onHandleChange}
          />
          <label htmlFor="">Giá sản phẩm</label>
      <input type="text"
        defaultValue={product?.price}
              name="price"
              onChange={onHandleChange}
              />
              <button onClick={updateProduct}>update</button>
          
    </div>
  )
}

export default UpdateProduct