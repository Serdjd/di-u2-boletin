export default function DropDown({opciones}) {
    return(
        <select>
            {
                opciones.map((option) => (<Option value={option} key={option}/>))
            }
        </select>
    )
}

function Option({value}) {
    return(
        <option>{value}</option>
    )
}