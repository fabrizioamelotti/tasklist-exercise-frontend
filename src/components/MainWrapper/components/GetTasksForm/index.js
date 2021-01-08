import React, { useState } from 'react'

import AlertMsg from '../../../AlertMsg'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const GetTasksForm = ({ setNumberOfTasksToGet, setLoadTasks, allTasksDone, setAllTasksDone }) => {
  const ERROR_MSG = 'The value must be a positive integer number.'
  const SUCCESS_MSG = 'All tasks done, try again later.'
  const ERROR_VARIANT = 'danger'
  const SUCCESS_VARIANT = 'success'
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState(false)

  const onChangeHandler = (e) => {
    setError(false)
    setAllTasksDone(false)
    setInputValue(e.target.value)
  }
  const onSubmitHandler = (e) => {
    e.preventDefault()
    if ((Number.isInteger(Number(inputValue)) && inputValue > 0) || inputValue === '') {
      setNumberOfTasksToGet(inputValue)
      setLoadTasks(true)
      setInputValue('')
    } else {
      setError(true)
    }
  }

  return (
    <div className='row'>
      <Form onSubmit={onSubmitHandler} className='col-12 col-md-6 m-auto'>
        <Form.Group>
          <Form.Label>Number of tasks</Form.Label>
          <Form.Control 
            onChange={onChangeHandler}
            value={inputValue} 
            type='number' 
            placeholder='3'
          />
        </Form.Group>
        <Button className='mb-3' variant='primary' type='submit'>
          Get Tasks!
        </Button>
        {error && <AlertMsg alertMsg={ERROR_MSG} variant={ERROR_VARIANT} />}
        {allTasksDone && <AlertMsg alertMsg={SUCCESS_MSG} variant={SUCCESS_VARIANT} />}
      </Form>
    </div>
  )
}

export default GetTasksForm