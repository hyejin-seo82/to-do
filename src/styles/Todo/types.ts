// types.ts
export interface ItodoItem {
  id: string;
  content: string;
  completed: boolean;
  editing: boolean;
}

export interface TodoState {
  todolist: ItodoItem[];
}
