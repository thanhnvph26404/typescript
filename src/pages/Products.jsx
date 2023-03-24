import { useState, useEffect } from "react"
import { deleteProduct } from "../api/product"
const Products = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(props.products)
    }, [props])
    const removeProduct = (id) => {
        props.onRemove(id)
    }
    return (
        <div>
            {
                data.map((item) => {
                    return <div key={item.id}>
                        <h3 >{item.name}</h3>
                        <button onClick={() => removeProduct(item.id)}>Remove</button>
                    </div>
                })
            }
        </div>
    )
}

export default Products