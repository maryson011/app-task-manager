'use client'
import { useState, useEffect } from 'react'
import axios from 'axios'
import TaskItem from '@/app/componets/task/TaskItem'

export default function Home() {
  const [tasks, setTasks] = useState([])

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get('http://localhost:8000/tasks')
      setTasks(data)
    } catch (e) {
      console.log(e)
    }
  }

  const handleTaskClick = (taskId) => {
    console.log('Task ID:', taskId)
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <>
      {tasks.length > 0 ? (
        tasks.map((task) => {
          return (
            <TaskItem 
              key={task._id} 
              description={task.description} 
              isCompleted={task.isCompleted}
              onClick={()=>handleTaskClick(task._id)}
            />
          )
        })
      ) : (
        <p>No tasks available</p>
      )}

    </>
  )
}
