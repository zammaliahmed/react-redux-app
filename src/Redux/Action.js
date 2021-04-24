export  const  ADD_TODO_TASK  = "ADD_TODO_TASK"

export  const  EDIT_TODO_TASK  = "EDIT_TODO_TASK"
export  const  DELETE_TODO_TASK  = "DELETE_TODO_TASK"

 export  function addtask(task){ // params, comes from component (where you dispatch this action)
console.log({task});
    return{
        type:ADD_TODO_TASK,
        data: task,
    }
}




 export  function editetask(taskid){

    return{
        type:EDIT_TODO_TASK,
        data: taskid
    }
}


 export  function deletetask(task){

    return{
        type:DELETE_TODO_TASK,
        data: task
    }
}