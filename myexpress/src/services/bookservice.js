const mongojs = require('mongojs')
//mongojs('connectionString') ; incase localhost /default port is taken automaticall
const db = mongojs('booksdb')
const books = db.collection('books')

class BookService {
    constructor() {

    }
    findAll() {
        return new Promise((resolve, reject) => {
            db.books.find((err, docs) => {
                if (err) {   
                    reject(err)
                }
                resolve(docs);
            });
        });
    }
}
module.exports = new BookService();