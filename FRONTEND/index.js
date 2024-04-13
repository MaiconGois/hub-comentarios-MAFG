import { LoginComponent } from "./FRONTEND/src/Components/LoginComponent/LoginComponent.js";
import { CommentComponent } from "./FRONTEND/src/Components/CommentComponent/CommentComponent.js";
import { UserComponent } from "./FRONTEND/src/Components/UserComponent/UserComponent.js";
import { App } from "./FRONTEND/src/view/app.js";


App.build();
LoginComponent.run();
CommentComponent.run();
UserComponent.run();