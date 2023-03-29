import React from 'react'
import { useState } from 'react';
function Addtask({toDoList,setToDoList}) {
    
    const [ userInput, setUserInput ] = useState('');
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit = () => {
        console.log('hiii');
        addTask(userInput);
        setUserInput("");
  
    }
    const addTask = (userInput) => {
        let copy = [...toDoList];
        copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
        setToDoList(copy);
      }

  return (
    <div>    <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
    <button onClick={()=>handleSubmit()}>click me</button>

    </div>
  )
}

export default Addtask

