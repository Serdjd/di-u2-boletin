import { useState } from "react";

export default function Counter() {
    const [count,setCount] = useState(0)
    function plus() {
        setCount(count + 1)
    }
    function minus() {
        setCount(count - 1)
    }
    return(
        <div>
            <p>Me has pulsado {count} veces</p>
            <button onClick={plus}>Plus</button>
            <button onClick={minus}>Minus</button>
        </div>
    )
}