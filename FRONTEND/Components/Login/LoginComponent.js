import { User } from "../../models/user.model.js";
import { LoginService } from "../../services/login.services.js";
import { setInputComment } from "../Comment/CommentComponent.js";
import { StorageServices } from "../../services/localStorage.service.js";

const getLoginInputs = () => {
  return {
      username: document.getElementById('username'),
      password: document.getElementById('password')
  }
}


const handleLogin = (event) => {
  event.preventDefault();

  const { username, password } = getLoginInputs();

  const userRequest = { username: username.value, password: password.value };
  const user = new User(null, username.value, password.value);

  LoginService.apiAuthLogin(userRequest)
    .then((result) => {
      curretUser = new User(result);
      curretUser.setPassword(null);

      StorageServices.user.store(result);
      console.log(StorageServices.user.get());

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

      const divFeed = document.getElementById("navlogin");
      divFeed.innerHTML = ``;

      const divDisplay = document.createElement("div");
      divDisplay.innerHTML = `
        <div class="dropdown mt-2" style="margin-left: 40px;">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
            <li><a class="dropdown-item" href="#" id="userdata">Meus Dados</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#" id="logoutButton">Sair</a></li>
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
      <h2 id="titulo" class="text-center mb-4">Meus Dados</h2>
      <table class="table table-bordered rounded shadow">
        <thead class="table-dark">
          <tr>
            <th scope="col">Campo</th>
            <th scope="col">Informação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Usuário</td>
            <td>${user.getUsername()}</td>
          </tr>
          <tr>
            <td>Nome</td>
            <td>${user.getFirstname()}</td>
          </tr>
          <tr>
            <td>Sobrenome</td>
            <td>${user.getLastname()}</td>
          </tr>
          <tr>
            <td>Senha</td>
            <td>${user.getPassword()}</td>
          </tr>
        </tbody>
      </table>
      <div class="d-grid gap-2 col-6 mx-auto">
        <button id="backButton" class="btn btn-primary btn-lg">Voltar</button>
      </div>
    </div>
    
      `;
      divUser.appendChild(divDisplay1);
      document.getElementById("backButton").addEventListener("click", handleBack);
      const logoutButton = document.getElementById("logoutButton");
      logoutButton.addEventListener("click", handleLogout);
    })
    .catch((error) => {
      alert(`Login inválido. Erro:${error.message}`);
    });
  console.log(user);
};



const handleShowHide = () => {
  const newCommentTag = document.getElementById('form-comentario');
  const loginTag = document.getElementById('login-form');
  const userTag = document.getElementById('user-date')
 
  if (newCommentTag.classList.contains('disabled')) {
      newCommentTag.classList.remove('disabled');
      userTag.classList.remove('disabled');
      loginTag.classList.add('disabled');
  } else {
      newCommentTag.classList.add('disabled');
      userTag.classList.add('disabled');
      loginTag.classList.remove('disabled');
  }
}



const handleLogout = () => {
  const loginTag = document.getElementById("login-form");
  const newComponentTag = document.getElementById("form-comentario");

  loginTag.classList.remove("disabled");
  newComponentTag.classList.add("disabled");
};

const LoginComponent = {
  run: () => {
    const formLogin = document.getElementById("loginForm");
    formLogin.addEventListener("submit", handleLogin);
  },
};

export { LoginComponent, handleLogout };
