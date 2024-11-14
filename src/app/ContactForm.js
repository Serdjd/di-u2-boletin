import { useState } from "react"

export default function ContactForm() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    function checkResponse(e) {
        if((e.get("name")).length == 0 || (e.get("apellido")).length == 0) {
            alert("Faltan datos por rellenar")
        }
        else{
            alert("Enviando resultados")
            setName('')
            setEmail('')
        }
    }
    return(
        <form action={checkResponse}>
            <label>
                Nombre: 
                <input type="text" name="name" onChange={(e) => setName(e.target.value)}></input >
            </label>
            <br/>
            <label>
                Correo: 
                <input type="email" name="apellido" onChange={(e) => setEmail(e.target.value)}></input>
            </label>
            <br/>
            <button type="submit">Enviar respuesta</button>
        </form>
    )
}