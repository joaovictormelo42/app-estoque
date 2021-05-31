import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3001/",
})

/* Teste_001
export default axios.create({
  baseURL: "http://localhost:3001/",
});
*/

export default api;