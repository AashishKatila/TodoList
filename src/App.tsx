import {ChangeEvent, FC,useState} from 'react'
import {ITask} from './interfaces.ts' 
import './App.css'
import TodoTask from './components/TodoTask.tsx'

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
    // console.log(todo)
    setTask("")
    setDeadline(0)
  }

  //To remove completed tasks
  const completeTask = (taskNameToDelete: string):void =>{
    setTodo(
      todo.filter((task) =>{
        return task.taskName != taskNameToDelete
      })
    )
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

      {/* Displays the todolist  */}
      <div className="todoList">
        {todo.map((task:ITask, key:number) =>{
          return <TodoTask key={key} task={task} completeTask={completeTask} />
        })}
      </div>
    </div>
  )
}

export default App
