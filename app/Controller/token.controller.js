const jwt = require('jsonwebtoken')
const tokenService = require('../Services/jwtTokenService')
async function tokenController(req, res, next) {
    if(req.body.user == 'poc' && req.body.pass =='123456'){
       
        const tokenJwt = await tokenService.tokenJwt()
        res.status(200).send(tokenJwt) 
    } else{
          res.json({
            status :false,
            token:'usuario no autorizado'
        });
    }
    
}

module.exports ={
    tokenController
}