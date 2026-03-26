import bcrypt from "bcrypt";
import { StatusCodes } from "http-status-pro-js";
import { usercreate } from "../model/user_model.js";

function usersignup(req, res) {
    console.log("usersignup", req.body);

    try {
        let { name, email, password } = req.body;

        
        let salt = bcrypt.genSaltSync(10);
        let hashedPassword = bcrypt.hashSync(password, salt);

        
        let data = usercreate(name, email, hashedPassword);

        if (!data) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR.code).json({
                code: StatusCodes.INTERNAL_SERVER_ERROR.code,
                message: StatusCodes.INTERNAL_SERVER_ERROR.message,
                data: null
            });
        }

        return res.status(StatusCodes.OK.code).json({
            code: StatusCodes.OK.code,
            message: "User Signup Successful",
            data: {
                name,
                email
            }
        });

    } catch (error) {
        console.log("user signup error", error);

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR.code).json({
            code: StatusCodes.INTERNAL_SERVER_ERROR.code,
            message: StatusCodes.INTERNAL_SERVER_ERROR.message,
            data: null
        });
    }
}

export default usersignup;
