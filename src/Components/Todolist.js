import React from 'react'
import Todoitem from './Todoitem'

import { useSelector } from 'react-redux'
function Todolist() {
  let  todos =  useSelector(state => state) // shallow => let you use more than one state from store
    console.log({todos});
  return (
        <div className="my-4">
            {
                todos.map((todo) => {
                    return <Todoitem  todo={todo} key={todo.id} />
                })
            }
        </div>
    )
}

export default Todolist