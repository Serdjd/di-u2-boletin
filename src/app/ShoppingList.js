import { useState } from "react"

export default function ShoppingList({products}) {
    const [shops,setShops] = useState(products)
    
    function deleteProduct(id) {
        let temp = shops.filter(it => it.id !== id)
        setShops(temp)
    }
    return(
        <div>
            {
                shops.map(
                    (product) => (
                        <Product product={product} onClick={deleteProduct} key={product.id}/>
                    )
                )
            }
        </div>
    )
}

function Product({product,onClick}) {

    return(
        <>
            <label>{product.name}</label>
            <button onClick={() => onClick(product.id)}>🗑️</button>
            <br/>
        </>
    )
}