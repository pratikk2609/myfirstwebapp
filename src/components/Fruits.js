import React from 'react'

function Fruits() {
    const names = ['Apple', 'Banana', 'Watermelon', 'Pear', 'Mango','Apple', 'Banana', 'Watermelon', 'Pear', 'Mango']

    return (
        <div>
             {names.map(n => <p>{n}</p>)}
        </div>
    )
}

export default Fruits
