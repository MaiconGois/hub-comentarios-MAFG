const jwt = require('jsonwebtoken');

const LoginController = {
    login: (req,res)=>{
        const {username,password} = req.body;
        LoginService.login(username,password).then((token)=>{
            res.cookie('token', token,{httpOnly: true});
            res.json({success: true, token: token});
        })
    }
}