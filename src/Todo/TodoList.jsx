// const { useState } = require("react");
import React , {useState} from 'react';


function TodoList() {
    const [ todos, setTodos] = useState([
        {id: 1, text: 'Buy Milk'},
        {id: 2, text: 'Walk dog'},
    ]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        setTodos([...todos, {id: todos.length +1, text: newTodo}]);
        setNewTodo('');
    };

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} > {todo.text}</li>
                ))}
            </ul>
            <input
             type="text"
             value={newTodo}
             onChange={(e) => setNewTodo(e.target.value)}
             />
             <button onClick={addTodo} className='bg-orange-500 text-white p-2 m-2 rounded'>Add Todo</button>
        </div>
    );
}
export default TodoList;