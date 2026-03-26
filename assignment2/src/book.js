import fs from "fs";

function book(title, author, price) {
    try {
        let books = [];

        let obj = {
            bookId: new Date(),
            title,
            author,
            price
        };

        if (fs.existsSync("books.json")) {
            let data = JSON.parse(fs.readFileSync("books.json", "utf-8"));

            let isBook = data.some(b => b.title === title);
            if (isBook) {
                return "Book already exists";
            }
            books = data;
        }

        books.push(obj);
        fs.writeFileSync("books.json", JSON.stringify(books, null, 2));
        console.log("Book created");

    } catch (error) {
        console.log(error);
    }
}

export default book;
