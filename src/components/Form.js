import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../redux/todoapp/actions';

export default function Form() {
    const dispatch = useDispatch();
    const [todaValue, setTodoValue] = useState('')
    function handleSubmit(e){
        e.preventDefault();
        let todoObj = {
            id: Math.random(),
            todo: todaValue,
            completed: false
        }
        setTodoValue('')
        dispatch(addTodo(todoObj))
    }
  return (
    <form onSubmit={handleSubmit}>
        <label>Add your todo-work</label>
        <div>
            <input type='text' required value={todaValue} onChange={(e)=>setTodoValue(e.target.value)}/>
            <button type='submit'>ADD</button>
        </div>
    </form>
  )
}
