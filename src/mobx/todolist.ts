import { action, computed, observable, reaction } from 'mobx'
import { createContext } from 'react'
import { v4 } from 'uuid'


export interface Todo {
  id?: string;
  title: string;
  completed: boolean;
}


class TodoList {

  constructor() {
    reaction(
      () => this.todos,
      _ => console.log(this.todos.length)
    )
  }

  @observable 
  todos: Todo[] = [
    { id: v4(), title: "Item #1", completed: false },
    { id: v4(), title: "Item #2", completed: false },
    { id: v4(), title: "Item #3", completed: false },
    { id: v4(), title: "Item #4", completed: false },
    { id: v4(), title: "Item #5", completed: true },
    { id: v4(), title: "Item #6", completed: false },
  ]

  @action
  addTodo = (todo: Todo)  => {
    this.todos.push({ ...todo, id: v4() })
  }

  @action
  removeTodo = (id: String) => {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  @action
  toggleTodo = (id: String) => {
    this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }

      return todo
    })  
  }

  @computed
  get info() {
    return {
      total: this.todos.length,
      completed: this.todos.filter(todo => todo.completed).length,
      notCompleted: this.todos.filter(todo => !todo.completed).length
    }
  }
}

export default createContext(new TodoList())