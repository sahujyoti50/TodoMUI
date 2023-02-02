import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { BookmarkBorder, Favorite, FavoriteBorder } from '@mui/icons-material';
import { red,blue } from '@mui/material/colors';

const TodoList = ({ todos, deleteTodo }) => (
    <List>
        {todos.map((todo, index) => (
            <ListItem key={index.toString()} dense button>
               <Checkbox icon={<BookmarkBorder />} checkedIcon={<Favorite />} sx={{
    color: blue[800],
    '&.Mui-checked': {
      color: red[600],
    },
  }}/>
                <ListItemText primary={todo} />
                <ListItemSecondaryAction>
                    <IconButton
                        aria-label="Delete"
                        onClick={() => {
                            deleteTodo(index);
                        }}
                    >
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        ))}
    </List>
);

export default TodoList;