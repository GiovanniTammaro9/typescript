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
  const userTodos = todos.filter(todo => todo.userId === userId);
  return userTodos;
}

// Funzione per lanciare un errore con un messaggio
function throwError(msg: string): never {
  throw new Error(msg);
}

// Funzione per analizzare l'input di tipo unknown
function parseInput(input: unknown): string {
  if (typeof input === 'string') {
    return input; // Restituisce la stringa così com'è
  } else if (typeof input === 'number') {
    return String(input); // Converte il numero in una stringa
  } else {
    throwError("Invalid input type. Expected a string or number."); // Lancia errore se l'input non è una stringa o un numero
  }
}

// Esempio di utilizzo della funzione parseInput
try {
  const result1 = parseInput("Hello, World!");
  console.log(result1); // "Hello, World!"
  
  const result2 = parseInput(42);
  console.log(result2); // "42"
  
  // Questo causerà un errore
  const result3 = parseInput(true);
  console.log(result3);
} catch (error) {
  console.error(error.message); // Mostra il messaggio dell'errore
}

