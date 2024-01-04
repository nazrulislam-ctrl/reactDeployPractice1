import { useState } from 'react'
function App() {

  const [counter, setCounter] = useState(0);

  const increment=()=> {
    setCounter(counter+1);
  }
  const decrement=()=> {
    if(counter>0){
      setCounter(counter-1);
    }
  }
  const reset=()=> {
    setCounter(0);
  }

  return (
    <>
    <div className="container mx-auto flex items-center justify-center h-[100px] bg-green-600 gap-9 {counter}">
      <button  className='btn'>Counter {counter}</button>
      <button  className='btn'>Counter {counter}</button>
      <button  className='btn'>Counter {counter}</button>
      <button  className='btn'>Counter {counter}</button>
    </div>
    <div className="container mx-auto flex items-center justify-center h-[100px] gap-4">
      <button onClick={increment} className='btn btn-success'>Increase</button>
      <button onClick={decrement} className='btn bg-red-700 text-black'>Decrease</button>
      <button onClick={reset} className='btn bg-yellow-400 text-black'>Reset Counter</button>
    </div>
    
    </>
  )
}

export default App;
