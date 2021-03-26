class Person {
    constructor(name) {
        this._name = name
    }

    get name() {
        return this._name
    }

    set name(newName) {
        return this._name = newName
    }
}

const person = new Person("Oldie")

console.log(person.name)