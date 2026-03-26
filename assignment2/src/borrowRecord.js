import fs from "fs"
function borrowRecord(memberid,bookid,quantity){
    let borrowRecord =[];
    let ob={
        id:new Date(),memberid,bookid,quantity
    }
    try{
        if(fs.existsSync("books.json")&&fs.existsSync("books.json")){
            let book = JSON.parse(fs.readFileSync("books.json","utf-8"))
            let member = JSON.parse(fs.readFileSync("members.json","utf-8"))
            let bookPrice = book.find((value)=>value.bookid===bookid)
            let membertype = member.find((value)=>value.memberid===memberid)
            if(fs.existsSync("borrowRecord.json")){
                        let data = JSON.parse(fs.readFileSync("borrowRecord.json","utf-8"))
                        if (data){
                            return borrowRecord=data;
                        }
                    }
                    borrowRecord.push(ob)
                    fs.writeFileSync("borrowRecord.json",JSON.stringify(borrowRecord,null,2))
                    console.log("borrowed");
            if(membertype.membershipType=="Gold"){
                let res = bookPrice.price*quantity
                res = Math.ceil(res*15)/100
                return res
            }
            else{
                 let res = bookPrice.price*quantity
                res = Math.ceil(res*5)/100
                return res
            }
        }
    }
    catch(error){
        console.log(error);
    }
}
export default borrowRecord