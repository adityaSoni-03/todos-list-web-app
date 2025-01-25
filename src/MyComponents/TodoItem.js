import React from 'react'

const TodoItem = ({todos}) => {
  return (
    <div>
      <h4>{todos.task}</h4>
      <p>{todos.desc}</p>
      <button className='btn btn-sm btn-danger'>Delete</button>
    </div>
  )
}

export default TodoItem;
