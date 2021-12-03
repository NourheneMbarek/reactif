import axios from "axios";

let token : any;
typeof window !== 'undefined' ? token =  localStorage.getItem('token') : ''


export default axios.create({
  baseURL: '',
  headers: {
    "Content-type": "application/json"
  }})
  token ? axios.defaults.headers.common['Authorization'] = `Bearer ${token}` :
  axios.defaults.headers.common['Authorization'] = '';
   

  axios.interceptors.response.use(
    (response) => response,
    (error) =>
        Promise.reject(
            (error.response && error.response.data) || 'Something went wrong!'
        ))
