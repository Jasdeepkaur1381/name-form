
import './App.css';
import React, { useState } from "react";
const App = () => {
  // const hello = "Hello ";
  // let [inputname, setname] = useState(hello);
  let [inputname, setname] = useState("");
  let [fullName, setFullName] = useState("");
  const inputEvent = (e) => {
    console.log(e);
    console.log(e.target.value);
    setname(e.target.value);
  }
  const subname = (e) => {
    // console.log(e);
    setFullName(inputname);
  }
  return (
    <>
      <div>
        <h1>Hello {fullName}</h1>
        <input type="text"
          placeholder="Enter Your Name"
          onChange={inputEvent}
          value={inputname}
        />
        <button onClick={subname}>Submit ✅</button>
      </div>
    </>
  )
}

export default App;
// now while working on form you have to use defalutValue keyword to edit
// else use OnChange taaki hame pata lag sake ki hum jo edit kr rw hai .. to kya likha ja ra hai
// onchange passes object when it gets triggered