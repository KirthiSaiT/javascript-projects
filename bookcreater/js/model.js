class Book{
    constructor(){
        this.name='';
        this.author='';

    }

    set bName(name){
        this.name=name;

    }

    set bAuthor(author){
        this.author=author;
    }

    get bName(){
        return this.name;

    }

    get bAuthor(){
        return this.author;
    }
}
