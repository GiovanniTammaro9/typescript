export interface TODO {
    id: number;
    title: string;
    completed: boolean;
    status: TodoStatus;
    userId?: number;
    metadata?: string | object; // Proprietà opzionale metadata
  };
  
  // Interfaccia TodoWithMetadata che estende TODO
  export interface TodoWithMetadata extends TODO {
    metadata: any; // La proprietà metadata è obbligatoria in TodoWithMetadata
  };
  
  export interface User {
    id: number;
    name: string;
    email?: string; // Proprietà opzionale
    readonly todos: readonly TODO[];
  };

  export enum TodoStatus {
    Pending = "pending",
    InProgress = "in_progress",
    Completed = "completed"
  };
  