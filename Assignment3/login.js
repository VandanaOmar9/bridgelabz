import fs from 'fs';

function login(req, res, next) {
    try{
        let users = [];
        let { email, password } = req.body;

        if (fs.existsSync('user.json')){
            let user = JSON.parse(fs.readFileSync('user.json', 'utf-8'));
            let isUser = user.find(
                (value) => value.email === email && value.password === password
            );
            if(!isUser){
                res.send("invalid user");
                return;
            }
            users = user;
        }
        else{
            res.send("user not found");
            return;
        }

        res.send("login success");
        next()

    }catch(error){
        console.log(error);
        res.send(error)
    }
}
export default login;
