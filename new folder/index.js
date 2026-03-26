import express from "express"
import path from "path"

const app = express()
app.set("view engine","ejs")

app.set("views",path.join(process.cwd(),"/views"))
console.log(process.cwd())

app.use(express.urlencoded({extended:true}))


let userData = [
    {
        id:1,
        name:"Vann",
        email:"vann@123",
        gender:"female"
    },
    {
       id:2,
        name:"Vanu",
        email:"vanu@123",
        gender:"female" 
    },

    {
         id:3,
        name:"Vanu",
        email:"vanu@123",
        gender:"female" 
    },

    {
         id:4,
        name:"Vanu",
        email:"vanu@123",
        gender:"female" 
    },

    {
         id:5,
        name:"Vanu",
        email:"vanu@123",
        gender:"female" 
    },

    {
         id:6,
        name:"Vanu",
        email:"vanu@123",
        gender:"female" 
    }

]


app.get("/",(req,res)=>{
    res.send("server is running")
})
app.get("/page",(req,res)=>{
    res.render("index",{userData})
})



app.get("/user",(req,res)=>{
    res.status(200).json({userData})
})

app.post("/user",(req,res)=>{
    const{name,email} = req.body;
    console.log(name,email);

    let newUser = {
        id:userData.length+1,
        name,
        email,
    }
    userData.push(newUser);
    res.redirect("/page")
})
app.listen(3000,()=>{
    console.log("server is running")
})