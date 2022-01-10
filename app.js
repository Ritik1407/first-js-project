console.log("hi everyone");

function Book(name,author,type){
    this.name = name;
    this.author = author;
    this.type =type;
    }


function Display(){
    
    
}

Display.prototype.add = function(book){
    let tableBody = document.getElementById('tableBody');
    let html = `<tr>
 <td>${book.name}</td>
<td>${book.author}</td>
<td>${book.type}</td>
`;
    tableBody.innerHTML += html;
}
Display.prototype.clear= function(){
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit',libraryFormSubmit); 
 
function libraryFormSubmit(e){
     e.preventDefault();
    
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    
     let fiction= document.getElementById('fiction');
    let cooking= document.getElementById('cooking');
    let programming= document.getElementById('programming');
    let type;
    
    
    if(fiction.checked){
        type= fiction.value;
    }
   else if(programming.checked){
        type= programming.value;
    }
    else if(cooking.checked){
        type= cooking.value;
    }
    let book = new Book(name,author,type);
    console.log(book);
    
    let display = new Display();
    display.add(book);
    display.clear();
    
    
}