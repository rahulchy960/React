import './App.css'
import Card from './components/Card'

// Props are arguments passed into React components.
// The main purpose of props is to allow a parent component to send data to its child components in form of object
// Props cannot be modified by the receiving component.
// They are strictly for reading data and should not be altered.
// Props can be updated when the parent component’s state changes.

function App() {

  const myObj = {name:"Rahul NFT", price:10};
  const myObj2 = {name:"Bored Ape NFT", price:20};
  const Arr = [1, 2, 3, 4, 5];

  return (
    <>
      <h2 className=' text-center bg-green-500 rounded-xl p-3 mb-5'>Tailwind CSS Config</h2>
      <div className='flex gap-5'>
        {/* <Card learning="react" myObj={myObj} Arr={Arr} />  
        <Card Arr={Arr} myObj={myObj2} /> */}
        <Card name="Rahul's NFT" price="10" />
        <Card name="Bored Ape NFT" price="10" />
        <Card />
      </div>
    </>
  )
}

export default App
