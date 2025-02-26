import { TODO, TodoStatus } from "./types";

export class User {
    id: number;
    name: string;
    email?: string;
    todos: TODO[] = [];

    constructor(id: number, name: string, email?: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    addTodo(todo: TODO): void {
        // Aggiunge il TODO all'array 'todos' dell'utente
        todo.userId = this.id; // Imposta l'ID dell'utente per il TODO
        this.todos.push(todo); // Aggiunge il TODO all'array
        console.log(`Added TODO: ${todo.title} for user ${this.name}`);
    }

}

const user1 = new User(1, 'John Doe', 'john@example.com');

// Creazione di un TODO
const todo1: TODO = {
  id: Date.now(),
  title: 'Learn TypeScript',
  completed: false,
  status: TodoStatus.Pending
};

// Aggiungere il TODO all'utente
user1.addTodo(todo1);

console.log(user1.todos); 