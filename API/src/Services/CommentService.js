
server.get("/comment", (req, res) => {
    const queryByUser = `SELECT comment.id,
                              user.username as author,
                              comment.comment_text,
                              comment.created_at,
                              comment.updated_at
                          FROM comment
                      INNER JOIN user ON comment.userId = user.id
                      ORDER BY comment.updated_at DESC;`;
  
    db.query(queryByUser, (err, results) => {
      if (err) {
        return res
          .status(500)
          .json({ success: false, error: "Internal server error" });
      }
      res.json({ success: true, comment: results });
    });
  });
  
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
  