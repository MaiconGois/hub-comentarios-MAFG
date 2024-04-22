const db = require('../db_connect');

const UserService = {
    getDBUsers: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM user', (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            })
        })
    },
    getDBUserById(id) {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM user WHERE id =?', [id], (error, result) => {
                if (error) {
                    reject(error.message);
                }
                if (result.length > 0) {
                    resolve(result);

                }
            })
        })
    },
    updateUser: (userId, updatedUserData) => {
        return new Promise((resolve, reject) => {
          const sql = `UPDATE user SET username = ?, password = ?, firstname = ?, lastname = ?, imgLink = ? WHERE id = ?`;
          const values = [updatedUserData.username, updatedUserData.password, updatedUserData.firstname, updatedUserData.lastname, updatedUserData.imgLink, userId];
    
          db.query(sql, values, (error, result) => {
            if (error) {
              reject(error.message);
            }
            if (result.affectedRows > 0) {
              UserService.getDBUserById(userId)
                .then((updatedUser) => {
                  resolve(updatedUser);
                })
                .catch((err) => {
                  reject(err);
                });
            } else {
              reject('Usuário não encontrado ou nenhum dado foi alterado');
            }
          });
        });
      },
}

module.exports = UserService;