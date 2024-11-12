import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0)
    function handleClick() {
        setCount(count+1)
    }
    return (
        <div>
            <p>Me has pulsado {count} veces</p>
            <button
                onClick={handleClick}
            >
                Púlsame
            </button>
        </div>
    )
}
