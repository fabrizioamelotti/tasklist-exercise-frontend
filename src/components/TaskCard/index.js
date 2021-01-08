import React from 'react'
import Card from 'react-bootstrap/Card'

import './style.css'

const TaskCard = ({ setShow, setTaskModal, task }) => {  
  const handleShow = () => {
    setTaskModal(task)
    setShow(true)
  }

  return (
    <article className='col-12 col-md-4 mb-4'>
      <Card className='task-card h-100' onClick={handleShow}>
        <Card.Body>
          <Card.Title>
            Task #: { task._id }
          </Card.Title>
          <Card.Text>
            { task.title }
          </Card.Text>
        </Card.Body>
      </Card>
    </article>
  )
}

export default TaskCard