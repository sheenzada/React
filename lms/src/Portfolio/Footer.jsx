import React, { useState } from 'react'

function Footer() {
  const [count, setCount] = useState(0)
  function increase(){
setCount(count+1)

  }
  function decrease(){
setCount(count-1)

  }
  function reset(){
setCount(0);
  }
  return (


    <>
    <div className='bg-green-400 shadow-xl mx-auto w-full h-40 mt-14 text-center'> 
  <h1 className=' text-3xl'>{count}</h1>

    <button onClick={increase} className='w-32 bg-green-600 h-10 rounded mt-14 mx-2'> Increament</button>
    <button onClick={decrease} className='gap-3 bg-orange-500 w-32 rounded h-10 mx-2' >Decrement</button>
    <button onClick={reset} className='w-32 h-10 bg-red-600 rounded mx-2'>reset</button>
    </div>

    </>
  )
}

export default Footer


