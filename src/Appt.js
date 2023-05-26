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
            // console.log(preValue);
            if (name === "fname") {
                return {
                    fname: value,
                    lame: preValue.lname,
                    email: preValue.email,
                    number: preValue.number,
                };
            }
            else if (name === "lname") {
                return {
                    fname: preValue.fname,
                    lname: value,
                    email: preValue.email,
                    number: preValue.number,


                };
            }
            else if (name === "email") {
                return {
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email: value,
                    number: preValue.number,

                };
            }
            else if (name === "number") {
                return {
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email: preValue.email,
                    number: value,
                };
            }
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


// -- In this video we will learn how to make a single Usestate for different input /
//how to make a single event function gor multiple useState
//how to simple our code for multiple inputs
//jab hume backend mai data bhejna padta tha we used name attribute
//here also we are going to use name attribute
//here an object is passed while calling an function
//it contains all the attribute of target
//if same function is being caled at multiple places then we can access the value of input through the name
//set the value of hook or we can say usestate with the help of function .. and set it with arrow function
// we have to return the value we set

// const fullname=["jasdeep",'kaur'];
// const biodata =[1,...fullname,20,"female"];

// when we want that we want to use the earlier array to the new array
// and dont want to write it again and again then it will be benefitial to ...
//triple dot is known as apread operator
//we can use anywhere in an array (start , end and mid);
//we can also use multiple in single array;
// var games=[...shooterGames,...racingGames];

// var shooterGames = ["Call of Duty", "Far Cry", "Resident Evil"];
// var [first, ...remaining] = shooterGames;    ->this is known as object destructing here shooter Games is an object ..
// first element of ShooterGame will come in first and rest in ...remaining
// console.log(first); //Call of Duty
// console.log(remaining);

//now the same thing we will work in object

// jo same cheez baar baar repeat ho ri hai .. use spread operator se easy kr do
// const fullName = {
//     fname: 'jasdeep',
//     lname: 'kaur',
//   }
//   const biodata = {
//     id: 1,
//     ...fullName,
//     age: 20,
  
//   }
//   console.log(biodata);