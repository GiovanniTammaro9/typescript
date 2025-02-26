"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todos = []; // Array di TODO vuoto
var users = []; // Array di utenti (opzionale)
function addTodo(title) {
    var newTodo = {
        id: Date.now(), // Genera un ID univoco
        title: title,
        completed: false,
    };
    todos.push(newTodo); // Aggiunge il nuovo TODO all'array
    console.log("Added TODO:", newTodo);
}
function assignTodoToUser(todoId, userId) {
    var todo = todos.find(function (todo) { return todo.id === todoId; });
    if (todo) {
        todo.userId = userId;
        console.log("Assigned user ".concat(userId, " to TODO with ID ").concat(todoId));
    }
    else {
        console.log("Todo with ID ".concat(todoId, " not found"));
    }
}
// Funzione per ottenere tutti i TODO di un utente specifico
function getUserTodos(userId) {
    // Filtra tutti i TODO che hanno l'userId uguale al parametro passato
    var userTodos = todos.filter(function (todo) { return todo.userId === userId; });
    return userTodos;
}
// Esempio di utilizzo
addTodo("Learn TypeScript");
addTodo("Practice coding");
// Creiamo un esempio di utente
var user1 = { id: 1, name: "John Doe", email: "john.doe@example.com" };
users.push(user1);
// Assegniamo un TODO all'utente con ID 1
assignTodoToUser(todos[0].id, user1.id);
assignTodoToUser(todos[1].id, user1.id);
// Recuperiamo tutti i TODO assegnati all'utente con ID 1
var user1Todos = getUserTodos(user1.id);
console.log("Todos assigned to user 1:", user1Todos);
// Mostra l'array todos con l'utente assegnato
function throwError(msg) {
    throw new Error(msg);
}
// Esempio di utilizzo della funzione throwError
try {
    throwError("Something went wrong!");
}
catch (error) {
    console.error(error.message); // Mostra il messaggio dell'errore
}
