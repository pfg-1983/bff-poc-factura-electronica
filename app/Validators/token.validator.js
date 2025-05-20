const jwt = require('jsonwebtoken');
const { error } = require('winston');
const keys = require('../Settings/keys')

const validateToken = ((req,res,next)=>{

    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if(!token){
        res.status(401).send({error:'Se requiere token de autorización'})
        return;
    }
    if(token.startsWith('Bearer')){
       token = token.split(' ')[1]
    }
    if(token){
        jwt.verify(token, keys.key, (error, decode) =>{
            if(error){
                return res.json({
                    message: 'toke no valido'
                })
            } else {
                req.decode = decode;
                next();
            }

        }
    )
    }
})

module.exports = {validateToken}