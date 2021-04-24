import React from 'react'
import { useDispatch } from 'react-redux'
import { deletetask } from '../Redux/Action'

function Todoitem({todo}) {
   let dispatch = useDispatch()
    return (
        <div>
         <div className="row mx-2">
        <div>
          {todo.id.length > 1 ? Number(todo.id)[2] : Number(todo.id)}
        </div>
        <div className="col"   >
        <h4>
         {todo.nametask}
        </h4>
          
        </div>
        <button className="btn btn-primary m-2" >edit</button>
        <button 
           onClick={() => dispatch(deletetask(todo.id))}
        className="btn btn-danger m-2">delete</button>

      </div>
        </div>
    )
}

export default Todoitem