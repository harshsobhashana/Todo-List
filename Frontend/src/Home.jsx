import React, {useEffect, useState} from 'react'
import Create from './Create'
import axios from 'axios'
import './App.css'
  
function Home () {
    const [todos, setTodos] = useState([])
    useEffect(() =>{
        axios.get('http://localhost:3001/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleEdit = (id) => {
        axios.put('http://localhost:3001/update/'+id)
        .then(result => location.reload())
        .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/delete/' + id)
            .then(result => location.reload())
            .catch(err => console.log(err));
    };

    return (
        <div className='home'>
            <h2>Todo List</h2>
            <Create /> 
            <br/>
            {
                todos.length === 0
                ?
                <div><h2>No Record</h2></div>
                :
                todos.map(todo => (
                    <div className='task' key={todo._id}>
                    <div className='checkbox' onClick={() => handleEdit(todo._id)}>
                        <input type="checkbox" checked={todo.done} readOnly />
                        <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
                    </div>
                    <span className="delete-icon" onClick={() => handleDelete(todo._id)}>❌</span>
                </div>
                ))
            }
        </div>
)
}
export default Home