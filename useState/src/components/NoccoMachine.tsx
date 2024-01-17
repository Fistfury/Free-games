import { useState } from "react"
import { Nocco } from "../models/Nocco"
export const NoccoMachine = () =>{
    const [noccos, setNoccos] = useState( [new Nocco("Juuicy", "Orange", 320, false)]);

    const handleClick = () => {
        const newNocco = new Nocco("Bloody", "Black", 550, true)
        
        setNoccos([...noccos, newNocco]);
    }
    const removeClick = (index: number) => {
        const updatedNoccos = noccos.filter((_, i) => i !== index);
        setNoccos(updatedNoccos)

    }
    return (
        <>
        <h1> Nocco Machine</h1>
        <ul>
            {noccos.map((nocco, index) => (
                <li key={index}>
                   <h4>Brand: {nocco.name}</h4> <p>Color: {nocco.color}</p>
                   <p> Coffein: {nocco.coffein} mg</p> <p>Sugar: {nocco.sugar ? 'Yes': 'No'}</p>
                   <button onClick={() => removeClick(index)}>Clear Nocco</button>

                </li>
            ))}
            
           
        </ul>
      
        <button onClick={handleClick}>New Nocco</button>
        
        </>
    )
}