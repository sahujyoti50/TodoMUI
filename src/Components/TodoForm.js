import React from 'react';
import { TextField } from '@mui/material';
const TodoForm = ({ autoFocus, saveTodo, value, setValue }) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        saveTodo(value);
        setValue('');
      }}
      style={{ display: 'inline-flex' }}
    >
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={(event) => {
          setValue(event.target.value);
        }}
        value={value}
        autoFocus
      />
    </form>
  );
};

export default TodoForm;