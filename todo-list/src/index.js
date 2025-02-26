"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var todos = []; // Array di TODO vuoto
var users = []; // Array di utenti (opzionale)
// Funzione per aggiungere un nuovo TODO
function addTodo(title) {
    var newTodo = {
        id: Date.now(), // Genera un ID univoco
        title: title,
        completed: false,
    };
    todos.push(newTodo); // Aggiunge il nuovo TODO all'array globale
    console.log("Added TODO:", newTodo);
    return newTodo;
}
// Funzione per aggiungere un nuovo utente
function addUser(name, email) {
    var newUser = {
        id: Date.now(),
        name: name,
        email: email,
        todos: [], // Inizialmente l'utente ha un array vuoto di TODO
    };
    users.push(newUser);
    console.log("Added user:", newUser);
    return newUser;
}
// Funzione per assegnare un TODO a un utente
function assignTodoToUser(todoId, userId) {
    var todo = todos.find(function (todo) { return todo.id === todoId; });
    var user = users.find(function (user) { return user.id === userId; });
    if (todo && user) {
        // Ricreiamo l'array `todos` dell'utente con il nuovo TODO
        var updatedUser = __assign(__assign({}, user), { todos: __spreadArray(__spreadArray([], user.todos, true), [todo], false) });
        // Rimpiazziamo l'utente esistente con il nuovo utente aggiornato
        var index = users.findIndex(function (u) { return u.id === userId; });
        if (index !== -1) {
            users[index] = updatedUser;
        }
        console.log("Assigned TODO to user:", updatedUser);
    }
    else {
        console.log("Todo or User not found");
    }
}
// Funzione per ottenere tutti i TODO di un utente specifico
function getUserTodos(userId) {
    var user = users.find(function (user) { return user.id === userId; });
    if (user) {
        return user.todos; // Restituisce l'array di TODO dell'utente
    }
    else {
        console.log("User not found");
        return [];
    }
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
// Aggiungere un nuovo TODO
addUser("John Doe", "john.doe@example.com"); // Crea un nuovo utente
addTodo("Learn TypeScript");
addTodo("Complete Project");
assignTodoToUser(todos[0].id, users[0].id); // Assegna il primo TODO all'utente appena creato
assignTodoToUser(todos[1].id, users[0].id); // Assegna il secondo TODO all'utente appena creato
console.log("Users with their Todos:", users); // Mostra l'array degli utenti con i TODO assegnati
// Esempio di utilizzo della funzione getUserTodos
var userTodos = getUserTodos(users[0].id);
console.log("User Todos:", userTodos);
// Esempio di utilizzo della funzione parseInput
var parsedInput = parseInput("Some string");
console.log("Parsed Input:", parsedInput);
// Mostra l'array todosWithMetadata con i TODO con metadata
