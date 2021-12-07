import React, {useState} from 'react'
import TodoForm from './todoform'
import Todo from './todo'
import Container from 'react-bootstrap/esm/Container';
import { CardGroup, Row} from 'react-bootstrap';

function TodoList(){
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if(!todo.text){
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        // console.log(todo, ...todos);
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos);
    }

    const updateTodo = (todoId, newValue) => {
        // let todo = [...todos].filter(todo => todo.id = todoId);
        if(!newValue.text) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    }

    
    return (
        <Container className='todo-sheet'>
            <h1>What's the plan for today?</h1>
            <TodoForm onSubmit={addTodo}/>
            {/* <CardGroup style={{ width: '18rem'}}> */}
            <Row xs={1} md={3} className="g-4 mx-4">
            <Todo 
            todos={todos}
            completeTodo={completeTodo}
            removeTodo = {removeTodo}
            updateTodo = {updateTodo}/>
            {/* </CardGroup> */}
            </Row>
        </Container>
    )
}

export default TodoList