"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todos = []; // Array di TODO vuoto
const todosWithMetadata = []; // Array di TodoWithMetadata vuoto
const users = []; // Array di utenti (opzionale)
function addTodo(title, metadata) {
    const newTodo = {
        id: Date.now(), // Genera un ID univoco
        title,
        completed: false,
        metadata, // Aggiungi metadata, che può essere una stringa, un oggetto o undefined
    };
    todos.push(newTodo); // Aggiunge il nuovo TODO all'array
    console.log(`Added TODO:`, newTodo);
}
;
function addTodoWithMetadata(title, metadata) {
    const newTodo = {
        id: Date.now(), // Genera un ID univoco
        title,
        completed: false,
        metadata, // Aggiungi metadata
    };
    todosWithMetadata.push(newTodo); // Aggiunge il nuovo TODO con metadata all'array
    console.log(`Added TODO with Metadata:`, newTodo);
}
;
function assignTodoToUser(todoId, userId) {
    const todo = todos.find(todo => todo.id === todoId);
    if (todo) {
        todo.userId = userId;
        console.log(`Assigned user ${userId} to TODO with ID ${todoId}`);
    }
    else {
        console.log(`Todo with ID ${todoId} not found`);
    }
}
;
// Funzione per ottenere tutti i TODO di un utente specifico
function getUserTodos(userId) {
    const userTodos = todos.filter(todo => todo.userId === userId);
    return userTodos;
}
;
// Funzione per lanciare un errore con un messaggio
function throwError(msg) {
    throw new Error(msg);
}
;
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
;
// Esempio di utilizzo
addTodo("Learn TypeScript", { priority: "high", tags: ["typescript", "learning"] }); // Con oggetto come metadata
addTodo("Practice coding", "This is a practice todo"); // Con stringa come metadata
addTodo("Master TypeScript"); // Senza metadata
console.log(todos); // Mostra l'array todos con i TODO aggiunti
console.log(todosWithMetadata); // Mostra l'array todosWithMetadata con i TODO con metadata
