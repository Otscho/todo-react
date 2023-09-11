import { Grid, Typography } from "@mui/material"
import TodoForm from "./TodoForm"
import { useStoreState } from "../../store/StoreModel"
import Todo from "../../model/Todo"
import React from "react";

interface EditTodoProps {
    todo: Todo,
    submitFkt(todo: Todo): void
}
const EditTodo: React.FC<EditTodoProps> = (props) => {
    const selectedTodo =
        useStoreState((state)=>state.todoModel.selectedTodo)
    return (
        <Grid container direction={"column"}>
            <Grid item>
                <Typography variant="h3">
                    Edit Todo
                </Typography>
            </Grid>
            <Grid item >
                <TodoForm
                    todo={props.todo}
                    submitFunction={ props.submitFkt }
                    submitText='Edit ToDo'
                    resetFormAfterSubmit={true}
                />
            </Grid>
        </Grid>
    )
}

export default EditTodo