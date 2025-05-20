const  {logFormat}  = require('../Helpers/Utils')
const msLogica = require('../Services/msDteLogic.service')

async function generateDte(req, res, next) 
{    try {
            logFormat('info', 'dte.controller', 'generateDte', req.headers, `Se recibe los encabezados (headers) desde la solicitud (request)`, JSON.stringify(req.headers))
            const {data: dteResponseData} = await msLogica.createDteService(req)
            logFormat('info', 'dte.controller', 'generateDte', req.headers, `Desde la función createDteService se obtiene el estado de la creación de una DTE`, dteResponseData)
            res.status(200).send(dteResponseData) 
    } catch (error) {
            logFormat('error', error.file, error._function, req.headers, error?.message, error.stack)
            next(error)
    }
   

}
module.exports = {generateDte}