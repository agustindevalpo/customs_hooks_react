import { useEffect, useReducer } from "react";
import { todoReducer } from './todoReducer';




const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos') || []);
}


export const useTodo = () => {

    /***
    * State de la aplicación 
    */
    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

    // Cada vez que cambie le listado de TODOS se va a ejecutar
    useEffect(() => {

        localStorage.setItem('todos', JSON.stringify(todos) || []);

    }, [todos]);

    const pendingTodos = todos.filter(todo => !todo.done).length;

    const handleAddTodo = (newTodo) => {
        const action={
           type: '[TODO] Add Todo',
           payload: newTodo
        }
        dispatchTodo( action );
   
        //setTodos([...todos, newTodo]);
     }; 
   
     const handleDeleteTodo = (id) => {
       
       dispatchTodo({
           type: '[TODO] Remove Todo',
           payload: id
       });
       
       //setTodos(todos.filter(todo => todo.id !== id));
     };
      
     const handleToggleTodo = (id) =>{
   
       dispatchTodo({
           type: '[TODO] Toggle Todo',
           payload: id,
       });
     }


     return{
        todos,
        pendingTodos,
        handleAddTodo,
        handleDeleteTodo,
        handleToggleTodo
     };


}