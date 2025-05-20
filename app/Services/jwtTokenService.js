const jwt = require('jsonwebtoken')
const express = require('express')
const keys = require('../Settings/keys')

async function tokenJwt(){
     const data = {
            status: 'true'
        }
    const tokenJwt= jwt.sign(data, keys.key,{ expiresIn : 50})
            const response ={
                status :true,
                token:tokenJwt
            };

return response;
 } 

 module.exports ={
    tokenJwt
 }