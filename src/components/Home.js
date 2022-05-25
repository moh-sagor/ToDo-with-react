import React, { useState } from 'react';
import ToDos from './ToDos';
import style from './home.module.css';
import NewToDo from './NewToDo';
import { v4 as uuidv4 } from "uuid"



const Home = () => {
    const [todos, setTodos] = useState([]);

    const handleTodo = (todo) => {
        setTodos((prevTodos) => {
            return [...prevTodos, { id: uuidv4(), todo }]
        })
        // console.log(todo);
    }

    const handleRemoveTodo = (id) => {
        setTodos((prevTodos) => {
            const filteredTodos = prevTodos.filter(todo => todo.id !== id);
            return filteredTodos;
        });
    }

    return (
        <div className={style.container}>
            <h1 style={{ color: "white" }}>ToDo App</h1>
            <NewToDo onAddTodo={handleTodo} />
            <ToDos todos={todos} onRemoveTodo={handleRemoveTodo} />
        </div>
    )
}

export default Home;
