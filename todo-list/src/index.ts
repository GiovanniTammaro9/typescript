import { TODO, User } from './types';

const todos: TODO[] = []; // Array di TODO vuoto
const users: User[] = []; // Array di utenti (opzionale)
const projects: Project[] = []; // Array di progetti

// Interfaccia per il progetto
interface Project {
  id: number;
  name: string;
  users: User[]; // Lista di utenti associati al progetto
  todos: TODO[]; // Lista di TODO associati al progetto
}

// Funzione per aggiungere un nuovo TODO
function addTodo(title: string): TODO {
  const newTodo: TODO = {
    id: Date.now(), // Genera un ID univoco
    title,
    completed: false,
  };

  todos.push(newTodo); // Aggiunge il nuovo TODO all'array globale
  console.log(`Added TODO:`, newTodo);
  return newTodo;
}

// Funzione per aggiungere un nuovo utente
function addUser(name: string, email?: string): User {
  const newUser: User = {
    id: Date.now(),
    name,
    email,
    todos: [], // Inizialmente l'utente ha un array vuoto di TODO
  };

  users.push(newUser);
  console.log(`Added user:`, newUser);
  return newUser;
}

// Funzione per creare un nuovo progetto
function createProject(name: string, projectUsers: User[], projectTodos: TODO[]): Project {
  const newProject: Project = {
    id: Date.now(), // Genera un ID univoco
    name,
    users: projectUsers, // Assegna gli utenti al progetto
    todos: projectTodos, // Assegna i TODO al progetto
  };

  projects.push(newProject); // Aggiunge il nuovo progetto all'array globale
  console.log(`Created new project:`, newProject);
  return newProject;
}

// Funzione per assegnare un TODO a un utente
function assignTodoToUser(todoId: number, userId: number): void {
  const todo = todos.find(todo => todo.id === todoId);
  const user = users.find(user => user.id === userId);

  if (todo && user) {
    // Ricreiamo l'array `todos` dell'utente con il nuovo TODO
    const updatedUser: User = {
      ...user,
      todos: [...user.todos, todo] // Aggiungiamo il TODO all'array immutabile
    };

    // Rimpiazziamo l'utente esistente con il nuovo utente aggiornato
    const index = users.findIndex(u => u.id === userId);
    if (index !== -1) {
      users[index] = updatedUser;
    }

    console.log(`Assigned TODO to user:`, updatedUser);
  } else {
    console.log(`Todo or User not found`);
  }
}

// Funzione per ottenere tutti i TODO di un utente specifico
function getUserTodos(userId: number): readonly TODO[] {
  const user = users.find(user => user.id === userId);
  if (user) {
    return user.todos; // Restituisce l'array di TODO dell'utente senza modificarlo
  } else {
    console.log(`User not found`);
    return [];
  }
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

// Aggiungere un nuovo TODO
addUser("John Doe", "john.doe@example.com"); // Crea un nuovo utente
addTodo("Learn TypeScript");
addTodo("Complete Project");

// Assegna i TODO all'utente
assignTodoToUser(todos[0].id, users[0].id); // Assegna il primo TODO all'utente appena creato
assignTodoToUser(todos[1].id, users[0].id); // Assegna il secondo TODO all'utente appena creato

console.log("Users with their Todos:", users); // Mostra l'array degli utenti con i TODO assegnati

// Creare un nuovo progetto con utenti e TODO
const project = createProject("TypeScript Project", users, todos);
console.log("Created Project:", project); // Mostra il progetto creato

// Esempio di utilizzo della funzione getUserTodos
const userTodos = getUserTodos(users[0].id);
console.log("User Todos:", userTodos);

// Esempio di utilizzo della funzione parseInput
const parsedInput = parseInput("Some string");
console.log("Parsed Input:", parsedInput);

