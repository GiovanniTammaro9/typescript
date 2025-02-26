export interface TODO {
    id: number;
    title: string;
    completed: boolean;
    userId?: number;
    metadata?: any;
}

export interface User {
    id: number;        // id dell'utente
    name: string;      // nome dell'utente
    email?: string;    // email dell'utente (opzionale)
  }
  