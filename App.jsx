import './App.css'
import { useState } from 'react'
import Task from './components/Task'
import Todo from './components/Todo'

function App() {
  const [task,setTask]=useState('')
  const [add,setAdd]=useState([])

  function inputToDo(e)
  {
    setTask(e.target.value)
  }
  function addTask()
  {
    if(task!='')
    {
      setAdd((prevAdd)=>[...prevAdd,task])
      setTask('')
    }
  }
  function delTodo(addIndex)
  {
    setAdd((prevAdd)=>prevAdd.filter((prevAdd,prevAddIndex)=>{
      return addIndex!=prevAddIndex
    }))

  }
  return (
    <main>
      <h1 >TO DO</h1>
      <Task task={task} inputToDo={inputToDo} addTask={addTask}/>
      <Todo add={add} delTodo={delTodo}/>
    </main>  
  )
}

export default App
