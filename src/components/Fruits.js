import React from 'react'

function Fruits() {
    const names = ['Apple', 'Banana', 'Watermelon', 'Pear', 'Mango', 'Apple', 'Banana', 'Watermelon', 'Pear', 'Mango']

    return (
        <div>
            <header>
                <h1>NAMES OF FRUITS</h1>
                <h3>-Apple</h3>
                
                <h3>-Banana</h3>
                
                <h3>-Watermelon</h3>
                
                <h3>-Pear</h3>
                
                <h3>-Mango</h3>
    
            </header>

            <br />

            <section>
                <b>Advantages of Fruits</b>
            </section>

            <br />

            <article>
                <i>-Fruits are a great source of vitamins and minerals</i>
                <br />
                <i>-Lots and lots of fiber</i>
                <br />
                <i>-They are low-calorie and low-fat</i>
                <br />
                <i>-Fruits help you maintain good health</i>
                <br />
            </article>
    
            <a href="https://www.google.co.in/"> Google </a>
            <hr />
            <img src="https://stylesatlife.com/wp-content/uploads/2020/03/Different-Types-of-Fruits.jpg" alt="fruits" />
    
            {names.map(id => {
                    return <b style={{
                        backgroundColor: 'green',
                        fontSize : '25px'

                    }}>{id}</b>
            })
            }
        </div>
    )


}

export default Fruits
                             