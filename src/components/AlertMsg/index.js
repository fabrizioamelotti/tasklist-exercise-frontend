import React from 'react'
import Alert from 'react-bootstrap/Alert'

const AlertMsg = ({ alertMsg, variant }) => {
  return (
    <Alert className='text-center' variant={variant}>
      {alertMsg}
    </Alert>
  )
}

export default AlertMsg