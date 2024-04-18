import { formatDate, randomColors } from "../../utils.js";
import { CommentService } from '../../services/comment.services.js'
import { Comment } from "../../models/comment.model.js";

const getCommentInput = () => {
    return document.getElementById('inputComment')
}
const getInputCommentValue = () => {
    return document.getElementById('inputComment').value
}
const setInputComment = (commentValue) => {
    const { comment } = getCommentInput();
    comment.value = commentValue
}
const clearCommentField = () => {
    getCommentInput().value = ''
}
const handleClick = (event) => {
event.preventDefault()
const alvo = event.target.closest('div').id.split('-')[1];
console.log(alvo)
if (event.type === 'click') {
    const isToEdit = window.confirm('Você deseja editar o comentário')
    if (isToEdit) {
        console.log('Botão esquerdo')
    }
    
} else if(event.type == 'contextmenu'){
    console.log('Botão direito')
    const isToEdit = window.confirm('Você deseja excluir o comentário?')
    if (isToEdit) {
        console.log('Botão direito')
    }
    
}


}

const setCommentField = ({firstname, lastname}) => {
    const inputAuthor = document.getElementById('inputAuthor');
    inputAuthor.value = firstname + ' ' + lastname;
    inputAuthor.style.backgroundColor = '#444'
    inputAuthor.style.color = '#FFF'
}

const submitComment = (event) => {
    event.preventDefault();

    const comment = {
        userId: null,
        comment_text: getInputCommentValue()
    };

    CommentService.apiPostComment(comment).then(result => {
        alert(result)
        clearCommentField();
        loadComment();
    }).catch((error) => {
        console.log(error)
    });
}

const loadComment = () => {
    CommentService.apiGetComment().then(result => {
        const comments = result.map(
            (comment) => new Comment(comment.id, comment.userId, comment.author, comment.comment_text, comment.created_at, comment.updated_at)
        );
        displayComment(comments)
    }).catch(error => {
        console.error(error);
        alert(error);
    })
}

const displayComment = (comments) => {
    const divFeed = document.getElementById('comment-feed');
    divFeed.innerHTML = ``
    divFeed.innerHTML = ` <h6 class="border-bottom pb-2 mb-0">Feed</h6>`
    comments.forEach(item => {
        const divDisplay = document.createElement('div');
        divDisplay.className = 'd-flex text-body-secondary pt-3 border-bottom'
        divDisplay.innerHTML = `
            <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>comentário</title>
                <rect width="100%" height="100%" fill="#${randomColors().dark}"></rect>
                <text x="35%" y="50%" fill="#${randomColors().light}"dy=".3em">${item.getAuthor().charAt(0)}</text>
            </svg>
            <p class="pb-3 mb-0 small lh-sm text-gray-dark">
                <strong class="d-block text-gray-dark">@${item.getAuthor()}
                <span class="date-style badge text-bg-secondary">${formatDate(item.getCreatedAt())}</span>
                </strong>
                <span class="comment">
                ${item.getComment()}
                </span>
            </p>        
        `
        divFeed.appendChild(divDisplay);
    })
}

const CommentComponent = {
    run: () => {
        const formComentario = document.getElementById('formComment')
        formComentario.addEventListener("submit", submitComment)

        window.onload = () => {
            loadComment();
        }
    },
}

export { CommentComponent, setInputComment, setCommentField, loadComment }