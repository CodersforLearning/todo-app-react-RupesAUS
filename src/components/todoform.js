import React, {useState} from 'react'
import TodoList from './todolist';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

    return(
        <form className='todo-form my-4' onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Add a todo'
                value={input}
                name='text'
                className='todo-input'
                maxlength="100"
                onChange = {handleChange}
            />
            <button className='todo-button'>Add todo</button>
        </form>
    )
}

export default TodoForm;