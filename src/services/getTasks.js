import axios from 'axios'

export default async function getTasks (endpoint) {
  const res = await axios.get(endpoint)
  return res.data.result
}
