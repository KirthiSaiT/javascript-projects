const createBook = () => {
    
    let li = document.createElement('li'),
        nameEl = document.createElement('span'),
        authorEl = document.createElement('span');
  
    nameEl.textContent = name.value; 
    nameEl.setAttribute('class', 'name'); 
    authorEl.textContent = author.value; 
    authorEl.setAttribute('class', 'author');
    
    li.appendChild(nameEl);
    li.appendChild(authorEl);
    
    bookStore.appendChild(li);
  
    
    myBook.bName = li.innerHTML;
    myBook.bAuthor = author.value;
    
    name.value = '';
    author.value = '';
  }
