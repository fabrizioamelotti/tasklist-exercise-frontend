import React, { useContext, useState } from 'react'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import doneTask from '../../services/doneTask'
import TasksContext from '../../context/TaskContext'
import AlertMsg from '../AlertMsg'
import Loading from '../Loading'

const TaskModal = ({ taskId, taskTitle, show, setShow }) => {
  const JUSTIFY_CONTENT_CENTER = 'justify-content-center'
  const ALERT_MSG = 'An error has occurred!'
  const VARIANT = 'danger'
  const { tasks, setTasks } = useContext(TasksContext)
  const [error, setError] = useState(false)  
  const [loading, setLoading] = useState(false)
  
  const handleClose = () => {
    setShow(false)
    setError(false)
  }
  const handleDone = () => {
    setError(false)
    setLoading(true)
    doneTask(taskId)
      .then(res => {            
        const remainingTasks = tasks.filter(t => t._id !== taskId)
        setShow(false)
        setTasks(remainingTasks)
      })
      .catch(err => {
        setError(true)
      })
      .finally(() => setLoading(false))
  }
  
  return (
    <Modal animation={false} show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Task #: {taskId}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{taskTitle}</Modal.Body>       
      <Modal.Footer className={loading && JUSTIFY_CONTENT_CENTER}>
      { 
        loading ? 
        <Loading /> :
        <React.Fragment>
          <Button variant='primary' onClick={handleDone}>
            Done
          </Button>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </React.Fragment> 
      }
      </Modal.Footer>
      {error && <AlertMsg alertMsg={ALERT_MSG} variant={VARIANT} />}
    </Modal>
  )
}

export default TaskModal