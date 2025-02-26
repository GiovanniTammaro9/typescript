"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var User_1 = require("./User"); // Importa la classe User dal file user.ts
// Array di TODO, utenti e progetti
var todos = [];
var users = [];
var projects = [];
// Funzione per aggiungere un nuovo TODO
function addTodo(title, status) {
    if (status === void 0) { status = types_1.TodoStatus.Pending; }
    var newTodo = {
        id: Date.now(), // Genera un ID univoco
        title: title,
        completed: false,
        status: status,
    };
    todos.push(newTodo); // Aggiunge il nuovo TODO all'array globale
    console.log("Added TODO:", newTodo);
    return newTodo;
}
// Funzione per aggiornare lo stato di un TODO
function updateTodoStatus(todoId, status) {
    var todo = todos.find(function (todo) { return todo.id === todoId; });
    if (todo) {
        todo.status = status;
        console.log("Updated TODO ID ".concat(todoId, " to status: ").concat(status));
    }
    else {
        console.log("Todo with ID ".concat(todoId, " not found"));
    }
}
// Funzione per creare un nuovo progetto
function createProject(name, projectUsers, projectTodos) {
    var newProject = {
        id: Date.now(),
        name: name,
        users: projectUsers,
        todos: projectTodos,
    };
    projects.push(newProject);
    console.log("Created new project:", newProject);
    return newProject;
}
// Funzione per assegnare un TODO a un utente
function assignTodoToUser(todoId, userId) {
    var todo = todos.find(function (todo) { return todo.id === todoId; });
    var user = users.find(function (user) { return user.id === userId; });
    if (todo && user) {
        user.addTodo(todo);
        console.log("Assigned TODO to user:", user);
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
// Funzione per analizzare un input di tipo unknown
function parseInput(input) {
    if (typeof input === 'string') {
        return input;
    }
    else if (typeof input === 'number') {
        return String(input);
    }
    else {
        throwError("Invalid input type. Expected a string or number.");
    }
}
// Creare utenti
var user1 = new User_1.User(1, "John Doe", "john.doe@example.com");
var user2 = new User_1.User(2, "Jane Smith", "jane.smith@example.com");
// Aggiungere TODO agli utenti utilizzando il metodo addTodo della classe User
var todo1 = addTodo("Learn TypeScript");
var todo2 = addTodo("Complete Project");
// Usare il metodo addTodo della classe User per aggiungere i TODO agli utenti
user1.addTodo(todo1);
user2.addTodo(todo2);
// Aggiungere gli utenti all'array users
users.push(user1, user2);
// Mostrare gli utenti con i loro TODO
console.log("Users with their Todos:", users);
// Aggiornare lo stato di un TODO
updateTodoStatus(todo1.id, types_1.TodoStatus.Completed);
// Creazione di un progetto con utenti e TODO
var project = createProject("TypeScript Project", [user1, user2], [todo1, todo2]);
console.log("Created Project:", project);
// Utilizzo della funzione getUserTodos
var userTodos = getUserTodos(user1.id);
console.log("User Todos:", userTodos);
// Utilizzo della funzione parseInput
var parsedInput = parseInput("Some string");
console.log("Parsed Input:", parsedInput);
