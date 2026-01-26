import React , { useRef } from 'react'

export default function User (){
    const inputRef = useRef(null)


    function handleInput(){
        inputRef.current.focus()
        inputRef.current.value="Helloo"
    }
    return(
        <>
        <div>
            <input ref={inputRef}/>
            <button onClick={handleInput}>Click me!</button>
        </div>
        </>
    )
}