export default function Card({nombre,descripcion,imagen}) {
    return (
        <div>
            <h1>{nombre}</h1>
            <br/>
            <p>{descripcion}</p>
            <img
                src={imagen}
            >
            </img>
        </div>
    )
}