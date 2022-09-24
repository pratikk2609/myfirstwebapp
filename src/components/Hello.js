import React from 'react'

const Hello = () => {
   // return(
   //     <div>
   //         <h1>HELLO PRATIK</h1>
   //     </div>

    // )

    return React.createElement('div', null, React.createElement('h1', null, 'Hello Pratik'))
}

export default Hello