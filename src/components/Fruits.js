import React from 'react'

function Fruits() {
    const names = ['Apple', 'Banana', 'Watermelon', 'Pear', 'Mango', 'Apple', 'Banana', 'Watermelon', 'Pear', 'Mango']

    return (
        <div>
            {names.map(id => {
                if (id === "Banana")
                    return <p>{id}</p>
                else
                    return <button style={{
                        backgroundColor: 'blue',
                        width: '100px',
                        height: '40px'
                    }}>{id}</button>
            })
            }
        </div>
    )
}

export default Fruits
