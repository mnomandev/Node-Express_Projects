const {CustomAPIError} = require('../errors/custom-error'); 
const errorHandlerMiddleware = (err, req, res, next) => {
    if(err instanceof CustomAPIErro){
        return res.status(err.statusCode).json({msg: err.message})
    }
    return res.status(500).json({msg: `Something went wrong, please try again later`})
}


module.exports = errorHandlerMiddleware;