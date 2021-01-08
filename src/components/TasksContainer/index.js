import React, { useState } from 'react'

import TaskModal from '../TaskModal'
import TaskCard from '../TaskCard'

const TaskContainer = ({ tasks }) => {
  const [taskModal, setTaskModal] = useState({})  
  const [show, setShow] = useState(false)
  
  return (
    <section className='row'>
      {
        tasks.map(task => 
          <TaskCard 
            key={task._id}
            task={task}
            setTaskModal={setTaskModal}
            setShow={setShow}
          />
        )
      }
      <TaskModal
        taskId={taskModal._id}
        taskTitle={taskModal.title}
        show={show}
        setShow={setShow}
      />
    </section>
  )
}

export default TaskContainer