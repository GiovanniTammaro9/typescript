import { TODO } from './types'; 

/**
 * Funzione generica per filtrare un array di TODO in base a un criterio.
 * @param todos - L'array di TODO da filtrare.
 * @param filterFn - La funzione di filtro che restituisce un valore booleano.
 * @returns - Un nuovo array di TODO che soddisfano la condizione.
 */
function filteredTodos(todos: TODO[], filterFn: (todo: TODO) => boolean): TODO[] {
    if (!Array.isArray(todos) || typeof filterFn !== "function") {
      throw new Error("Invalid input: todos must be an array and filterFn must be a function");
    }
  
    return todos.filter(filterFn);
  }
  
  // Esporta la funzione per utilizzarla in altri file
  export { filteredTodos };
  