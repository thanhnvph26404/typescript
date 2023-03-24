import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const ProductManagementPage = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(props.products)
        console.log(props)
    }, [props])
    const removeProduct = (id) => {
        props.onRemove(id)
    }
  return (
      <div>
          <button><Link to={'/admin/products/add'}>Add New Product</Link></button>
          <table>
              <thead>
                  <tr>
                    <th>#</th>
                    <th>ProductName</th>
                    <th>ProductPrice</th>
                    <th>Action</th>
                  </tr>
              </thead>
              <tbody>
                  {data.map((item, index) => (
                      <tr key={item.id}>
                          <td>{index + 1}</td>
                          <td>{ item.name}</td>
                          <td>{ item.price}</td>
                        <td>
                            <button onClick={() => removeProduct(item.id)}>Xóa</button>
                            <button><Link to={`/admin/products/edit/${item.id}`}>Sửa</Link></button>
                        </td>
                    </tr>
                  ))}
                  
              </tbody>
          </table>
    </div>
  )
}

export default ProductManagementPage