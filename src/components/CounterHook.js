import React, { useState } from 'react'

function CounterHook() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Incremet</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
        </div>
    )
}

export default CounterHook
