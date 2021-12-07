import React, {useState} from 'react'
import TodoForm from './todoform'

import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

import {Card} from 'react-bootstrap'


function Todo({todos, completeTodo, removeTodo, updateTodo}) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submiteUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submiteUpdate} />
    }

    return todos.map((todo, index) => (
        <>
        {/* <div 
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
            key={index}
        > */}
        
            <Card   bg='light'
                    text='dark'
                    style={{ width: '18rem', height: '14rem', borderRadius:'25px', padding: '0px'}}
                    className="md-1 mx-2"
                    border="secondary">   
                <Card.Header style={{borderTopLeftRadius: '25px', textAlign:'left'}}><input type="checkbox" id={todo.id} name="todo-complete" onClick={() => completeTodo(todo.id)}></input></Card.Header>
                <Card.Body>
                <Card.Text key = {todo.id} onClick={() => completeTodo(todo.id)}>
                    {todo.text}
                </Card.Text>
                <div className="icons">
                    <RiCloseCircleLine 
                        onClick={() => removeTodo(todo.id)}
                        className='delete-icon'/>
                    <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text})}/>
                </div>
                </Card.Body>
            </Card>
        
            {/* <div key = {todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine 
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon'/>
                <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text})}/>
            </div> */}
        {/* </div> */}
        
      </>
    ));
    }

export default Todo