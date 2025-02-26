
import { TODO } from './types';

const todos: TODO[] = []; // Array di TODO vuoto

function addTodo(title: string): void {
  const newTodo: TODO = {
    id: Date.now(), // Genera un ID univoco
    title,
    completed: false,
  };

  todos.push(newTodo); // Aggiunge il nuovo TODO all'array
  console.log(`Added TODO:`, newTodo);
}

// Esempio di utilizzo
addTodo("Learn TypeScript");
addTodo("Practice coding");

console.log(todos); // Mostra tutti i TODO nell'array
