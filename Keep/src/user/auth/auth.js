import jwt from "jsonwebtoken"
import { StatusCodes } from "http-status-pro-js"
import dotenv, { config } from "dotenv"
dotenv.config()
function auth (req,res,next){
    try {
        let authotication = req.authorization;
        if(!authotication || !authotication.startsWith("Bearer "))
            res.status(StatusCodes.BAD_REQUEST.code).json({
                code:StatusCodes.BAD_REQUEST.code,
                message:"Invalid Authentication",
                data:null
            })
        let token = authotication.split(" ")[1];
        let decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
        req.user = userDAta.id;
        next();

       } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR.code).json({
                code:StatusCodes.INTERNAL_SERVER_ERROR.code,
                message:StatusCodes.INTERNAL_SERVER_ERROR.message,
                data:null

        })
}
}