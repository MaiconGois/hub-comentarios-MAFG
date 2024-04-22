const UserService = require('../services/user.services');

const UserController = {
  getUsers: (req, res) => {
    UserService.getDBUsers()
      .then((result) => {
        res.json({ success: true, users: result });
      })
      .catch((error) => {
        res.status(500).json({ success: false, error: error });
      });
  },
  getUserById: (req, res) => {
    const userId = req.params.id;
    UserService.getDBUserById(userId)
      .then((result) => {
        res.json({ success: true, user: result });
      })
      .catch((error) => {
        res.status(500).json({ success: false, error: error });
      });
  },
  updateUser: async (req, res) => {
    const userId = req.params.id;
    const updatedUserData = req.body;

    try {
      const updatedUser = await UserService.updateUser(userId, updatedUserData);
      res.json({ success: true, message: 'Usuário atualizado com sucesso', user: updatedUser });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },
};

module.exports = UserController;
