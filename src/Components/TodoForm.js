import React, { useState } from 'react';
import { Button, IconButton, TextField } from '@mui/material';
import { Edit, Save } from '@mui/icons-material';

const TodoForm = ({ saveTodo, value, setValue}) => {

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

      />
    </form>
  );
};

export default TodoForm;