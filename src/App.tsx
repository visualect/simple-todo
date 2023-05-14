import { useState, useEffect } from 'react'
import { ITodoItem } from './types/todoTypes'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './styles/normalize.scss';
import classes from './styles/modules/main.module.scss'

const storage = JSON.parse(localStorage.getItem('todos') as string) as ITodoItem[];

export default function App() {
  const [todos, setTodos] = useState<ITodoItem[]>(storage ?? [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addItem = (newItem: ITodoItem) => {
    setTodos([...todos, newItem])
  }

  const deleteItem = (id: string) => {
    const nextTodos = todos.filter(item => id !== item.id)
    setTodos(nextTodos)
  }

  const toggleItem = (id: string) => {
    const nextTodos = todos.map(item => {
      if (item.id === id) {
        item.completed = !item.completed
        return item; // optional, it's still working without it since we return item by default
      }
      return item;
    })
    setTodos(nextTodos)
  }

  return (
    <div className={classes.container}>
      <TodoForm addItem={addItem}/>
      <TodoList todos={todos} removeItem={deleteItem} toggleItem={toggleItem}/>
    </div>
  )
}
