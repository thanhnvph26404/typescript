import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
const AddProduct = (props) => {
    const [inputValue, setinputValue] = useState()
    const navigate = useNavigate()
    const addProduct = (e) => {
        e.preventDefault();
        props.onAddProduct( inputValue)
        navigate('/admin/products')
    }
    const onHandleChange = (e) => {
        const { name, value } = e.target
        setinputValue({...inputValue, [name]: value})
    }
  return (
      <div>
          <h3>Add product</h3>
         
              <label htmlFor="">Tên sản phẩm</label>
          <input type="text"
              name="name"
              onChange={onHandleChange}
          />
          <label htmlFor="">Giá sản phẩm</label>
          <input type="text"
              name="price"
              onChange={onHandleChange}
              />
              <button onClick={addProduct}>Add</button>
          
    </div>
  )
}

export default AddProduct