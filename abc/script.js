books = []


function addBook(title, author){
    this.books.push({
        title,
        author,
        borrowed : false
    })
}

function returnBook(title){
    let book = this.books.find((b) => b.title === title)
    if(!book)    return "Book not found"
    book.borrowed = false
    return "Book returned"
}

function borrow(title){
    let book = this.books.find((b) => b.title === title)
    if(!book)    return "Book not found"
    if(book.borrowed === true)   return "Book has been borrowed by someone else"
    book.borrowed = true               //maine leli book
    return  "Book taken"
}

function boook(){
    return this.books.filter((b) => b.borrowed === false)
}

addBook("Ladwa", "Piyush")
addBook("Bhadwa", "Kunal")

console.log(boook())

let a = borrow("Ladwa")
console.log(a)


console.log(boook())

let b = returnBook("Ladwa")
console.log(b);





console.log(boook())