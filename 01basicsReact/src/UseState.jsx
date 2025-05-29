import React, { useState } from 'react'

function UseState() {
  const [count, setCount] = useState(0);
  const increment = ()=>{
    for(let i=0;i<5;i++){
        setCount(count => count+1);
    }
  }
  return (
    <div>
       <p> Counter = {count} </p> 
       <button onClick={()=>setCount(count+1)}>Counter(+)</button>
       <button onClick={increment}>Counter(5)</button>
       <button onClick={()=>setCount(count-1)}>Counter(-)</button>
    </div>
  )
}

export default UseState