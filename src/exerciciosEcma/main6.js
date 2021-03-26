//DESESTRUTURANDO ARRAYS
//const fruits = ["Laranja", "Melancia", "Banana"]

//const [a, b] = fruits

//console.log(a, b)

//DESESTRUTURANDO OBJETOS

const person = {
    firstName: "Oldie",
    secondName: "Boy",
    age: 26,
    address: {
        city: "POA",
        region: "RS",
    },
}

const {firstName, secondName, address: {city, region}} = person

console.log(firstName, secondName, city, region)