const UserService = require('../Service/UserService');


const UserController ={
    getUsers: (req, res) =>{
        UserService.getUsers().
        then(result => {
            res.json({success: true, users: result})
        }).catch(err => {
            res.status(500).json({success: false, error: `Internal server error: ${error}`})
        })
    }
}

module.exports = UserController;