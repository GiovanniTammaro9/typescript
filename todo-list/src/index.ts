import { TODO, TodoStatus } from "./types";
import { User } from "./User"; // Importa la classe User dal file user.ts

// Array di TODO, utenti e progetti
const todos: TODO[] = [];
const users: User[] = [];
const projects: Project[] = [];

interface Project {
  id: number;
  name: string;
  users: User[]; // Lista di utenti associati al progetto
  todos: TODO[]; // Lista di TODO associati al progetto
}



// Funzione per aggiungere un nuovo TODO
function addTodo(title: string, status: TodoStatus = TodoStatus.Pending): TODO {
  const newTodo: TODO = {
    id: Date.now(), // Genera un ID univoco
    title,
    completed: false,
    status,
  };

  todos.push(newTodo); // Aggiunge il nuovo TODO all'array globale
  console.log(`Added TODO:`, newTodo);
  return newTodo;
}

// Funzione per aggiornare lo stato di un TODO
function updateTodoStatus(todoId: number, status: TodoStatus): void {
  const todo = todos.find(todo => todo.id === todoId);
  
  if (todo) {
    todo.status = status;
    console.log(`Updated TODO ID ${todoId} to status: ${status}`);
  } else {
    console.log(`Todo with ID ${todoId} not found`);
  }
}

// Funzione per creare un nuovo progetto
function createProject(name: string, projectUsers: User[], projectTodos: TODO[]): Project {
  const newProject: Project = {
    id: Date.now(),
    name,
    users: projectUsers,
    todos: projectTodos,
  };

  projects.push(newProject);
  console.log(`Created new project:`, newProject);
  return newProject;
}

// Funzione per assegnare un TODO a un utente
function assignTodoToUser(todoId: number, userId: number): void {
  const todo = todos.find(todo => todo.id === todoId);
  const user = users.find(user => user.id === userId);

  if(todo && user) {
    user.addTodo(todo);
    console.log(`Assigned TODO to user:`, user);

  }else {
    console.log("Todo or User not found");
  }

}

 

 

// Funzione per ottenere tutti i TODO di un utente specifico
function getUserTodos(userId: number): readonly TODO[] {
  const user = users.find(user => user.id === userId);
  if (user) {
    return user.todos; // Restituisce l'array di TODO dell'utente
  } else {
    console.log(`User not found`);
    return [];
  }
}

// Funzione per lanciare un errore con un messaggio
function throwError(msg: string): never {
  throw new Error(msg);
}

// Funzione per analizzare un input di tipo unknown
function parseInput(input: unknown): string {
  if (typeof input === 'string') {
    return input;
  } else if (typeof input === 'number') {
    return String(input);
  } else {
    throwError("Invalid input type. Expected a string or number.");
  }
}

// Creare utenti
const user1 = new User(1, "John Doe", "john.doe@example.com");
const user2 = new User(2, "Jane Smith", "jane.smith@example.com");

// Aggiungere TODO agli utenti utilizzando il metodo addTodo della classe User
const todo1 = addTodo("Learn TypeScript");
const todo2 = addTodo("Complete Project");

// Usare il metodo addTodo della classe User per aggiungere i TODO agli utenti
user1.addTodo(todo1);
user2.addTodo(todo2);

// Aggiungere gli utenti all'array users
users.push(user1, user2);

// Mostrare gli utenti con i loro TODO
console.log("Users with their Todos:", users);

// Aggiornare lo stato di un TODO
updateTodoStatus(todo1.id, TodoStatus.Completed);

// Creazione di un progetto con utenti e TODO
const project = createProject("TypeScript Project", [user1, user2], [todo1, todo2]);
console.log("Created Project:", project);

// Utilizzo della funzione getUserTodos
const userTodos = getUserTodos(user1.id);
console.log("User Todos:", userTodos);

// Utilizzo della funzione parseInput
const parsedInput = parseInput("Some string");
console.log("Parsed Input:", parsedInput);

