import Todos from "./api/todos"

async function exec() {
    const todos = new Todos()
    
    const responde = await todos.update({id: 2, text: "Estudar nos finais de semana", done: true})
    console.log(responde)
}

exec()