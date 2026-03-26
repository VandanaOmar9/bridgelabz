import Joi from "joi";
import {StatusCodes} from "http-status-pro-js";
import logger from "./logger/logger.js";
function usermidd1(req,res,next){

    try{
        let schema = Joi.object({
            name:Joi.string().trim().lowercase().min(3).max(200).required(),
            email:Joi.string().trim().lowercase().email().min(8).max(200).required(),
            password:Joi.string().trim().min(6).max(10).required()

    })
        let {error,value} = schema.validate(req.body);
        if(error){
            res.status(StatusCodes.bad_request.code).json({
                code:StatusCodes.bad_request.code,
                message:error.message,
                data:null
            })
            return;
        }
        req.body = value;
        next();


}
    catch(error){
        console.log(error);
       /*  logger("error","server erro") */
        res.status(StatusCodes.INTERNAL_SERVER_ERROR.code).json({
            code:StatusCodes.INTERNAL_SERVER_ERROR.code,
            message:StatusCodes.INTERNAL_SERVER_ERROR.message,
            data:null
        })
    }
}
export default usermidd1;
