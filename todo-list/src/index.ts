import { TODO, TodoWithMetadata, User } from './types';

const todos: TODO[] = []; // Array di TODO vuoto
const todosWithMetadata: TodoWithMetadata[] = []; // Array di TodoWithMetadata vuoto
const users: User[] = []; // Array di utenti (opzionale)

function addTodo(title: string, metadata?: string | object): void {
  const newTodo: TODO = {
    id: Date.now(), // Genera un ID univoco
    title,
    completed: false,
    metadata, // Aggiungi metadata, che può essere una stringa, un oggetto o undefined
  };

  todos.push(newTodo); // Aggiunge il nuovo TODO all'array
  console.log(`Added TODO:`, newTodo);
}

function addTodoWithMetadata(title: string, metadata: any): void {
  const newTodo: TodoWithMetadata = {
    id: Date.now(), // Genera un ID univoco
    title,
    completed: false,
    metadata, // Aggiungi metadata
  };

  todosWithMetadata.push(newTodo); // Aggiunge il nuovo TODO con metadata all'array
  console.log(`Added TODO with Metadata:`, newTodo);
}

// Funzione per aggiornare parzialmente un TODO usando Partial<TODO>
function updateTodo(todoId: number, updatedFields: Partial<TODO>): void {
  const todo = todos.find(todo => todo.id === todoId);

  if (todo) {
    // Aggiorna solo le proprietà che sono state passate
    Object.assign(todo, updatedFields);
    console.log(`Updated TODO:`, todo);
  } else {
    console.log(`Todo with ID ${todoId} not found`);
  }
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

// Esempio di utilizzo
addTodo("Learn TypeScript", { priority: "high", tags: ["typescript", "learning"] });
addTodo("Practice coding"); // Senza metadata
addTodo("Master TypeScript");

console.log(todos); // Mostra l'array todos con i TODO aggiunti

// Esempio di aggiornamento di un TODO
updateTodo(todos[0].id, { completed: true, title: "Learn TypeScript - Updated" }); // Solo il TODO con ID 0 verrà aggiornato

console.log(todos); // Mostra l'array todos dopo l'aggiornamento
;  // Mostra l'array todosWithMetadata con i TODO con metadata

