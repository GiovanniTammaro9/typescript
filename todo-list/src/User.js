"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var types_1 = require("./types");
var User = /** @class */ (function () {
    function User(id, name, email) {
        this.todos = [];
        this.id = id;
        this.name = name;
        this.email = email;
    }
    User.prototype.addTodo = function (todo) {
        // Aggiunge il TODO all'array 'todos' dell'utente
        todo.userId = this.id; // Imposta l'ID dell'utente per il TODO
        this.todos.push(todo); // Aggiunge il TODO all'array
        console.log("Added TODO: ".concat(todo.title, " for user ").concat(this.name));
    };
    return User;
}());
exports.User = User;
var user1 = new User(1, 'John Doe', 'john@example.com');
// Creazione di un TODO
var todo1 = {
    id: Date.now(),
    title: 'Learn TypeScript',
    completed: false,
    status: types_1.TodoStatus.Pending
};
// Aggiungere il TODO all'utente
user1.addTodo(todo1);
console.log(user1.todos);
