import { TODO, User } from './types';

const todos: TODO[] = []; // Array di TODO vuoto
const users: User[] = []; // Array di utenti (opzionale)

function addTodo(title: string): void {
  const newTodo: TODO = {
    id: Date.now(), // Genera un ID univoco
    title,
    completed: false,
  };
  
  todos.push(newTodo); // Aggiunge il nuovo TODO all'array
  console.log(`Added TODO:`, newTodo);
}

function assignTodoToUser(todoId: number, userId: number): void {
  const todo = todos.find(todo => todo.id === todoId);
  
  if (todo) {
    todo.userId = userId;
    console.log(`Assigned user ${userId} to TODO with ID ${todoId}`);
  } else {
    console.log(`Todo with ID ${todoId} not found`);
  }
}

// Funzione per ottenere tutti i TODO di un utente specifico
function getUserTodos(userId: number): TODO[] {
  // Filtra tutti i TODO che hanno l'userId uguale al parametro passato
  const userTodos = todos.filter(todo => todo.userId === userId);
  return userTodos;
}

// Esempio di utilizzo
addTodo("Learn TypeScript");
addTodo("Practice coding");

// Creiamo un esempio di utente
const user1: User = { id: 1, name: "John Doe", email: "john.doe@example.com" };
users.push(user1);

// Assegniamo un TODO all'utente con ID 1
assignTodoToUser(todos[0].id, user1.id);
assignTodoToUser(todos[1].id, user1.id);

// Recuperiamo tutti i TODO assegnati all'utente con ID 1
const user1Todos = getUserTodos(user1.id);
console.log("Todos assigned to user 1:", user1Todos);
 // Mostra l'array todos con l'utente assegnato

 function throwError(msg: string): never {
  throw new Error(msg);
}

// Esempio di utilizzo della funzione throwError
try {
  throwError("Something went wrong!");
} catch (error) {
  console.error(error.message); // Mostra il messaggio dell'errore
}
