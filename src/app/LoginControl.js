import { useState } from "react"

export default function LoginControl({log}) {
    const [signIn,setSignIn] = useState(log)
    function updateState(e) {
        e.preventDefault()
        setSignIn(!signIn)
    }
    return (
        <form onSubmit={updateState}>
            <textarea></textarea>
            <br/>
            <textarea></textarea>
            <br/>
            <Button signIn={signIn}/>
        </form>
        
    )
}

function Button({signIn}) {
    let text
    if(signIn) text = 'Cerrar Sesión'
    else text = 'Iniciar Sesión'
    return (
        <button type="submit">{text}</button>
    )
}