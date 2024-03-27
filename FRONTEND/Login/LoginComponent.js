import { User } from "../models/user.model.js";
import { LoginService } from "../services/login.services.js";
import { setInputComment } from "../Comment/CommentComponent.js";

const getLoginInputs = () => {
  return {
    username: document.getElementById("username"),
    password: document.getElementById("password"),
  };
};

const handleLogin = (event) => {
  event.preventDefault();

  const { username, password } = getLoginInputs();
  const userRequest = { username: username.value, password: password.value };
  const user = new User(null, username.value, password.value);

  LoginService.apiAuthLogin(userRequest)
    .then((result) => {
      console.log(result);
      user.setId(result.id);
      user.setPassword(null);
      user.setFirstname(result.firstname);
      user.setLastname(result.lastname);
      handleShowHide();
      console.log({ message: "teste", result: result });
      const inputAuthor = document.getElementById("inputAuthor");
      inputAuthor.value = result.firstname + " " + result.lastname;
      setInputComment(`${result.firstname} ${result.lastname}`, "");
      inputAuthor.disabled = true;
    })
    .catch((error) => {
      alert(`Login inválido. Erro:${error.message}`);
    });
  console.log(user);
};
const handleShowHide = () => {
  const newComponentTag = document.getElementById("form-comentario");
  const loginTag = document.getElementById("login-form");
  const userTag = document.getElementById("user-date");
  
  if (newComponentTag.classList.contains("disabled")) {
    newComponentTag.classList.remove("disabled");
    loginTag.classList.add("disabled");
    userTag.classList.add("disabled");
  } else {
    newComponentTag.classList.add("disabled");
    loginTag.classList.remove("disabled");
    userTag.classList.remove("disabled");
  }
};


const handleUserData = () => {
  const userTag = document.getElementById("user-date");
  const commentTag = document.getElementById("form-comentario");

  userTag.classList.add("disabled");
  commentTag.classList.remove("disabled");
};

const handleBack = () => {
  const userTag = document.getElementById("user-date");
  const commentTag = document.getElementById("form-comentario");

  userTag.classList.remove("disabled");
  commentTag.classList.add("disabled");
};

const LoginComponent = {
  run: () => {
    const formLogin = document.getElementById("loginForm");
    formLogin.addEventListener("submit", handleLogin);
  },
};
export { LoginComponent, handleBack, handleUserData };
