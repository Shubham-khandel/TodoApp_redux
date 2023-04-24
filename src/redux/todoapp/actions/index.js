export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const UPDATE_CHECKBOX = 'UPDATE_CHECKBOX'

export function addTodo(payload){
    return{
        type: ADD_TODO,
        payload
    }
}

export function removeTodo(payload){
    return{
        type: REMOVE_TODO,
        payload
    }
}

export function handleCheckbox(payload){
    return{
        type: UPDATE_CHECKBOX,
        payload
    }
}