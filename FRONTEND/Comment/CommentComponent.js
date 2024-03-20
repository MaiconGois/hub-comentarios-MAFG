import {
  formatDate,
  gerarCorAleatorioClara,
  gerarCorAleatorioEscura,
} from "../utils.js";
import { CommentService } from "../services/commentservices.js";
import { UserService } from "../services/userservices.js";
import { Comment } from "../models/commentmodel.js";

const getInputComment = () => {
  return {
    author: document.getElementById("inputAuthor"),
    comment: document.getElementById("inputComment"),
  };
};

const setInputComment = (authorValue, commentValue) => {
  const { author, comment } = getInputComment();
  author.value = authorValue;
  comment.value = commentValue;
};

const getInputCommentValue = () => {
  return {
    author: document.getElementById("inputAuthor").value,
    comment: document.getElementById("inputComment").value,
  };
};

const submitComment = (event) => {
  event.preventDefault();
  const comment = getInputCommentValue();

  loadComment();
};

const loadComment = () => {
  UserService.getUserInfo()
    .then((userInfo) => {
      const authorName = `${userInfo.firstname}`;
      setInputComment(authorName, "");
      return CommentService.apiGetComment();
    })
    .then((result) => {
      const comments = result.map(
        (comment) =>
          new Comment(
            comment.id,
            comment.author,
            comment.comment_text,
            comment.created_at,
            comment.updated_at
          )
      );
      displayComment(comments);
    })
    .catch((error) => {
      console.error(error);
      alert(error);
    });
};

const displayComment = (comments) => {
  const divFeed = document.getElementById("comment-feed");
  divFeed.innerHTML = ``;
  comments.forEach((item) => {
    const divDisplay = document.createElement("div");
    divDisplay.className = "d-flex text-body-secondary pt-3 border-bottom";
    divDisplay.innerHTML = `
            <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>comentário</title>
                <rect width="100%" height="100%" fill= "${gerarCorAleatorioEscura()}"></rect>
                <text x="30%" y="50%" fill="${gerarCorAleatorioClara()}"dy=".3em">${item
      .getAuthor()
      .split(' ')[0].charAt(0)}</text>
            </svg>
            <p class="pb-3 mb-0 small lh-sm text-gray-dark">
                <strong class="d-block text-gray-dark">@${item.getAuthor().split(' ')[0]}
                <span class="date-style badge text-bg-secondary">${formatDate(
                  item.getCreatedAt()
                )}</span>
                </strong>
                <span class="comment">
                ${item.getComment()}
                </span>
            </p>        
        `;
    divFeed.appendChild(divDisplay);
  });
};

let _user = new User();
const CommentComponent = {
  run: () => {
    const formComentario = document.getElementById("formComment");
    formComentario.addEventListener("submit", submitComment);
    window.onload = () => {
      loadComment();
    };
  },
  params: (usr) => {
    _user = usr;
  },
};

export { CommentComponent };
