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

// function App() {

//   let [counter, setCounter] = useState(0);  
//   // useState can take any value as initial value 
//   // {boolean, string, number, function , object ect }
//   // And return two values in the form of an array
//   // 0th index : the variable that stores the value
//   // 1th index : A method that updates the variable's value
//   const Add = ()=>{
//     counter = counter+1;
//     console.log("Clicked " + counter);
//     setCounter(counter);
//   }
//   const Sub = ()=>{
//     if(counter != 0){
//       counter = counter - 1;
//     }
//     console.log("Clicked " + counter);
//     setCounter(counter)
//   }
//   return (
//     <>
//       <h1>React Counter</h1>
//       <h3>Counter : {counter}</h3>
//       <button onClick={Add}>Add {counter}</button>
//       <button onClick={Sub}>Sub {counter}</button>
//     </>
//   )
// }

// counter is updated in all place with out taking any reference or 
// getElementByID or querySelector and updating the innerHTML 




function App() {

  let [counter, setCounter] = useState(0);  

  // const Add = ()=>{
  //   console.log("Clicked " + counter);  
  //   setCounter(counter+1);   // in diff algo react send the ui updation in batches so when it sees same work
  //   setCounter(counter+1);   // repeated again it only updates the last state for optimization purpose
  //   setCounter(counter+1);
  //   setCounter(counter+1);
  // }

  const Add = ()=>{
    console.log("Clicked " + counter);
    setCounter((prevCounter)=> prevCounter+1);   // the setCounter accepts a callback that returns the previous state
    setCounter((prevCounter)=> prevCounter+1);   // so in every updation if we take the previous state and then 
    setCounter((prevCounter)=> prevCounter+1);   // update it , then the desire state propagation happens
    setCounter((prevCounter)=> prevCounter+1);
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

export default App


