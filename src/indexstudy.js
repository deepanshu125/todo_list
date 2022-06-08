import React, { useState } from "react";
import ReactDOM from "react-dom";
import { nanoid } from "nanoid";

function App() {

    const [text, setText] = useState("initial text");
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('All');
    const taskValueChange = (val) => { setText(val); };

    const addTask = () => {
        setTasks([...tasks, { id: nanoid(), name: text, status: 0 }]); //add all the tasks and gives a id and name to every task
        setText("");
    }

    const [num, setNum] = useState(0);
    const [limit, setLimit] = useState(100);
    const addNum = () => {
        if (limit !== 0) {
            setNum(num + 1);
            setLimit(limit - (10));
        }
    }

    const subNum = () => {

        if (num > 0) {
            setNum(num - 1);
            setLimit(limit + (10));
        }
    }

    // Deleting a task by id
    const deleteTask = (id) => {
        const tasks_array = tasks.filter(task => task.id !== id);
        setTasks(tasks_array);
    }

    const onChecked = (id) => {
        setTasks(tasks.map(task => {

            if (task.id === id) {
                if (task.status === 0) {
                    task.status = 1;
                }

                else {
                    task.status = 0
                }
            }
            return task;
        }))
    }
    const showAll = () => {
        setFilter('All')
    }
    const showPending = () => {
        setFilter('Pending');
    }
    const showDone = () => {
        setFilter("Done")
    }
    return (
        <>
            <div className="todo-form">
                <input type="text" value={text} onChange={(e) => taskValueChange(e.target.value)} />
                <button onClick={() => addTask()}>Add</button>
            </div>
            <br />


            <a onClick={showAll}>Show All</a>
            <br />
            <br />
            <a onClick={showPending}>Show Pending</a>
            <br />
            <br />
            <a onClick={showDone}>Show Done</a>

            <div className="todo-list">
                {/* List of todos */}



                {tasks.map((task, id) => {

                    if (filter === 'All') {

                        return (

                            <div key={task.id}>

                                <li key={task.id}> <input type="checkbox" checked={(task.status === 1 ? 'checked' : '')} onChange={() => onChecked(task.id)} />

                                    {task.name} - {task.status} -

                                    <a href="#" onClick={() => deleteTask(task.id)}>Delete</a>

                                </li>

                            </div>

                        );

                    } else if (filter === 'Pending') {

                        if (task.status === 0) {

                            return (

                                <div key={task.id}>

                                    <li key={task.id}> <input type="checkbox" onChange={() => onChecked(task.id)} />

                                        {task.name} - {task.status} -

                                        <a href="#" onClick={() => deleteTask(task.id)}>Delete</a>

                                    </li>

                                </div>

                            );

                        }

                    } else if (filter === "Done") {

                        if (task.status === 1) {

                            return (

                                <div key={task.id}>

                                    <li key={task.id}> <input type="checkbox" checked onChange={() => onChecked(task.id)} />

                                        {task.name} - {task.status} -

                                        <a href="#" onClick={() => deleteTask(task.id)}>Delete</a>

                                    </li>

                                </div>
                            );
                        }
                    }
                })}
                <br />
            </div>



            {/* Code for Increament and decreament */}

            <div>

                <button onClick={() => subNum()}>-</button>

                <input type="text" value={num} />

                <button onClick={() => addNum()}>+</button>

                <p>Rs 10 per item</p>

                <br />

                <input type="text" value={limit}></input>

            </div>

        </>

    );

}



ReactDOM.render(<App />, document.getElementById('root'));

