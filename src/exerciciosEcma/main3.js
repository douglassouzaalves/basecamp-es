//const numbers = [1, 2, 3, 4, 5]

                    //acessar a const sem realizar modificação na original
//const newNumbers = numbers.map(function (number) { 
//    return number + 1
//})

                    //"consome" nossa array e reduz ao total... Exemplo abaixo:
//const total = numbers.reduce(function (total, next) {
//    return total + next
//})
//console.log(total)

//const todos = [
//    { text: "Lavar a louça", done: true},
//    { text: "Pegar o lixo", done: true},
//    { text: "Dobrar as roupas", done: true},
//]
                    //filtragem de informação.
//const doneTodos = todos.filter(function (todo) {
//    return todo.done
//})
//console.log(doneTodos)

                    //retornar apenas um valor de um array(ex)
//const find = todos.find(function (todo) {
//    return todo.text === "Dobrar as roupas"
//})
//console.log(find)

//const index = todos.findIndex(function (todo) {
//    return todo.text === "Lavar a louca"
//})
//console.log(index)


const cars = ["Audi", "Bmw", "Amarok"]

const hasAudi = cars.some(function (car) {
    return car === "Audi"
})

console.log(hasAudi)