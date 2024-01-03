import React, {ChangeEvent, FC,useState} from 'react'
import {ITask} from './interfaces.ts' 
import './App.css'

const App:FC =() => {

  const [task,setTask] = useState<string>("")
  const [deadline,setDeadline] = useState<number>(0)
  const [todo,setTodo] = useState<ITask[]>([])


  //HandleChange Function
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === "task"){
      setTask(event.target.value)
    }
    else{
      setDeadline(Number(event.target.value))
    }
  }

  //AddTask function
  const addTask = ():void =>{
    const newTask = {taskName : task, deadline: deadline}
    setTodo([...todo,newTask])
    console.log(todo)
    setTask("")
    setDeadline(0)
  }

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task..."
            name="task"
            onChange={handleChange}
            value={task}
          />
          <input
            type="number"
            placeholder="Deadline (in Days)..."
            name="deadline"
            onChange={handleChange}
            value={deadline}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
      </div>
    </div>
  )
}

export default App
