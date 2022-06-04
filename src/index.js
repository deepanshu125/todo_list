import React, { useState } from "react";
import reactDOM from 'react-dom';
import { nanoid } from "nanoid";

function App()
{   const [text, settext] = useState(Number);
    const [tasks, setTask] = useState([]);
    const taskvaluechange = (val) =>{
        settext(val);
    } ;

    const addTask = () => {
        setTask([...tasks,{id :nanoid(),name:text}]);
        settext("");
    }
    const deleteTask = (id) => {
        const task_array = tasks.filter(function(task){
            if(task.id !== id){ return true}
        });
        setTask(task_array);
    }
    return(
        <>
        <div className="todo-form">
            <input type ="text" value ={text} onChange={(e) => taskvaluechange(e.target.value)}/>
            <button onClick={()=> addTask() }>Add</button>
            

        </div>
        <br/>

        <div className="todo-list">
           { tasks.map(task => {
               return <p key = {task.id}>{task.name} <a href="#" onClick={() => deleteTask(task.id)}>Delete</a></p>;
           }) 
           }

        </div>
        {/* <Cart/> */}
        
        </>
    )
}

function Cart()
{


    let totalamount=10;
    let chai = 1;
const [counter, setCounter ] = useState(0)

const minusHandler = () => {
    if(counter>0)
    {
        setCounter(counter - 1)
        totalamount = totalamount - chai;
    }
};
const plusHandler = () => {
    setCounter(counter + 1)
    totalamount = totalamount + chai;
};


return(
    <>
    <div className="cart_button">
        <p2>{totalamount}</p2>
        <button onClick={minusHandler}>--</button>
        <input type="number" value={counter}/>
        <button onClick={plusHandler}>++</button>

    </div>
    </>
)
}


reactDOM.render(<App /> , document.getElementById("root"));