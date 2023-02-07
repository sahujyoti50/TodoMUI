import './App.css';
import TodoForm from './Components/TodoForm';
import { Button, IconButton, List, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import TodoList from './Components/TodoList';
import SearchBar from './Components/SearchBar';
import { Cancel, Save } from '@mui/icons-material';
import FilterTodo from './Components/FilterTodo';

function App() {
  const [todos, setTodos] = useState([]);
  const [selectedTodos, setSelectedTodos] = useState(todos);
  const [input, setInput] = useState("");
  const [value, setValue] = useState('');
  const [currentTodo, setCurrentTodo] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [filter, setFilter] = useState('all');

  const searchHandler = (input) => {
    const filteredData = todos.filter((data) => { return data.name.toLowerCase().includes(input.toLowerCase()) });
    setSelectedTodos(filteredData);
    setInput("");
  }
  const deleteTodo = (todo) => {
    const confirm = window.confirm(`Do you want to delete item ${todo.name.toUpperCase()}?`);
    if (confirm) {
      const newTodos = todos.filter((todos) => todos.id !== todo.id);
      setSelectedTodos(newTodos);
    }
  }
  function handleEditClick(todo) {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  }
  function handleEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, name: e.target.value });
    console.log(currentTodo);
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();

    handleUpdateTodo(currentTodo.id, currentTodo);
  }
  function handleUpdateTodo(id, updatedTodo) {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setSelectedTodos(updatedItem);
  }

  useEffect(() => {
    //setting value as per selection
    const filterTodoList = todos.filter(
      (todo) => {
        if (filter === 'false') {
          return todo.done === false;
        }
        else if (filter === 'true') {
          return todo.done === true;
        }
        else return todo;
      }
    )
    setSelectedTodos(filterTodoList);
  }, [filter,todos]);

  return (
    <div className="App">
      <Typography component="h1" variant="h2" color="primary">
        Todos
      </Typography>

      <SearchBar searchHandler={searchHandler} setInput={setInput} input={input} />

      {isEditing ? (
        <List>
          <form onSubmit={(e) => handleEditFormSubmit(e)} style={{ display: 'inline' }}>
            <h2>Edit Todo</h2>

            <TextField
              variant="outlined"
              name="editTodo"
              type="text"
              margin="none"
              placeholder="Edit todo"
              value={currentTodo.name}
              onChange={handleEditInputChange}
            />
            <IconButton
              color="primary"
              aria-label="Edit"
              type="submit"

            >
              <Save />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="Edit"
              onClick={() => {
                setIsEditing(false)

              }}
            >
              <Cancel />
            </IconButton>
          </form>
        </List>
      ) : <TodoForm
        value={value}
        setValue={setValue}
        saveTodo={(todoText) => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {

            const todo = {
              id: Math.random(),
              name: todoText,
              done: false
            }
            setTodos([...todos, todo]);
            setSelectedTodos([...todos, todo])
            console.log(todos);
          }
        }}
      />
      }
      <FilterTodo filter={filter} setFilter={setFilter} />
      <TodoList selectedTodos={selectedTodos} setTodos={setTodos} deleteTodo={deleteTodo} setSelectedTodos={setSelectedTodos} handleEditClick={handleEditClick} />
    </div>
  );
}

export default App;
