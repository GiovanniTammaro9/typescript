"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todos = []; // Array di TODO vuoto
function addTodo(title) {
    var newTodo = {
        id: Date.now(), // Genera un ID univoco
        title: title,
        completed: false,
    };
    todos.push(newTodo); // Aggiunge il nuovo TODO all'array
    console.log("Added TODO:", newTodo);
}
// Esempio di utilizzo
addTodo("Learn TypeScript");
addTodo("Practice coding");
console.log(todos); // Mostra tutti i TODO nell'array
