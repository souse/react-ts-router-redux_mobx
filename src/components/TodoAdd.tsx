import { Fragment, useContext, useState } from 'react'

import React from 'react'
import ToDoList from '@/mobx/todolist'
import { observer } from 'mobx-react-lite'


const TodoAdd = () => {
  const [title, setTitle] = useState('')
  const todoStore = useContext(ToDoList)
  const { addTodo ,info } = todoStore
  
  return (
    <Fragment>
      <div className="alert alert-primary">
        <div className="d-inline col-4">
          Total items: &nbsp;
          <span className="badge badge-info">{info.total}</span>
        </div>
        <div className="d-inline col-4">
          Finished items: &nbsp;
          <span className="badge badge-info">{info.completed}</span>
        </div>
        <div className="d-inline col-4">
          Unfinished items: &nbsp;
          <span className="badge badge-info">{info.notCompleted}</span>
        </div>
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          value={title}
          placeholder="Todo title..."
          onChange={e => setTitle(e.target.value)}
        /> 
      </div>
      <div className="form-group">
        <button
          className="btn btn-primary"
          onClick={_ => {
            addTodo({
              title: title,
              completed: false
            });
            setTitle('');
          }}
        >
          Add Todo
        </button> 
      </div>    
    </Fragment>
  )
}

export default observer(TodoAdd)