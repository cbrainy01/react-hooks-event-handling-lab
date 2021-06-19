// Code EyesOnMe Component Here
import React from "react"

// function handleFocus(event) {
//     console.log("Good!");
// }
// function handleBlur(event) {
//     console.log("Hey! Eyes On Me!");
// }

function EyesOnMe({handleBlur, handleFocus}) {
    return(
        <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on Me</button>
    );
}

export default EyesOnMe;