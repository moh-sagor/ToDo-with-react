import React from 'react';
import ToDo from './ToDo';
import style from './todos.module.css';


const ToDos = (props) => {

    return (
        <section className={style.todos}>
            {
                props.todos.map((todo) =>
                    (<ToDo todo={todo.todo} key={todo.id} id={todo.id} onRemoveTodo={props.onRemoveTodo} />))
            }

        </section>
    )
}

export default ToDos
