import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Bookmark, BookmarkBorder } from '@mui/icons-material';
import { blue } from '@mui/material/colors';

const TodoList = ({ todos, deleteTodo, setTodos }) => {
    function handleToggleTodo(todo) {

        const updatedTodos = todos.map((t) =>
            t.id === todo.id
                ? {
                    ...t,
                    done: !t.done
                }
                : t
        );
        setTodos(updatedTodos);
    }
    return (
        <List>
            {todos.map((todo, index) => (
                <List key={index.toString()} dense >
                    <ListItem>
                        <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} sx={{
                            color: blue[800],
                            '&.Mui-checked': {
                                color: blue[600],
                            },
                        }} onClick={() => handleToggleTodo(todo)} />
                        
                        <ListItemText primary={todo.name}
                            style={{
                                textDecoration: todo.done ? "line-through" : ""
                            }} />
                            <ListItemText primary={todo.done ? "Completed" : "Incompleted"} />

                    </ListItem>
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
                </List>
            ))}
        </List>
    )
};

export default TodoList;