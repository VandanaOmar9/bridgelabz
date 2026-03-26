import fs from "fs";

function createUser(req, res) {
  try {
    const { name, email, password } = req.body;
    if(!name||!email||!password){
        return res.status(400).send("All fields are required");
    }

    let user=[];
    if(fs.existsSync("Fit_user.json")){
        const data = fs.readFileSync("Fit_user.json","utf-8");
        user=JSON.parse(data);

        const isUser=user.find(a=>a.email===email);
        if(isUser){
            return res.status(409).send(" User already exists");
        }
    }
    const newUser={
        id:Date.now(),
        name,
        email,
        password,
        dailyGoal:2000,
        logs:[],
    }
    user.push(newUser);
    fs.writeFileSync("Fit_user.json",JSON.stringify(user,null,2));
        res.status(201).send("User created successfully");
        console.log("user create successfully")
    }
    catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
}

export default createUser;