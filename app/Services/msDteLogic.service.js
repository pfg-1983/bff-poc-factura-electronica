const axios = require('axios').default
const {axiosConf} = require('../../config/axios')
const {CustomAxiosError} = require('../../config/Errors/axios.error')
const  {logFormat}  = require('../Helpers/Utils')

async function createDteService(req) {
    let axiosResponse = null
    
    const config = axiosConf(
        'MS_LOGICA_DTE_URL',
        'SERVICE_MS_LOGICA_DTE',
        req.headers['x-country'],
        req.headers['x-customerid'],
        req.headers['x-commerce'],
        req.headers['x-channel'],
        req.headers['x-api-version'],
        'contract/signature'
    )
   logFormat('info', 'msDteLogic.service', 'createDteService', req.headers, `Se url de servico LogicaDTE`, config.baseUrl)

    console.log('url service ' +  config.baseUrl)
    await  axios.post(`${config.baseUrl}`, req.body, config.option)
        .then((response) => {
            axiosResponse = response
        })
        .catch((error) => {
            logFormat('info', 'msDteLogic.service', 'createDteService', req.headers, `error llamada al servicio LogicaDte`, JSON.stringify(error))

            throw new CustomAxiosError(error, 'msDteLogic.service', 'createDteService')
        })
    return axiosResponse
}


module.exports = {createDteService}