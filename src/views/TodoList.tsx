import React, { Fragment, useContext } from 'react'
import { observer } from 'mobx-react-lite'

import ToDoList from '@/mobx/todolist'

const TodoList = () => {
  const todoStore = useContext(ToDoList)
  const { todos, toggleTodo, removeTodo } = todoStore

  return(
    <Fragment>
      <div className="row">
        <table className="table table-hover">
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Completed?</th>
              <th>Actions</th>
            </tr>
          </thead>  
          <tbody>
            {
              todos.map(todo => (
                <tr key={todo.id}>
                  <td>{todo.title}</td>
                  <td>{todo.completed ? "✅" : ""}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-info"
                      onClick={_ => toggleTodo(todo.id!)}
                    >
                      Toggle
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={_ => removeTodo(todo.id!)}
                    >
                      Remove
                    </button>
                  </td>   
                </tr>
              ))
            }  
          </tbody>
        </table>
      </div>  
    </Fragment>
  )
}

export default observer(TodoList)