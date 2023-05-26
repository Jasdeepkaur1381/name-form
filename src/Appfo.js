import './App.css';
import React, { useState } from "react";
const Apps = () => {

    //in useState we can also pass object

    let [fullName, setname] = useState({
        fname: "",
        lname: "",
        email: "",
        number: "",
    });

    const inputEvent = (e) => {
        console.log(e);
        console.log(e.target);
        console.log(e.target.value);
        console.log(e.target.name);
        // console.log(e.target.placeholder);
        const value = e.target.value;
        const name = e.target.name;

        setname((preValue) => {
            console.log(preValue);
            return {
                ...preValue,
                [name]: value, //name like this so that present value updated , instead of making new key value pair
            };
            // console.log(preValue);
            // if (name === "fname") {
            //     return {
            //         fname: value,
            //         lame: preValue.lname,
            //         email: preValue.email,
            //         number: preValue.number,
            //     };
            // }
            // else if (name === "lname") {
            //     return {
            //         fname: preValue.fname,
            //         lname: value,
            //         email: preValue.email,
            //         number: preValue.number,


            //     };
            // }
            // else if (name === "email") {
            //     return {
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: value,
            //         number: preValue.number,

            //     };
            // }
            // else if (name === "number") {
            //     return {
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         number: value,
            //     };
            // }
        });
    };
    const onSubmits = (e) => {
        e.preventDefault();
        // console.log(e);  
        alert('form submitted');
    }
    return (
        <>  <form onSubmit={onSubmits}>
            <div className='Main_div'>

                <h1>Hello {fullName.fname} {fullName.lname}</h1>
                <p>{fullName.email} {fullName.number}</p>
                <input type="text"
                    placeholder="Enter Your First Name"
                    name='fname'
                    onChange={inputEvent}
                    value={fullName.fname}
                />
                <input type="text"
                    placeholder="Enter Your Last Name"
                    onChange={inputEvent}
                    name='lname'
                    value={fullName.lname}
                />
                <input type="email"
                    placeholder="Enter Your Email"
                    onChange={inputEvent}
                    name='email'
                    value={fullName.email}
                />
                <input type="number"
                    placeholder="Enter Your mobile number"
                    onChange={inputEvent}
                    name='number'
                    value={fullName.number}
                />

                <button type='submit'>Submit ✅</button>


            </div>
        </form>
        </>
    )
}

export default Apps;

//earlier we already learned hoe we can use form after then can use
//single input Event for all the input tags /
//now wer are going to learn how we can simply our inputEven called with onChange function through destructuring
//the function of UseState on right hand side also holds the previous values of object
//noew changes
// next change