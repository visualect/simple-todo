export interface IContextType {
  deleteItem: (id: string) => void;
  toggleItem: (id: string) => void;
  addItem: (newItem: ITodoItem) => void;
}
