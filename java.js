//Nimekirja andmed
const form = document.querySelector('form');
const addTitle = document.querySelector('#title');
const addAuthor = document.querySelector('#author');
const addIbn = document.querySelector('#isbn');
// leiame tabeli keha sisu id järgi
const bookList = document.querySelector('#book-list')
//

form.addEventListener('submit', addBook)
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

    event.preventDefault();
}
function deleteTask(event){
    if(event.target.textContent == 'x'){
        if(confirm("Do you want to delete this list")){
            event.target.parentElement.remove();
        }
    }
}








