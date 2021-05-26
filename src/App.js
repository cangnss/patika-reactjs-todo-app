import React,{useState} from 'react';
import './App.css';
import TodoHeader from './components/TodoHeader/TodoHeader'
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

function App(){
    const [todos,setTodos] = useState([]);
    function addTodo(todo){
      setTodos([todo,...todos]);
    }

    return(
      <div className="App mt-5">
        <TodoHeader />
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} />
      </div>
    );
}

export default App;
