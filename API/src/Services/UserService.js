const db = require('../db_connect');


const UserService = {
  getBDUsers: () => {
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
  getBDUsersById(id) {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM user WHERE id =?", [id], (error, results) => {
        if (error) {
          reject( error.message);
        }if (results.length > 0) {
          resolve( results );
          
        } else {
         reject("No results found");
        }
      });
    });
  }
};

module.exports = UserService;