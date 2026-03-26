import express from "express"
let port = 8080;
let app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("home page");
})

app.post("/home",(req,res)=>{
    let{id,name} = req.body;
    console.log(id,name);
    res.send(`${id} ${name}`);
})

app.listen(port,()=>{
    console.log("connect");
})