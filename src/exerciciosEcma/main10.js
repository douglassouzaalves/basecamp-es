class Person {
    constructor(firstName, secondName) {
        this.firstName = firstName
        this.secondName = secondName
    }

    get fullName() {
        return Person.joinNames(this.firstName, this.secondName)
    }

    static joinNames(firstName, secondName) {
        return `${firstName} ${secondName}`
    }
}

const person = new Person("Old", "Boy")
console.log(person.fullName)