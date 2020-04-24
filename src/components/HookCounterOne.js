import React, { useState , useEffect } from 'react'

function HookCounter() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} time`
    })

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>count {count}</button>
        </div>
    )
}

export default HookCounter
