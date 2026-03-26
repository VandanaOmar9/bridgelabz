import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
 let app = express();
 app.use(cors())
 let port = process.env.PORT || 8000

 app.use(express.json());

 app.get("/", (req, res)=>{
   let a = "class h"

   let ob = {
    "id": 1770258770390,
    "name": "vandana 123",
    "email": "vandana@gmail.com",
   }
   res.render("index", {name:a, student:ob})
 })
 app.set('view engine', 'ejs');

 app.listen(port, ()=>{
    console.log("connect server");
 })