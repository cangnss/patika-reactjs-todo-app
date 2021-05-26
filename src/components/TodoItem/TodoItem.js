import React from 'react'

function TodoItem({todo}) {
    const liCss = {
        width:'500px',
        height:'40px',
        border:'1px solid black'
    }
    const divCss = {
        marginLeft:'200px',
        width:'500px',
        height:'50px',
        border:'1px solid black',
        padding:'5px',
        backgroundColor:'white',
        borderRadius:'10px'
    };

    const deleteTodo = (e) =>{
        if(e.target.className === 'btn btn-danger'){
            e.target.parentElement.parentElement.remove();
        }
    };
    return (
        <div className="d-flex justify-content-around mt-5 mx-auto text-center" style={divCss}>
            <div className="col">
                <li className="fw-bold fs-4" style={{color:'orange'}}>{todo.task}</li>
            </div>
            <div className="col">
                <button type="button" className="btn btn-danger" onClick={deleteTodo}>SİL</button>
            </div>
        </div>
    );
}
export default TodoItem;