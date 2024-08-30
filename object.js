
function Person(age, height, name) {
    this.age = age;
    this.height = height;
    this.name = name;
    this.hug = function() {
        console.log("here's a hug");
    }
}

var person = new Person(23, 153, "perle");
person.hug();
console.log(person.age);
