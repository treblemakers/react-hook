import React, { useState } from 'react'

function HookcounterTwo() {

    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for(let i = 0; i< 5;i++){
            setCount(prevCount => prevCount + 1)
        }
    }
    return (
        <div>
            count: {count} <br/>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={incrementFive}>Decrement</button>
        </div>
    )
}

export default HookcounterTwo
