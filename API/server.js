const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRouter = require('./src/Routes/UserRoute');

const server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());
server.use(bodyParser.json());

const CommentRouter = require('./src/Routes/CommentRoute')
server.use('/comment', CommentRouter);

const UserRouter = require('./src/Routes/UserRoute')
server.use('/user', UserRouter);



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


  
server.get("/user-comment/:userId", (req, res) => {
  const  userId  = req.params.userId;
  const query = `
  SELECT comment.id, user.username as author, comment.comment_text, comment.created_at, comment.updated_at
  FROM comment
 INNER JOIN user ON comment.userId = user.id 
 WHERE comment.userId = ?
 ORDER BY comment.updated_at DESC
    `;
  db.query(query, [userId], (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, error: "Internal server error" });
     }else if (result.length <= 0) {
      return res.status(500).json({ success: false, error: "Não tem seus comentários no bancos de dados" });
     } else {
      return res.json({ success: true, comments: result });
    }
  });
});


server.post("/comment", (req, res) => {
  const { userId, comment_text } = req.body;
  db.query(
    "INSERT INTO comment (userId, comment_text) VALUES (?, ?)",
    [userId, comment_text],
    (err, result) => {
      if (err) {
        return res
          .status(500)
          .json({ success: false, error: "Internal server error" });
      }
      res.json({ success: true });
    }
  );
});




server.listen(PORT, () => {
  console.log(`O server está rodando em http://localhost:${PORT}`);
});
