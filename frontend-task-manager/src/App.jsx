import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import TaskItem from './components/TaskItem'

function App() {
  const [tasks, setTasks] = useState([])

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get('http://localhost:8000/tasks')
      setTasks(data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <>
      {tasks.length > 0 ? (
        tasks.map((task) => {
          return (
            <TaskItem key={task._id} description={task.description} isCompleted={task.isCompleted}/>
          )
        })
      ) : (
        <p>No tasks available</p>
      )}

    </>
  )
}

export default App
