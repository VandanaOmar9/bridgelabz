import express from "express"
import mid from "./mid.js";
import res from "./res.js"; 
import createuser from "./createuser.js";
import login from "./login.js";

import update from "./update.js"; 
import updatemovie from "./movie/updatemovie.js";
import addmovie from "./movie/movie.js";
import delmovie from "./movie/delmovie.js";   

import midd1 from "./midd1.js"; 

import dotenv from "dotenv";
dotenv.config();



let app = express();
let port = process.env.PORT;
app.use(express.json());

app.post("/signup",midd1,createuser) 
app.post("/createuser",createuser)
app.post("/login",midd1,login)
app.put("/update",update)
app.post("/addmovie",addmovie)
app.delete("/delmovie",delmovie)
app.put("/updatemovie/:id",mid,updatemovie)
app.listen(port,()=>{
    console.log("connect");
})
  