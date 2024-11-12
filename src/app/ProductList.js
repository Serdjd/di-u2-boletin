import { products } from "./Data"
function Product({product}) {
    return(
        <div>
            <h2>{product.name}    {product.price}€</h2>
            <p>{product.description}</p>
        </div>
    )
}
export default function ProductList(){
    let list = products.map(
        (product) => (<Product product={product} key={product.name}/>)
    )
    return(
        <>
        {list}
        </>
    )
}