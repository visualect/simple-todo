import { ITodoItemProps } from "../types/todoTypes";

export default function TodoItem({item, removeItem, toggleItem}: ITodoItemProps) {

    const handleDelete = (id: string) => {
        removeItem(id)
    }

    const handleToggle = (id: string) => {
        toggleItem(id)
    }

    return (
        <div>
            <div>{item.title}</div>
            <div>
                <button onClick={() => handleToggle(item.id)}>Done</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
        </div>
    )
}