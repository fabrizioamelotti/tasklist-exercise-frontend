import React, { useEffect, useContext, useState } from 'react'

import TasksContainer from '../TasksContainer'
import Loading from '../Loading'
import getTasks from '../../services/getTasks'
import TasksContext from '../../context/TaskContext'
import { GET_TASKS_URL } from '../../constanst'
import MWErrorMsg from './components/MWErrorMsg'
import GetTasksForm from './components/GetTasksForm'

const MainWrapper = () => {  
  const { tasks, setTasks } = useContext(TasksContext)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [loadTasks, setLoadTasks] = useState(false)
  const [allTasksDone, setAllTasksDone] = useState(false)
  const [numberOfTasksToGet, setNumberOfTasksToGet] = useState('')

  useEffect(() => {
    if(loadTasks) {
      setLoading(true)
      getTasks(`${GET_TASKS_URL}${numberOfTasksToGet}`)
        .then(tasksFromApi => {
          if (tasksFromApi.length === 0) {
            setAllTasksDone(true)
          } else {
            setAllTasksDone(false)
            setTasks(tasksFromApi)
          }
          setError(false)
        })
        .catch(err => {
          setError(true)
        })
        .finally(() =>{                    
          setLoading(false)
          setLoadTasks(false)
        })
    }
  }, [setTasks, loadTasks, numberOfTasksToGet])

  if (loading) {
    return <Loading />
  } else if (Array.isArray(tasks) && tasks.length) {
    return <TasksContainer tasks={tasks} />
  } else if (error) {
    return <MWErrorMsg setLoadTasks={setLoadTasks} />
  }
  return <GetTasksForm 
            allTasksDone={allTasksDone}
            setAllTasksDone={setAllTasksDone}
            setLoadTasks={setLoadTasks} 
            setNumberOfTasksToGet={setNumberOfTasksToGet} 
          />
}

export default MainWrapper