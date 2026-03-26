import fs from 'fs';
import { StatusCodes } from 'http-status-pro-js';
import bcrypt from 'bcrypt';


function res(req, res, next) {
    try{
        let users = [];
        let{name,email,password}= req.body;
        
       
        if (fs.existsSync('user.json')){
            let user = JSON.parse(fs.readFileSync('user.json', 'utf-8'));
            let isUser = user.find((value) => value.email === email);
            if(isUser){
                res.send("user exists");
                return;
            }
            users = user;
        }

        let salt = bcrypt.genSaltSync(10);
        let haspassword = hashSync(password,salt);

        let ob = {
              id:Date.now(),
              name, email, password:haspassword

        }

        users.push(ob)
        fs.writeFileSync('user.json', JSON.stringify(users,null,2))

        res.send("user created")
        next()
       

    }catch(error){
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR.code).json({
        code:StatusCodes.INTERNAL_SERVER_ERROR.code,
        massage:StatusCodes.INTERNAL_SERVER_ERROR.code,
        data:null
       })
        
    }
}
export default res;