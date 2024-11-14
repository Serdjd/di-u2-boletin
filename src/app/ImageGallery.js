import { imagenes } from "./Data"
export default function ImageList() {
    return(
        <>
            {
                imagenes.map(
                    (imagen) => (
                        <Image src={imagen.url} key={imagen.id}/>
                    )
                )
            }
        </>
    )
}

function Image({src}) {
    return(
        <img
            src={src}
            width={400}
            height={600}
        />
    )
}