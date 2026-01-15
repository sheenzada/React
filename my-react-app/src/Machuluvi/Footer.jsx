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
    <div id='taju'>
  <h1 id='hp'>{count}</h1>
    </div>

    <button onClick={increase}> Increament</button>
    <button onClick={decrease}>Decrement</button>
    <button onClick={reset}>reset</button>

    </>
  )
}

export default Footer


