import axios from 'axios'

// Fake Online REST API for Testing and Prototyping
// Website: https://jsonplaceholder.typicode.com

const url = 'https://jsonplaceholder.typicode.com'

export default {
  getUsers: async () => {
    return await axios.get(`${url}/users`).then(response => response)
  },

  getPosts: async () => {
    return await axios.get(`${url}/posts`).then(response => response)
  },
}
