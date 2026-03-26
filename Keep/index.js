import express from "express";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import userrouter from "./src/user/router/user_router.js"
dotenv.config()
 let app = express();
  app.use(helmet())
 app.use(cors());
 app.use(express.json())
 app.use("/user", userrouter)
app.get("/", (req, res)=>{
   res.send("google  keep")
})

  let port = process.env.PORT || 8081






 app.listen(port, ()=> {
    console.log("connections ");
 })