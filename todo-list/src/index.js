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
    var userTodos = todos.filter(function (todo) { return todo.userId === userId; });
    return userTodos;
}
// Funzione per lanciare un errore con un messaggio
function throwError(msg) {
    throw new Error(msg);
}
// Funzione per analizzare l'input di tipo unknown
function parseInput(input) {
    if (typeof input === 'string') {
        return input; // Restituisce la stringa così com'è
    }
    else if (typeof input === 'number') {
        return String(input); // Converte il numero in una stringa
    }
    else {
        throwError("Invalid input type. Expected a string or number."); // Lancia errore se l'input non è una stringa o un numero
    }
}
// Esempio di utilizzo della funzione parseInput
try {
    var result1 = parseInput("Hello, World!");
    console.log(result1); // "Hello, World!"
    var result2 = parseInput(42);
    console.log(result2); // "42"
    // Questo causerà un errore
    var result3 = parseInput(true);
    console.log(result3);
}
catch (error) {
    console.error(error.message); // Mostra il messaggio dell'errore
}
