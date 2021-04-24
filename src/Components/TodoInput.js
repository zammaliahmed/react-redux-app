import React, { useState } from 'react'
import { addtask } from '../Redux/Action'
import {v1 as uuid} from 'uuid'
import { useDispatch } from 'react-redux'
const TodoInput = () => {
 const   [name,setName] =  useState('')
  const [errorMessage, setErrorMessage] = useState('')
  let dispatch =     useDispatch()

  const submit = () => {
      if(!name){ // ! , test for empty string, false, NAN, undefined, 0, null
        setErrorMessage('Remplir les champs !!')
      } else {
        dispatch(addtask(
            {
                id:uuid(),
                nametask:name
            }
        ))
    setName('')
    setErrorMessage('')
      }
  }
    return (
        <div>
               <div className="row m-2">
               <div>
               <input 
               onChange={(e) =>{
                   setName(e.target.value);
                   setErrorMessage('') 
                }}
               value={name}
               type="text" 
               className="col form-control" />
               <span className="text-danger">{errorMessage}</span>
               </div>
               <div>
               <button 
               onClick={submit}
               
               className="btn btn-primary mx-2 float-right" >Add</button>
               </div>
               </div>
        </div>
    )
}

export default TodoInput