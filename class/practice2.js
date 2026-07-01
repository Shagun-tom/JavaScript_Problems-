class Human{
    name = "Shagun";
    #age = 18; // # show private 

    sayHello(name) {
        console.log("Hello!", this.name);
    }

    canVote(age) {
        if (age < 18) {
            console.log("Cannot Vote");
        } else {
            console.log("Can Vote");
        }
    }
}

let h1 = new Human();
h1.sayHello();
h1.canVote();

console.log(h1.#age); // private variable