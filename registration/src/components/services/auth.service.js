import axios from "axios";

const API_URL = "http://localhost:8080/auth/";

class AuthService {
  
   async login({username, password}) {
    const response = await axios
          .post(API_URL + "login", {
              username,
              password
          });
      if (response.data.authenticationToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
      }
      console.log(response.data)
      return response.data;
  }

   logout() {
    localStorage.clear();
  }

   async register({username, email, password}) {
    return  await axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

 async getCurrentUser() {
    try {
      return  await JSON.parse(localStorage.getItem('user'))
    } catch (error) {
      console.log(error)
    }
}
}
export default new AuthService();