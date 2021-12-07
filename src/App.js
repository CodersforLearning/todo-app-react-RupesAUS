import logo from './logo.svg';
import './App.css';

import TodoList from './components/todolist';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className='todo-app py-5'>
      <TodoList />
    </div>
  );
}

export default App;
