import { useState } from "react";

export default function ToogleSwitch() {
    const [state,setState] = useState('Off')
    return(
        <div>
            <p>{state}</p>
            <button 
            onClick={
                () => setState(state == 'Off' ? 'On' : 'Off')
                }
            >
            Switch
            </button>
        </div>
    )
}