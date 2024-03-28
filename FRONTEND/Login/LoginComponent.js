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
      console.log({ message: "teste", result: result });
      const inputAuthor = document.getElementById("inputAuthor");
      inputAuthor.value = result.firstname + " " + result.lastname;
      setInputComment(`${result.firstname} ${result.lastname}`, "");
      inputAuthor.disabled = true;

      const divFeed = document.getElementById("navlogin");
      divFeed.innerHTML = ``;

      const divDisplay = document.createElement("div");
      divDisplay.innerHTML = ` <div class="dropdown mt-2" style="
      margin-left: 40px;
      width: 30px;
      height: 0px">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style="
          width: 150px;
          height: 100px">
              <div class="d-flex align-items-center">
                  <img src="https://github.com/mdo.png" alt="mdo" width="50" height="50" class="rounded-circle me-2">
                  <div>
                      <strong class="d-block text-light">@${result.username}</strong>
                      <span class="date-style badge bg-secondary"></span>
                  </div>
                  <span class="ms-2 caret"></span>
              </div>
          </button>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton">
              <li><a class="dropdown-item" href="#" id="userdata" >Meus Dados</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#" >Sair</a></li>
          </ul>
      </div>
              `;
      divFeed.appendChild(divDisplay);
      document.getElementById("userdata").addEventListener("click", userDate);
      const divUser = document.getElementById("dadosUser");
      divUser.innerHTML = ``;

      const divDisplay1 = document.createElement("div");
      divDisplay1.innerHTML = ` 

          <div id="user-data">
          <h2 id="titulo" >Meus Dados</h2>
          <table class="table table-bordered rounded" id="table">
          <thead>
            <tr>
            <th scope="col" class="text-dark">User</th>
              <th scope="col">Firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">Password</th>
            </tr>
          </thead>
          <tbody>
            <tr>
             
              <td>${result.username}</td>
              <td>${result.firstname}</td>
              <td> ${result.lastname}</td>
              <td>${result.password}</td>
            </tr>
           
          </tbody>
        </table>
              <div class="d-grid gap-2 col-6 mx-auto">
              <form id="saveButton">
                  <button type="submit" class="btn btn-primary btn-lg">Voltar</button>
</form>
              </div>
          
      </div>

              `;
    
      divUser.appendChild(divDisplay1);
    })
    .catch((error) => {
      alert(`Login inválido. Erro:${error.message}`);
    });
  console.log(user);
};

const userDate = () => {
  const dadosUser = document.getElementById("dadosUser");
  const newComponentTag = document.getElementById("form-comentario");
  const loginTag = document.getElementById("login-form");
  const feedTag = document.getElementById("feed-Comment");
  if (dadosUser.classList.contains("disabled")) {
    dadosUser.classList.remove("disabled");
    feedTag.classList.add("disabled");
    newComponentTag.classList.add("disabled");
  } else {
    dadosUser.classList.add("disabled");
    newComponentTag.classList.remove("disabled");
    feedTag.classList.remove("disabled");
  }
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
