import Products from "./pages/Products"
import HomePage from "./pages/HomePage"
import { useState, useEffect } from "react"
import {Route, Routes} from 'react-router-dom'
import ProductDetail from "./pages/ProductDetail"
import { getAllProducts, deleteProduct ,addProduct, updateProduct} from "./api/product"
import Dashboard from "./pages/admin/Dashboard"
import ProductManagementPage from "./pages/admin/ProductManagementPage"
import AddProduct from "./pages/admin/AddProduct"
import UpdateProduct from "./pages/admin/UpdateProduct"

function App() {
  
  const [products, setProduct] = useState([])
  useEffect(() => {
    getAllProducts().then(({ data }) => setProduct(data))
  }, [])
  const onHandleRemove = (id) => {
    deleteProduct(id).then(() => setProduct(products.filter((product) => product.id != id)))
  }

 const onHandleAdd = (product) => {
    addProduct(product).then(() => setProduct([...products, product]))
 }
  
  const onHandleUpdate = (product) => {
    updateProduct(product).then(() => setProduct(products.map(item => item.id == product.id ? product : item)))
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<Products products={products} onRemove={ onHandleRemove} />} />
        <Route path='/products/:id' element={<ProductDetail  />} />
        <Route path='/admin' element={<Dashboard/>} />
        <Route path='/admin/products' element={<ProductManagementPage products={products} onRemove={ onHandleRemove}/>} />
        <Route path='/admin/products/add' element={<AddProduct onAddProduct={onHandleAdd}/>} />
        <Route path='/admin/products/edit/:id' element={<UpdateProduct onUpdateProduct={onHandleUpdate} products={ products} />} />
      </Routes>
    </div>
  )
}

export default App
