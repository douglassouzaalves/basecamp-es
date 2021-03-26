//OPERADOR REST(...)

//const numbers = [1, 2, 3, 4, 5]

//const [first, second, ...rest] = numbers

//console.log(first, second, rest)

//const person = {
//    name: "Douglas",
//    age: 27,
//    height: 1.76,
//    company: "Cataline",
//}


// ...REST FOI UTILIZADO PARA IR SOMANDO OS NOVOS VALORES QUE FOREM ADICIONADOS.
//const {name, ...rest} = person
//console.log(name, rest)

//const sum = (...params) => {
//    return params.reduce((total, next) => total + next)
//}

//console.log(sum(5, 5, 10, 10, 10,))


//O SPREAD FOI UTILIZADO PARA PEGAR UM CONTEÚDO E EXPANDI-LO
const numbers1 = [1, 2, 3, 4, 5]
const numbers2 = [5, 6, 7, 8, 9, 10]

const numbers = [...numbers1, ...numbers2]

console.log(numbers)
