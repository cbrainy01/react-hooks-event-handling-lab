// Code Keypad Component Here
import React from "react"

// function handleChange(event) {
//  console.log("Entering password...");
// }

function Keypad({handleChange}) {
    return (<input type="password" onChange={handleChange}/>)
}

export default Keypad;