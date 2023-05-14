import { ITodoListProps } from "../types/todoTypes";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, removeItem, toggleItem }: ITodoListProps) {
  return (
    <div>
        <ul>{todos.map(item => <TodoItem key={item.id} item={item} removeItem={removeItem} toggleItem={toggleItem} />)}</ul>
    </div>
  )
}
