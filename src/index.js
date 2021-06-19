import React from 'react';
import ReactDOM from 'react-dom';

import Keypad from './components/Keypad';
import EyesOnMe from './components/EyesOnMe';

function handleFocus(event) {
  console.log("Good!");
}
function handleBlur(event) {
  console.log("Hey! Eyes On Me!");
}

function handleChange(event) {
  console.log("Entering password...");
 }
 

ReactDOM.render(
  <div>
    <Keypad handleChange={handleChange}/>
    <EyesOnMe handleFocus={handleFocus} handleBlur={handleBlur}/>
  </div>,
  document.getElementById('root')
);
