
import { useEffect, useState } from 'react'
import './App.css'
import CoffeeCard from './components/CoffeeCard'

function App() {
  const [coffees, setCoffees] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/coffee')
      .then(res => res.json())
    .then(data=> setCoffees(data))
  } ,[])

  return (
    <>
    
       
      <h1 className='text-6xl text-purple-500'>Vite + React</h1>
      <div className="grid grid-cols-2">{coffees.map(coffee => <CoffeeCard coffee={coffee} key={coffee._id}></CoffeeCard>)}</div>
    </>
  )
}

export default App
