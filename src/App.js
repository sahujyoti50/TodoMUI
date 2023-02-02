import './App.css';
import TodoForm from './Components/TodoForm';
import { Typography } from '@mui/material';
import { useState } from 'react';
import TodoList from './Components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const deleteTodo =(todoIndex)=>{
    const newTodos = todos.filter((_, index) => index !== todoIndex);
    setTodos(newTodos);
  }
  return (
    <div className="App">
      <Typography component="h1" variant="h2" color="primary">
        Todos
      </Typography>

      <TodoForm
        saveTodo={(todoText) => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            setTodos([...todos, trimmedText]);
          }
        }}
      />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
