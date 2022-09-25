import React from 'react'

function Fruits() {
    const names = ['Apple', 'Banana', 'Watermelon']

    return (
        <div>
            <l1>{names[0]},
                {names[1]},
                {names[2]}
            </l1>
        </div>
    )
}

export default Fruits
