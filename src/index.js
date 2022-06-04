import React, { useState } from "react";
import reactDOM from 'react-dom';
import "./style.css";
import { nanoid } from "nanoid";

function App() {
    const [text, settext] = useState("");
    const [tasks, setTask] = useState([]);
    const [ischecked, setIsChecked] = useState(false);
    const [filter, setFilter] = useState('All');
    const taskvaluechange = (val) => {
        settext(val);
    };

    const taskValueChange = (val) => {
        settext(val);
      };

    const addTask = () => {
        setTask([...tasks, { id: nanoid(), name: text, status: 0 }]);
        settext("");
    }
    const addCheck = (id) => {
        tasks.map((task) => {
          if (task.id === id) {
            task.checked = !task.checked;
          }
        });
        setTask([...tasks]);
      };

    const editTask = (id) => {
        setTask(tasks.map(task => {
            if (task.id === id) {
                if (task.status === 0) {
                    task.status = 1;
                } else {
                    task.status = 0
                }
            }
            return task;
        }))
    }
    const deleteTask = (id) => {
        const task_array = tasks.filter(function (task) {
            if (task.id !== id) { return true }
        });
        setTask(task_array);
    }
    return (
        <>
            <div className="todo-form">
                <input type="text" value={text} onChange={(e) => taskvaluechange(e.target.value)} />
                <button onClick={() => addTask()}>Add</button>{" "}
                <button onClick={() => setFilter("All")}>All</button>{" "}
                <button onClick={() => setFilter("done")}>Show Done</button>{" "}
                <button onClick={() => setFilter("not done")}>Not Done</button>

            </div>
            <div >
            { tasks.map((note) => {
                if(filter ==="All"){
                    return (
                        <div className="note" key={note.id}>
                          <input
                            type="checkbox"
                            checked={note.checked}
                            onClick={() => addCheck(note.id)}
                          />
                          {note.checked ? (
                            <span className="cut">{note.name} </span>
                          ) : (
                            <span> {note.name}</span>
                          )}
                          <button onClick={() => deleteTask(note.id)}>DELETE</button>
                        </div>
                      );
                }
                if (filter === "done" && note.checked) {
                    return (
                      <div className="note" key={note.id}>
                        <input type="checkbox" checked />
        
                        <span className="cut">{note.name} </span>
        
                        <button onClick={() => deleteTask(note.id)}>-</button>
                      </div>
                    );
                  }
                  if (filter === "not done" && !note.checked) {
                    return (
                      <div className="note" key={note.id}>
                        <span>{note.name} </span>
                      </div>
                    );
                  }
            })}
            </div>
            <br />

            
              
            {/* <Cart/> */}
        </>
    )
}






function Cart() {


    let totalamount = 10;
    let chai = 1;
    const [counter, setCounter] = useState(0)

    const minusHandler = () => {
        if (counter > 0) {
            setCounter(counter - 1)
            totalamount = totalamount - chai;
        }
    };
    const plusHandler = () => {
        setCounter(counter + 1)
        totalamount = totalamount + chai;
    };


    return (
        <>
            <div className="cart_button">
                <p2>{totalamount}</p2>
                <button onClick={minusHandler}>--</button>
                <input type="number" value={counter} />
                <button onClick={plusHandler}>++</button>

            </div>
        </>
    )
}


reactDOM.render(<App />, document.getElementById("root"));