'use client'
import { useState, useEffect, ChangeEvent } from 'react'
import axios from 'axios'
import TaskItem from "./components/task/TaskItem";
import Input from "@/app/components/utils/Input";
import ButtonTask from "@/app/components/utils/ButtonTask";

interface Task {
  _id: string
  description: string
  isCompleted: boolean
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [task, setTask] = useState<string>('')

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get('http://localhost:8000/tasks')
      setTasks(data)
      // console.log(data)
    } catch (e) {
      console.log(e)
    }
  }

  const createTask = async () => {
      try {
        await axios.post(`http://localhost:8000/tasks`, {
          description: task,
          isCompleted: false
        })
        setTask('')
        fetchTasks()
      } catch (e) {
          console.log(e)
      }
  }

  const updateTask = async (id: string, isCompleted: boolean) => {
    const status = isCompleted ? false : true
    try {
      await axios.patch(`http://localhost:8000/tasks/${id}`, {
        isCompleted: status})
      console.log('update...')
      fetchTasks()
    } catch (e) {
      console.log(e)
    }
  }

  const deteteTask = async (id: string) => {
    try {
      await axios.delete(`http://localhost:8000/tasks/${id}`)
      fetchTasks()
    } catch (e){
      console.log(e)
    }
  }


  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value)
  }

  const handleTaskClick = async (taskId: string, isCompleted: boolean) => {
    console.log('Task ID:', taskId)
    await updateTask(taskId, isCompleted)
  }

  const handleTaskClickDelete = async (taskId: string) => {
    await deteteTask(taskId)
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <div className='flex flex-col mx-3 my-5 gap-2'>
      <div className='flex flex-col justify-center items-center my-3'>
        <h1 className='text-xl'>Task Manager</h1>
      </div>
      <div className='flex flex-col gap-2'>
        <Input plasholder='New task' value={task} onChange={handleInputChange}/>
        <ButtonTask description='Salvar' onClick={createTask}/>
      </div>
      {tasks.length > 0 ? (
        tasks.map((task)=> {
          return (
            <TaskItem
              key={task._id}
              description={task.description}
              isCompleted={task.isCompleted}
              update={()=>handleTaskClick(task._id, task.isCompleted)}
              delete={()=>handleTaskClickDelete(task._id)}
            />
          )
        })
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  )
}
