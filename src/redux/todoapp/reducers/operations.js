import { ADD_TODO, REMOVE_TODO, UPDATE_CHECKBOX } from "../actions";
const initialState = [
    {id:1, todo: 'Do assignment', completed:false},
    {id:2, todo: 'Do Hireflix', completed:false},
    {id:3, todo: 'Do CodeZingers', completed:false},
];


export function operationsReducer(state = initialState, action){
    switch(action.type){
        case ADD_TODO:
            return [...state, action.payload]
        case  REMOVE_TODO:
            const filteredTodos = state.filter((todo)=>todo.id !== action.payload)  
            return filteredTodos 
        case   UPDATE_CHECKBOX:
            let todaArray = [];
            state.map((item)=>{
                if(item.id===action.payload){
                    item.completed = !item.completed
                }
                todaArray.push(item)
            })  
            return todaArray
        default : return state
    }
}