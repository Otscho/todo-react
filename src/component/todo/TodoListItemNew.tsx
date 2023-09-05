import React from 'react';
import {Button, ListItem} from "@mui/material";
import {useStoreActions} from "../../store/StoreModel";

const TodoListItemNew = () => {
    const resetSelectedTodo = useStoreActions (
        (actions) => actions.todoModel.resetSelectedTodo
    )
    return (
        <ListItem>
            <Button
                onClick={()=> {resetSelectedTodo()}}
            >
                Add a new Todo
            </Button>
        </ListItem>
    );
};

export default TodoListItemNew;