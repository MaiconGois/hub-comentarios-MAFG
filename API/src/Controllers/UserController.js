const UserService = require('../Service/UserService');


const UserController ={
    getUsers: (req, res) =>{
        UserService.getBDUsers().
        then(result => {
            res.json({success: true, users: result})
        }).catch(err => {
            res.status(500).json({success: false, error: `Internal server error: ${err.message}`})
        })
    },
    getUsersById: (req, res) =>{
        const userId = req.params.id;
        UserService.getUsersById(userId).
        then(result => {
            res.json({success: true, users: result})
        }).catch(err => {
            res.status(500).json({success: false, error: `Internal server error: ${err.message}`})
        })
    }
}

module.exports = UserController;