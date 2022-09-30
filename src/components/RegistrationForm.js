import React, { Component } from 'react'

class RegistrationForm extends Component {
    render() {
        return (
            <div>
                <h4>Registration Form</h4>
                <form >
                    
                    <input type="text" placeholder="Username"></input>
                    <br></br>
                    <input type="password" placeholder='Password'></input>
                    <br></br>
                    <h4>Select your Class</h4>
                    <input type="radio" value="Class XI" name="class"></input>Class XI
                    <br></br>
                    <input type="radio" value="Class XII" name="class"></input>Class XII
                    <br></br>
                    <h4>Select your favourite subject</h4>
                    <label for="Math"></label>
                    <input type="checkbox" value="Math" name="subject" id="101"></input>Math
                    <br></br>
                    <label for="Phy"></label>
                    <input type="checkbox" value="Phy" name="subject" id="102"></input>Phy
                    <br></br>
                    <label for="Chem"></label>
                    <input type="checkbox" value="Chem" name="subject" id="103"></input>Chem
                    <br></br>
                    <label for="Computer Science"></label>
                    <input type="checkbox" value="Computer Science" name="subject" id="104"></input>Computer Science
                    <br></br>
                    <h4>Select your city</h4>
                    <select name="City">
                    <option value="Delhi">Delhi</option>
                    <option value="Banglore">Banglore</option>
                    <option value="Pune">Pune</option>
                    <option value="Mumbai">Mumbai</option>
                    </select>
                    <br></br>
                    <textarea name="Feedback" id="101" placeholder="please give your valuable feedback here"></textarea>
                    <br></br>
                    <input type="Submit" value="Submit"></input>

                </form>
            </div>
        )
    }
}

export default RegistrationForm

