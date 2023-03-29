import React, { useState } from 'react';
import data from "./data.json";
import Listtask from "./Listtask";
import ToDoList from "./ToDoList";
import "./App.css"
import Addtask from './Addtask';


function App() {
  const [ toDoList, setToDoList ] = useState(data);
  const handleToggle = (id,title) => {
    console.log('hi');
    let mapped = toDoList.map(task => {
      return task.id == id && task.task==title ? { ...task, complete: !task.complete } : { ...task};
    });
    console.log(mapped);
    setToDoList(mapped);
  }
  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  };
  return (
    <div className="App">
        <Listtask />
        <ToDoList toDoList={toDoList}  handleToggle={handleToggle} handleFilter={handleFilter}/>
        <Addtask toDoList={toDoList} setToDoList={setToDoList}/>
    </div>
  );
 }
  
 export default App;