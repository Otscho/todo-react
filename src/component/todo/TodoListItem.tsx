import { Checkbox, IconButton, ListItem, ListItemIcon, ListItemSecondaryAction, Typography } from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import Todo from "../../model/Todo"
import { useStoreActions, useStoreState } from "../../store/StoreModel";
import React from "react";

interface TodoListItemProps {
    todo: Todo
}

const TodoListItem: React.FC<TodoListItemProps> = ({todo}) => {
    const toggle =
        useStoreActions((actions)=>actions.todoModel.toggleCompleted)
    const deleteTodo =
        useStoreActions((actions)=>actions.todoModel.delete)

    const selectTodoFunction =
        useStoreActions((actions)=>actions.todoModel.selectTodo)
    const selectedTodo =
        useStoreState((state)=>state.todoModel.selectedTodo)
    return (
        <ListItem key={todo.id}
                  onClick={()=>{selectTodoFunction(todo)}}
                  selected={todo === selectedTodo}
        >
            <ListItemIcon>
                <Checkbox
                    checked={todo.completed}
                    onClick={()=>{toggle(todo)}}
                />
            </ListItemIcon>

            <Typography >
                {todo.title}
            </Typography>

            <ListItemSecondaryAction>
                <IconButton
                    onClick={()=>{deleteTodo(todo)}}
                >
                    <DeleteForeverIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default TodoListItem