const db = require('../db_connect');

const CommentService = {
  getBDComments: ()=>{
    return new Promise((resolve, reject) => {
    const queryByUser = `SELECT comment.id,
                              user.username as author,
                              comment.comment_text,
                              comment.created_at,
                              comment.updated_at
                          FROM comment
                      INNER JOIN user ON comment.userId = user.id
                      ORDER BY comment.updated_at DESC;`;
  
    db.query(queryByUser, (error, results) => {
      if (error) {
        return (error.message);
      }
      return (results)
    });
  
  })

}
}




  module.exports = CommentService;