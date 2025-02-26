"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todos = []; // Array di TODO vuoto
var todosWithMetadata = []; // Array di TodoWithMetadata vuoto
var users = []; // Array di utenti (opzionale)
function addTodo(title, metadata) {
    var newTodo = {
        id: Date.now(), // Genera un ID univoco
        title: title,
        completed: false,
        metadata: metadata,
    };
    todos.push(newTodo); // Aggiunge il nuovo TODO all'array
    console.log("Added TODO:", newTodo);
}
function addTodoWithMetadata(title, metadata) {
    var newTodo = {
        id: Date.now(), // Genera un ID univoco
        title: title,
        completed: false,
        metadata: metadata,
    };
    todosWithMetadata.push(newTodo); // Aggiunge il nuovo TODO con metadata all'array
    console.log("Added TODO with Metadata:", newTodo);
}
// Funzione per aggiornare parzialmente un TODO usando Partial<TODO>
function updateTodo(todoId, updatedFields) {
    var todo = todos.find(function (todo) { return todo.id === todoId; });
    if (todo) {
        // Aggiorna solo le proprietà che sono state passate
        Object.assign(todo, updatedFields);
        console.log("Updated TODO:", todo);
    }
    else {
        console.log("Todo with ID ".concat(todoId, " not found"));
    }
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
// Esempio di utilizzo
addTodo("Learn TypeScript", { priority: "high", tags: ["typescript", "learning"] });
addTodo("Practice coding"); // Senza metadata
addTodo("Master TypeScript");
console.log(todos); // Mostra l'array todos con i TODO aggiunti
// Esempio di aggiornamento di un TODO
updateTodo(todos[0].id, { completed: true, title: "Learn TypeScript - Updated" }); // Solo il TODO con ID 0 verrà aggiornato
console.log(todos); // Mostra l'array todos dopo l'aggiornamento
; // Mostra l'array todosWithMetadata con i TODO con metadata
