import React, { useState } from "react"

export default function Parent({children}){
    const [data,sendData] = useState('')
    function sendDatatoParent() {
        sendData('Vengo del hijo')
    }
    return(
        <div>
            <p>{data}</p>
            {React.cloneElement(children, { sendData: sendDatatoParent })}
        </div>
    )
}

export function Children({text, sendData}) {
    return(
        <>
            <p>{text}</p>
            <button onClick={sendData}>Me voy pa mi papa</button>
        </>
    )
}