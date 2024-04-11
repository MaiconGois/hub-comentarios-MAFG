


const UserService = {
  getUsers: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM user", (error, results) => {
        if (error) {
          reject(`Error ao buscar usuário: ${error.message}`);
        } else {
          resolve({ results });
        }
      });
    });
  },
};

module.exports = UserService;