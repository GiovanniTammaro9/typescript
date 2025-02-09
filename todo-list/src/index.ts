

import { TODO } from './types'; 

const todos: TODO[] = []; // Array di TODO vuoto


const todo: TODO = {
  id: 1,
  title: 'Learn TypeScript',
  completed: false
};

todos.push(todo); 

console.log(todos); // Stampa l'array todos con il nuovo TODO
