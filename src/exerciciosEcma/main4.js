//ARROW FUNCTION

const todos = [
    { text: "Lavar a louça", done: true},
    { text: "Levar o lixo", done: true},
    {text: "Dobras as roupas", done: true},
]
                                //Função INLINE(arrow function)
const doneTodos = todos.filter((todo) => todo.done) //Útil para escopos pequenos.

console.log(doneTodos);

//function anything () {
//    console.log("Hello World")
//}

//anything()

const anything = () => console.log("Hello World") //útil para lógicas simples e pequenas.

//const anything = () => {( name: "Oldie")} //Para retornar um objeto com arrow function é necessário colocar dentro de ().

//function sayHello (name = "Fulano") {
//    console.log("Olá " + name)
//}

//const sayHello = (name = "Fulano") => console.log("Olá " + name)
//sayHello("Oldie")