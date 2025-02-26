"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todos = []; // Array di TODO vuoto
const users = []; // Array di utenti (opzionale)
function addTodo(title) {
    const newTodo = {
        id: Date.now(), // Genera un ID univoco
        title,
        completed: false,
    };
    todos.push(newTodo); // Aggiunge il nuovo TODO all'array
    console.log(`Added TODO:`, newTodo);
}
function assignTodoToUser(todoId, userId) {
    // Trova il TODO con l'ID corrispondente
    const todo = todos.find(todo => todo.id === todoId);
    if (todo) {
        // Assegna l'utente al TODO
        todo.userId = userId;
        console.log(`Assigned user ${userId} to TODO with ID ${todoId}`);
    }
    else {
        console.log(`Todo with ID ${todoId} not found`);
    }
}
// Esempio di utilizzo
addTodo("Learn TypeScript");
addTodo("Practice coding");
const user1 = { id: 1, name: "John Doe", email: "john.doe@example.com" };
users.push(user1);
// Assegniamo un TODO all'utente con ID 1
assignTodoToUser(todos[0].id, user1.id);
console.log(todos); // Mostra l'array todos con l'utente assegnato
