export default function ProductStock({name,inStock}) {
    return(
        <p>El prodcuto: {name + (inStock ? ', está disponible' : ', no está disponible en estos momentos')}</p>
    )
}