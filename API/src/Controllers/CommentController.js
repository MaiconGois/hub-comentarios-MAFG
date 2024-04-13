const CommentService = require("../Services/CommentService");

const CommentController = {
  getComments: (req, res) => {
    CommentService.getBDComments()
      .then((result) => {
        res.json({ success: true, comment: result });
      })
      .catch((error) => {
        res
          .status(500)
          .json({
            success: false,
            error: `Internal server error: ${error.message}`,
          });
      });
  },
};
module.exports = CommentController;
