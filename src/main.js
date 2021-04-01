import { createApp } from "vue"
import Todos from "./api/todos"
import "./assets/css/main.css"

const apiTodos = new Todos()

const app = createApp({
    data() {
        return {
            todos: [],
            form: {
                text: "",
                done: false
            }
        }
    },
    async created() {
        this.fetchTodos()
    },
    methods: {
        async fetchTodos() {            //método assincrono
            this.todos = await apiTodos.index()
        },
        async createTodo() {
            const data = await apiTodos.create(this.form) //acrescentando um "todo" a lista.
            this.todos.push(data)

            this.form.text = "" //utilizado para limpar o campo de preenchimento do formulário.
            this.form.done = false //utilizado para limpar o campo de preenchimento do formulário.
        },
        async toggleTodoStatus(todo) {
            const data = await apiTodos.update({
                ... todo,
                done: !todo.done,
            })

            const index = this.todos.findIndex(({ id }) => id === data.id) //atualização de lista
            this.todos[index] = data
        },
        async destroyTodo(id) {
            await apiTodos.destroy({ id })
            
            const index = this.todos.findIndex((todo) => todo.id === id)
            this.todos.splice(index, 1)
        }
    },
})

app.mount("#app")