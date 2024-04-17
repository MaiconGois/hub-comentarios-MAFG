import { LoginComponent, setSignedUser } from "../FRONTEND/src/Components/LoginComponent/LoginComponent.js";
import { CommentComponent, loadComment } from "./src/Components/CommentComponent/CommentComponent.js";
import { UserComponent } from "../FRONTEND/src/Components/UserComponent/UserComponent.js";
import  App  from "./src/view/app.js";
import {LoginService} from "../FRONTEND/src/services/login.services.js";

const main = {
    run: () => {
        App.build();
        LoginComponent.run();
        CommentComponent.run();
        UserComponent.run();
        
    }
}
window.onload = () => {
    main.run();
    if (LoginService.isLoggedIn()) {
        setSignedUser()
    }
    
}
document.addEventListener("DOMContentLoaded", () => {
    if (LoginService.isLoggedIn()) {
        setSignedUser();
    }
    loadComment();
})

window.addEventListener("load", () => {
    if (LoginService.isLoggedIn()) {
        setSignedUser();
    }
    loadComment();
})