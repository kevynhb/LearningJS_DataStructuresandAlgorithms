class Book {
    constructor(title, pages, isbn) {
        this.title = title
        this.pages = pages
        this.isbn = isbn
    }

    printIsbn() {
        console.log(this.isbn)
    }
}

let book = new Book('Title', 'pag', 'isbn')
console.log(book.title)

book.title = 'new title'
console.log(book.title)

//----------------------------------
// classe filha 
class ITBook extends Book {
    constructor(title, pages, isbn, technology) {
        super(title, pages, isbn) // palavra reservada "super" referencia o constructor da superclasse 'Book'
        this.technology = technology // implementando novo método na classe filha
    }

    printTechnology() {
        console.log(this.technology)
    }
}

let jsBook = new ITBook('Learning JS Algorithms', '200', '1234567890', 'javaScript')
console.log(jsBook.title)
console.log(jsBook.printTechnology())