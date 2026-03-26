import joi from "joi";
import { StatusCodes } from "http-status-pro-js";

function usersignup(req, res, next) {
    try {
        let schema = joi.object({
            name: joi.string().trim().lowercase().min(3).max(200).required(),
            email: joi.string().trim().lowercase().min(5).max(200).email().required(),
            password: joi.string().trim().min(4).max(10).required()
        });
        let {error,value} = schema.validate(req.body);
        if(error){
            return res.status(StatusCodes.BAD_REQUEST.code).json({
                code: StatusCodes.BAD_REQUEST.code,
                message: error.details[0].message,
                data: null
            })
        }
        req.body = value;
        next();

    } catch (error) {
        console.log("user mid",error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR.code).json({
            success: false,
            message: "Internal server error",
            data: null
        });
    }
}
export default usersignup;
