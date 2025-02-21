import './App.css'


// react control the ui updation ... 
// so here function works fine but it not get updated on ui
/*
function App() {
  let counter = 0;
  const Add = ()=>{
    counter = counter+1;
    console.log("Clicked " + counter);
  }
  const Sub = ()=>{
    counter = counter - 1;
    console.log("Clicked " + counter);
  }
  return (
    <>
      <h1>React Counter</h1>
      <h3>Counter : {counter}</h3>
      <button onClick={Add}>Add</button>
      <button onClick={Sub}>Sub</button>
    </>
  )
}
export default App 
*/


import { useState } from 'react' //useState is a react hook (function) that updates the UI state

function App() {

  let [counter, setCounter] = useState(0);  
  // useState can take any value as initial value 
  // {boolean, string, number, function , object ect }
  // And return two values in the form of an array
  // 0th index : the variable that stores the value
  // 1th index : A method that updates the variable's value
  const Add = ()=>{
    counter = counter+1;
    console.log("Clicked " + counter);
    setCounter(counter);
  }
  const Sub = ()=>{
    if(counter != 0){
      counter = counter - 1;
    }
    console.log("Clicked " + counter);
    setCounter(counter)
  }
  return (
    <>
      <h1>React Counter</h1>
      <h3>Counter : {counter}</h3>
      <button onClick={Add}>Add {counter}</button>
      <button onClick={Sub}>Sub {counter}</button>
    </>
  )
}

// counter is updated in all place with out taking any reference or 
// getElementByID or querySelector and updating the innerHTML 

export default App


