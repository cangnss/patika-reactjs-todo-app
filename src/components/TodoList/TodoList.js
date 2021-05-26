import React from 'react'
import TodoItem from '../TodoItem/TodoItem';

function TodoList({todos}) {
    return (
        <ul style={{listStyle:'none'}}>
            {todos.map(todo =>(
                <TodoItem key={todo.id} todo={todo} />
            ) )}
        </ul>
    )
}

export default TodoList;