import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Edit } from '@mui/icons-material';
import { Bookmark, BookmarkBorder } from '@mui/icons-material';
import { blue } from '@mui/material/colors';
import { Card } from '@mui/material';


const TodoList = ({ selectedTodos, deleteTodo, setSelectedTodos,handleEditClick,setTodos }) => {
    function handleToggleTodo(todo) {

        const updatedTodos = selectedTodos.map((t) =>
            t.id === todo.id
                ? {
                    ...t,
                    done: !t.done
                }
                : t
        );
        setTodos(updatedTodos);
        setSelectedTodos(updatedTodos);
    }


    if (!selectedTodos.length) {
       return <p>You Have No Todos Left!!</p>;
     }
    return (
        <Card sx={{ maxWidth: 500, margin: "auto" }}>
            {selectedTodos.map((todo) => (
                <List key={todo.id} dense >
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
                     {/* k */}
                    </ListItem>
                    <ListItemSecondaryAction>
                        <IconButton
                            color="primary"
                            aria-label="Edit"
                            onClick={() => {
                                handleEditClick(todo);
                                
                            }}
                        >
                            <Edit />
                        </IconButton>
                        <IconButton
                            color="primary"
                            aria-label="Delete"
                            onClick={() => {
                                deleteTodo(todo);
                            }}
                        >

                            <DeleteIcon />
                        </IconButton>

                    </ListItemSecondaryAction>
                </List>
            ))}
        </Card>
    )
};

export default TodoList;