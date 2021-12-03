import http from "../axios";
import axios from 'axios'
import authHeader from './auth-header';

class AuthService {
  login(email: string, password: string) {
      console.log(process.env.API_URL + "login","process.env.API_URL + ");
      
    return axios.post("login", {
        email,
        password
      })
  }

//   logout() {
//     localStorage.removeItem("user");
//   }

//   register(username: string, email: string, password: string) {
//     return axios.post(process.env.API_URL + "signup", {
//       username,
//       email,
//       password
//     });
//   }

//   getCurrentUser() {
//     const userStr = localStorage.getItem("user");
//     if (userStr) return JSON.parse(userStr);

//     return null;
//   }
}

export default new AuthService();