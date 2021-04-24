import { ADD_TODO_TASK, DELETE_TODO_TASK, EDIT_TODO_TASK } from "./Action";

import   todotasks from './state'
export let reducer =(state=todotasks,action) => {
  switch (action.type) {
    case ADD_TODO_TASK:
      //  let   addnewtask =[...state]
      //    addnewtask =  addnewtask.push(action.data)
      //         return addnewtask;
      
         const newList = [...state, action.data];
             return newList;
      case DELETE_TODO_TASK:
           let  deletedTask = [...state]
       deletedTask = deletedTask.filter(todo   =>  todo.id !== action.data )
      return deletedTask ;
      // case EDIT_TODO_TASK:
      // break ;
      default:
       return state;
  
 
  }

}