import './App.css';
import React, { useState } from "react";
const Apps = () => {
    // const hello = "Hello ";
    // let [inputname, setname] = useState(hello);
    let [inputname, setname] = useState("");
    let [inputLastName, setLastValue] = useState("");
    let [fullName, setFullName] = useState("");
    let [lastName, setLastName] = useState("");
    const inputEvent = (e) => {
        console.log(e);
        console.log(e.target.value);
        setname(e.target.value);
    }
    const inputEvent2 = (e) => {
        console.log(e);
        console.log(e.target.value);
        setLastValue(e.target.value);
    }
    const onSubmits = (e) => {
        e.preventDefault();
        // console.log(e);  
        setFullName(inputname);
        setLastName(inputLastName);
    }
    return (
        <>  <form onSubmit={onSubmits}>
            <div>

                <h1>Hello {fullName} {lastName}</h1>
                <input type="text"
                    placeholder="Enter Your First Name"
                    onChange={inputEvent}
                    value={inputname}
                />
                <input type="text"
                    placeholder="Enter Your Last Name"
                    onChange={inputEvent2}
                    value={inputLastName}
                />

                <button type='submit'>Submit ✅</button>


            </div>
        </form>
        </>
    )
}

export default Apps;

//Here now we are using default format of form .
//react has its own submit function /even with default form values
//we can prevent fefailt rproperties of form with the help of preventDefault function