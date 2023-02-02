import './App.css';
import TodoForm from './Components/TodoForm';
import { Typography } from '@mui/material';
import { useState } from 'react';
import TodoList from './Components/TodoList';
import SearchBar from './Components/SearchBar';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const searchHandler = (input) => {
    const filteredData = todos.filter((data) => { return data.name.toLowerCase().includes(input.toLowerCase()) });
    setTodos(filteredData);
    setInput("");
  }
  const deleteTodo = (todoIndex) => {
    const newTodos = todos.filter((_, index) => index !== todoIndex);
    setTodos(newTodos);
  }
  return (
    <div className="App">
      <Typography component="h1" variant="h2" color="primary">
        Todos
      </Typography>
      <SearchBar searchHandler={searchHandler} setInput={setInput} input={input} />
      <TodoForm
        saveTodo={(todoText) => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {

            const todo = {
              id: Math.random(),
              name: todoText,
              done: false
            }
            setTodos([...todos, todo]);
            console.log(todos);
          }
        }}
      />

      <TodoList todos={todos} deleteTodo={deleteTodo} setTodos={setTodos} />
    </div>
  );
}

export default App;
