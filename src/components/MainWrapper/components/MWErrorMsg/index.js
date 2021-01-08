import React from 'react'

import AlertMsg from '../../../AlertMsg'
import Button from 'react-bootstrap/Button'

const MWErrorMsg = ({ setLoadTasks }) => {
  const loadTasksHandler = () => setLoadTasks(true)
  const ALERT_MSG = 'Cannot get tasks'
  const VARIANT = 'danger'

  return (
    <React.Fragment>
      <AlertMsg alertMsg={ALERT_MSG} variant={VARIANT} />
      <div className='text-center'>
        <Button onClick={loadTasksHandler}>
          Try again.
        </Button>
      </div>
    </React.Fragment>
  )
}

export default MWErrorMsg