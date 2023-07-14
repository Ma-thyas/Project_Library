const addBook = document.querySelector('.add-btn');
const logInBtn = document.querySelector('.login-btn');
const logIn = document.querySelector('.login-popup');
const logInForm = document.querySelector('.login-form');
const closeLogInBtn = document.querySelector('.cancel');
const addPopup = document.querySelector('.add-popup');
const closeAddBtn = document.querySelector('.cancel-book');
const pushBook = document.querySelector('.add-book');
const addForm = document.querySelector('.add-form');

// open and close form 
function openForm() {
    if(addPopup.style.display == "block") {
        closeAddForm();
    }
    logIn.style.display = "block";
}

function closeForm() {
    logIn.style.display= "none";
}

function openAddForm() {
    if(logIn.style.display == "block") {
        closeForm();
    }
    addPopup.style.display = "block";
} 
function resetAddForm() {
    title.value = "";
    author.value = "";
    pages.value = "";
    isRead.checked = false;
}

function closeAddForm() {
    addPopup.style.display= "none";
}

logInBtn.addEventListener('click',openForm)
closeLogInBtn.addEventListener('click',closeForm)
addBook.addEventListener('click',openAddForm)
closeAddBtn.addEventListener('click',closeAddForm)



let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author= author
    this.pages = pages
    this.read = read
}

let book01 = new Book ('Le Père Goriot','Honoré de Balzac',308, true);
let book02 = new Book (`L'étranger`,'Albert Camus',184, true);

myLibrary.push(book01);
myLibrary.push(book02);

const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const isRead = document.getElementById('readbook');

const libraryList = document.querySelector('.library-list');


function showBookInLibrary(book) {
    const newBox = document.createElement('div');
    newBox.classList.add('entry');
    newBox.setAttribute('id', myLibrary.indexOf(book));
    
    const newTitle = document.createElement('p');
    newTitle.classList.add('myentry');
    newTitle.textContent = book.title;
    
    const newAuthor = document.createElement('p');
    newAuthor.classList.add('myentry');
    newAuthor.textContent = book.author;
    
    const newPages = document.createElement('p');
    newPages.classList.add('myentry');
    newPages.textContent = `${book.pages} pages`;

    const readBtn = document.createElement('button');
    readBtn.classList.add('readbtn');
    if (book.read == false) {
        readBtn.textContent = "Not Read";
    } else {
        readBtn.textContent = "Read";
        readBtn.style.backgroundColor = "var(--background)"
    }

    readBtn.addEventListener('click', toggleRead);

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('removebtn');
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener('click',removeFromLibrary);

    libraryList.appendChild(newBox);
    newBox.appendChild(newTitle);
    newBox.appendChild(newAuthor);
    newBox.appendChild(newPages);
    newBox.appendChild(readBtn);
    newBox.appendChild(removeBtn);

}

function addBookToLibrary() {
    let book = new Book (title.value,author.value,pages.value,isRead.checked);
    myLibrary.push(book);
}

function addNewBook(e) {
    e.preventDefault();
    addBookToLibrary();
    render();
    closeAddForm();
    resetAddForm();
}

function render() {
    libraryList.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        showBookInLibrary(myLibrary[i]);
    }
}

document.addEventListener('DOMContentLoaded',render);
addForm.addEventListener('submit', addNewBook);


// remove book

function removeFromLibrary(e) {
    let getAtt = e.target.parentNode.getAttribute('id');
    myLibrary.splice(getAtt, 1);
    render()
}

// toggle read

function toggleRead(e) {
    let bookId = e.target.parentNode.id;
    if(myLibrary[bookId].read == true) {
        myLibrary[bookId].read = false;
        e.target.textContent = "Not Read";
        e.target.style.backgroundColor = "var(--nav-bar)";
        console.log(myLibrary[bookId].read);
    } else {
        myLibrary[bookId].read = true;
        e.target.textContent = "Read";
        e.target.style.backgroundColor = "var(--background)";
        console.log(myLibrary[bookId].read);
    }
}





