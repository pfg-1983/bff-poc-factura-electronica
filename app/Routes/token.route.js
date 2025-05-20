const router = require('express').Router()
const tokenController = require('../Controller/token.controller')


router.post(
    '/',
      //  #swagger.tags = ['TOKEN']
    //  #swagger.path = '/token
    /*  
    #swagger.requestBody = {
        required: true,
        schema: { $ref: "#/definitions/ReqTokenContract" }
     }
    */
    //  #swagger.description = 'POC generación facturas electronica - token'
    /*  #swagger.responses[200] = { 
          content: {
               "application/json": {
                    schema:{
                         $ref: "#/definitions/tokenOK" 
                    }
               }
          },
        description: 'Respuesta en caso de creación correcta'
        }
    */
    tokenController.tokenController
)

module.exports = router
