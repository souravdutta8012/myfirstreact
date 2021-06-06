import React, { useState } from 'react'

function ArrayStateHook() {
    const arr = []
    const [items, setItem] = useState(arr)

    const addItem = () => {
        setItem([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    return (
        <div>
            <button onClick={addItem}>Add</button>
            <ul>
                {items.map(item => (<li key={item.id}>{item.value}</li>))}
            </ul>
        </div>
    )
}

export default ArrayStateHook
