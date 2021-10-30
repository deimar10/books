//Nimekirja andmed
const form = document.querySelector('form');
const addTitle = document.querySelector('#title');
const addAuthor = document.querySelector('#author');
const addIbn = document.querySelector('#isbn');
// leiame tabeli keha sisu id järgi
const bookList = document.querySelector('#book-list')
//

form.addEventListener('submit', addBook);
bookList.addEventListener('click', deleteTask);

function addBook(event){
    const title = addTitle.value;
    const author = addAuthor.value;
    const isbn = addIbn.value;
    // tuleb luua mitte li vaid tr element
    let tr = document.createElement('tr');
    // loome  yks td title sisuga
    ////
    let td = document.createElement('tr');
    let text = document.createTextNode(title);
    td.appendChild(text);
    tr.appendChild(td);

    text = document.createTextNode(author);
    td.appendChild(text);
    tr.appendChild(td);
    text = document.createTextNode(isbn);
    td.appendChild(text);
    tr.appendChild(td);
    // analoogselt //// vahel kirjutatud koodiga saab lisada ka ülejäänud väärtused
    // ja lisame tabelisse loodud tr

    bookList.appendChild(tr);

    const link = document.createElement('a');
    link.setAttribute('href', '#')
    link.className = 'secondary-content';
    link.appendChild(document.createTextNode('x'));
    td.appendChild(link);
    // save task
    addTitleToLocalStorage(title)
    addAuthorToLocalStorage(author)
    addIsbnToLocalStorage(isbn)
    // clear input value
    addTitle.value = '';
    addAuthor.value = '';
    addIbn.value = '';
    // form submit event control
    event.preventDefault();
}
function deleteTask(event){
    if(event.target.textContent == 'x'){
        if(confirm("Do you want to delete this list")){
            event.target.parentElement.remove();
            // localstoragest kustutamine
            title = event.target.parentElement.firstChild.textContent;
            deleteTitleFromLocalStorage(title);
            author = event.target.parentElement.firstChild.textContent;
            deleteAuthorFromLocalStorage(author);
            isbn = event.target.parentElement.firstChild.textContent;
            deleteIbnFromLocalStorage(isbn);
        }
    }
}
function addTitleToLocalStorage(title){
    let books;
    if(localStorage.getItem('books') === null){
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'));
    }
    books.push(title);
    localStorage.setItem('books', JSON.stringify(books));
}
function addAuthorToLocalStorage(author){
    let books;
    if(localStorage.getItem('books') === null){
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'));
    }
    books.push(author);
    localStorage.setItem('books', JSON.stringify(books));
}
function addIsbnToLocalStorage(isbn){
    let books;
    if(localStorage.getItem('books') === null){
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'));
    }
    books.push(isbn);
    localStorage.setItem('books', JSON.stringify(books));
}
function deleteTitleFromLocalStorage(title){
    let books;
    if (localStorage.getItem('books') === null){
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'));
    }
    books.forEach(function (booksElement, index){
        if (booksElement === title){
            books.splice(index, 1);
        }
    });
    localStorage.setItem('books', JSON.stringify(books));
    console.log(books)
}
function deleteAuthorFromLocalStorage(author){
    let books;
    if (localStorage.getItem('books') === null){
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'));
    }
    books.forEach(function (booksElement, index){
        if (booksElement === author){
            books.splice(index, 1);
        }
    });
    localStorage.setItem('books', JSON.stringify(books));
    console.log(books)
}
function deleteIbnFromLocalStorage(isbn){
    let books;
    if (localStorage.getItem('books') === null){
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'));
    }
    books.forEach(function (booksElement, index){
        if (booksElement === isbn){
            books.splice(index, 1);
        }
    });
    localStorage.setItem('books', JSON.stringify(books));
    console.log(books)
}











