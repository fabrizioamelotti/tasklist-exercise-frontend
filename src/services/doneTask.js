import axios from 'axios'
import { MAKE_TASK_AS_DONE_URL } from '../constanst'

export default function doneTask (taskId) {
  return axios.put(MAKE_TASK_AS_DONE_URL, { _id: taskId })
}