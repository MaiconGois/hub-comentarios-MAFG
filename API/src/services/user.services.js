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
    updateUser: (user) => {
      return new Promise((resolve, reject) => {
        const sql = `UPDATE user SET username = ?, password = ?, firstname = ?, lastname = ?, imgLink = ? WHERE id = ?`;
        const values = [user.username, user.password, user.firstname, user.lastname, user.imgLink, user.id];
        db.query(sql, values, (error, result) => {
          if (error) {
            reject(error.message);
          }
          resolve(result);
        })
      })
    }
}

module.exports = UserService