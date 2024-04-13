const URL_API = "http://localhost:7000/session";
import {decodeJWT} from "../../lib/decodeJWT.js"
const LoginService = {
  apiAuthUser: (user) => {
    return new Promise((resolve, reject) => {
      fetch(`${URL_API}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
          sessionStorage.setItem('user',data.token)
            resolve(data.user);
          } else {
            reject(data.error);
          }
        })
        .catch(error => {
          reject('Erro na requisição AJAX:', error);
        });
    });
  },
  getUserSession: () =>{
    const token = sessionStorage.getItem('token');
    if(token){
      const userData = decodeJWT(token);
      if(userData){
        console.log(userData);
      }
    }
  }
  
};

export { LoginService }