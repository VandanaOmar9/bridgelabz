import fs from "fs"

function delmovie(req,res){
    try{
        let movies = [];
        let{moviename, price} = req.body;
        let ob = {
            date: new Date(),moviename,price
        }
        if(fs.existsSync("movie.json")){
            let data = JSON.parse(fs.readFileSync("movie.json", "utf-8"));
            let movie = data.find((value)=> value.moviename===moviename);
            if(movie){
                return res.status(409).send("movie exist")
                
            }
            movies = data;
        }
        movies.pop(ob)
        fs.writeFileSync("movie.json", JSON.stringify(movies, null, 2)) 
        return res.status(201).send("movie deleted")
        next()

    } catch (error){
        console.log(error)
       return res.status(500).send(error)
    }
}

export default delmovie