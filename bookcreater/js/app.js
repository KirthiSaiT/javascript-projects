const name= document.querySelector('#name'),
    author = document.querySelector('#author'),
    button = document.querySelector('#button'),
    bookStore= document.querySelector('#bookStore'),
    myBook = new Book();

    button.addEventListener('click',(e) =>{
        if(name.value !==''&& author.value !== '')createBook();
        e.preventDefault();
    });
