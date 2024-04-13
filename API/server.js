const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors());

const CommentRouter = require('./src/Routes/CommentRoute')
server.use('/comment', CommentRouter);

const UserRouter = require('./src/Routes/UserRoute')
server.use('/user', UserRouter);

const LoginRouter = require('./src/Routes/LoginRoute')
server.use('/session', LoginRouter);



const PORT = 7000;


server.get('/',(req, res) => {
res.send(`
<h1>Você Perdeu 50.000.000,00 de dolares</h1>
<ul>
<li><a href="http://localhost:7000/comment">GET: TODOS COMENTÁRIO</li>
<li><a href="http://localhost:7000/user">GET: TODOS OS USUÁRIOS</li>
<li><a href="http://localhost:7000/user-comment/6">GET: LISTA DOS SEUS COMENTÁRIOS</li>
</ul>
`);
})


server.listen(PORT, () => {
  console.log(`O server está rodando em http://localhost:${PORT}`);
});
