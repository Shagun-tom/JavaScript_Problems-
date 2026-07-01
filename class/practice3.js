class Animal{
    #name = "kitty";
    #age = 34;

    getname() {
        return this.name;
    }
    setname(name) {
        this.name = name;
    }
}

let a = new Animal();
// console.log(a.name)  - error
a.setname = "Vashu";
console.log(a.getname); 