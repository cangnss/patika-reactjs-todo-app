import React,{useState} from 'react'

function TodoForm({addTodo}) {
    const [todo,setTodo] = useState({
        id: "",
        task:"",
        completed:false
    });

    function handleTaskInputChange(e){
        setTodo({...todo,task:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        var i=0;
        if(todo.task.trim()){
            addTodo({...todo,id:i});
            i++;
            setTodo({...todo,task:""});
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="container w-50 d-flex">
                <input type="text" 
                    className="form-control" 
                    name="task" 
                    value={todo.task} 
                    onChange={handleTaskInputChange} 
                />
                <button 
                    type="submit" 
                    className="btn btn-primary ms-2"
                >
                    Ekle
                </button>
            </div>
        </form>
    )
}
export default TodoForm;
