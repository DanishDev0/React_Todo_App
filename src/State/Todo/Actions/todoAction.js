export const ADD_TODO="ADD_TODO"
export const REMOVE_TODO="REMOVE_TODO"
export const DELETING_ALL_TODO="DELETING_ALL_TODO"
export const UPDATE_TODO="UPDATE_TODO"
export const UPDATE_TODO_STATUS="UPDATE_TODO_STATUS"

export const addTodo=(data)=>{
    return {

        type:ADD_TODO,
        payload:data,
    }
}
export const removeTodo=(data)=>{
    return {

        type:REMOVE_TODO,
        payload:data,
        
    }
    
}
export const DeleteTodo=(data)=>{
    return {

        type:DELETING_ALL_TODO,
        payload:data,
    }
}
export const UpdateTodo=(data)=>{
    return {

        type:UPDATE_TODO,
        payload:data,
    }
}
export const UpdateTodoStatus=(data)=>{
    return {

        type:UPDATE_TODO_STATUS,
        payload:data,
    }
}