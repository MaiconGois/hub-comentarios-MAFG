const jwt = require('jsonwebtoken');
const db = require('../db_connect');

const LoginService = {
    authUser: (username, password) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM user WHERE username = ? AND password = ?',
                [username, password], (err, results) => {
                    if (err) {
                        reject(err);
                    } else if (results.length > 0) {
                        const user = results[0];
                        const secretKey = process.env.JWT_SECRET; // Usando variável de ambiente
                        const token = jwt.sign(user, secretKey, { expiresIn: '1h' });
                        resolve(token);
                    } else {
                        reject('Usuário ou senha inválidos');
                    }
                });
        });
    }
};

module.exports = LoginService;
