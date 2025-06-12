import { useCallback, useEffect, useRef, useState } from "react"

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  
  // The useCallback Hook is a built-in React Hook that memoizes a callback function, 
  // preventing it from being recreated on every render unless its dependencies change. 
  // This is useful for optimizing performance, especially when passing functions as 
  // props to child components.
  // The function to be memoized is passed as a parameter to useCallback.
  // An array of dependencies determines when the function should be recreated.
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";
    
    for (let i = 1; i <= length; i++) {
      let char = Math.floor( Math.random() * str.length + 1) ;
      pass += str.charAt(char);   
    }
    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword]);


  // useEffect is a React Hook that lets you perform side effects in functional components. 
  // Side effects are operations that affect something outside the scope of the function 
  // being executed, such as fetching data, updating the DOM directly, setting up subscriptions, 
  // or starting timers

  useEffect(()=>{
    passwordGenerator();
  }
  ,[length, numberAllowed, charAllowed, passwordGenerator]);


  // useRef is a React Hook that allows you to create a mutable object that persists for the
  // lifetime of the component. It is often used to access and interact with DOM elements
  // or to store mutable values that do not trigger re-renders when changed.
  // In this case, copyToClipboard is used to reference the input element that contains the generated password.
  const copyToClipboard = useRef(null)

  const copyPasswordToClipboard = useCallback(()=>{
    copyToClipboard.current.select();
    window.navigator.clipboard.writeText(password);
  },[password]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3"
              placeholder="Password"
              readOnly
              ref={copyToClipboard}
          />
          <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipboard}
          >copy</button>
          
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={32}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
        <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
                setNumberAllowed((prev) => !prev);
            }}
        />
        <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
            <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                onChange={() => {
                    setCharAllowed((prev) => !prev )
                }}
            />
            <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
  </div>
  )
}

export default App


// learning from this project:
// 1. How to use useCallback to memoize functions and optimize performance.
// 2. How to use useRef to access DOM elements and store mutable values.
// 3. How to use useEffect to perform side effects in functional components.
// 4. How to create a password generator that allows customization of length and character types.
// 5. How to handle user input and state management in a React application.
// 6. How to copy text to the clipboard using the Clipboard API.