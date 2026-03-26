import fs from  "fs";
import { StatusCodes } from "http-status-pro-js";
function updatemovie(req, res) {
  try {
    const { id } = req.params;        
    const { name,ticketprice } = req.body;  
    console.log(req.body);
    console.log(req.params);

    if (!ticketprice || !name) {
      return res.status(400).send("ticketprice and name are required");
    }

    if (!fs.existsSync("movie.json")) {
      return res.send(StatusCodes.not_found);
    }

    const movie = JSON.parse(fs.readFileSync("movie.json", "utf-8"));

    const movieIndex = users.findIndex(user => movie.id == id);

    if (movieIndex === -1) {
      return res.status(404).send("movie not found");
    }

    
    movies[movieIndex].id = id;
    movies[movieIndex].name = name;

   
    fs.writeFileSync("movie.json", JSON.stringify(movies, null, 2));

    res.status(200).send("movie updated successfully");

  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
}

export default updatemovie