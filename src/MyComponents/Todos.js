import React from 'react'
import TodoItem from '../MyComponents/TodoItem'

const todos = (props) => {
  const count=props.todos.length;
  for(let i=0;i<count;i++){
    
  }
  return (
    <div className='container'>
      <h3 className='text-center my-3'>Todos list</h3>
      <ul class="list-group">
        <li class="list-group-item">
          <input class="form-check-input me-1 fs-3" type="checkbox" value="" id="firstCheckbox"/>
            <label class="form-check-label fs-3" for="firstCheckbox">{props.todos[0].task}</label>
            <p>{props.todos[0].desc}</p>
            <button className='btn btn-sm btn-danger'>Delete</button>
        </li>
        <li class="list-group-item">
          <input class="form-check-input me-1 fs-3" type="checkbox" value="" id="secondCheckbox"/>
            <label class="form-check-label fs-3" for="secondCheckbox">{props.todos[1].task}</label>
            <p>{props.todos[1].desc}</p>
            <button className='btn btn-sm btn-danger'>Delete</button>
        </li>
        <li class="list-group-item">
          <input class="form-check-input me-1 fs-3" type="checkbox" value="" id="thirdCheckbox"/>
            <label class="form-check-label fs-3" for="thirdCheckbox">{props.todos[2].task}</label>
            <p className='ms-0'>{props.todos[2].desc}</p>
            <button className='btn btn-sm btn-danger'>Delete</button>
        </li>
        <li class="list-group-item">
          <button className='btn btn-warning'> + Add a to do</button>
        </li>
      </ul>
      
    </div>
  )
}

export default todos
