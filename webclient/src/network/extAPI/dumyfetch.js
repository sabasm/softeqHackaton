import axios from 'axios'
const dummy = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts/1',
  timeout: 1000
})

const dummyPost = async () => {
  let response
  try {
    response = dummy.get().then(res => res.data)
  } catch (error) {
    console.log(error)
    response = { error: 'Error on typicode server' }
  }
  return response
}

export { dummyPost }
