import React, { useState } from 'react'

function ObjectStateHook() {
    const person = {
        firstName: '',
        lastName: ''
    }
    const [name, setName] = useState(person)

    return (
        <form>
            <input type="text" value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })}></input>
            <input type="text" value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })}></input>
            <h2>Your first name is - {name.firstName}</h2>
            <h2>Your last name is - {name.lastName}</h2>
        </form>
    )
}

export default ObjectStateHook
