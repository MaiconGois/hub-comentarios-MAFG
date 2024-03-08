let data = [];

const submitComment = (event) => {
  event.preventDefault();

  const author = inputAuthor.value;
  const comment = inputComment.value;
  const dates = new Date();
  data.push({ author: author, comment: comment, dates: dates });
  console.log(data);

  loadComment();
};

const formComentario = document.getElementById("formComment");
formComentario.addEventListener("submit", submitComment);

const loadComment = () => {
  // Dados carregados da API
  if (data) {
    displayComment();
  }
};

const displayComment = () => {
  const divFeed = document.getElementById("comment-feed");
  divFeed.innerHTML = ``;

  data.forEach((item) => {
    const divDisplay = document.createElement("div");
    divDisplay.className = "text-body-secondary";
    divDisplay.innerHTML = `
      
    <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
    xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
    preserveAspectRatio="xMidYMid slice" focusable="false">
    <title>Comment</title>
   
</svg>
<p class="pb-0 mb-0 small lh-sm border-bottom " id="showComment">
    <strong class="d-block text-gray-dark">@${item.author}</strong>
    ${item.comment}
    <small class =" d-block text-end">${item.dates.getDate()} de ${item.dates.toLocaleDateString(
      "pt-BR",
      { month: "long" }
    )} de ${item.dates.getFullYear()} às ${item.dates.getHours()}:${item.dates.getMinutes()}</small>
</p>


`;
    divFeed.appendChild(divDisplay);
  });
};

