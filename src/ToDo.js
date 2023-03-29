import React from 'react'
    ;

const ToDo = ({ todo,handleToggle }) => {
    return (
        <div className={todo.complete ? "strike" : ""}>
            <p onClick={()=>handleToggle(todo.id,todo.task)}>{todo.task}</p>
        </div>
    );
};

export default ToDo;