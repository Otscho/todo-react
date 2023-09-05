import { Grid, Typography } from "@mui/material"
import FormikTestForm from "./FormikTestForm"
import React from "react";

const NewTodo: React.FC = () => {
    return (
        <Grid container direction='column'>
            <Grid item>
                <Typography variant="h3">
                    Add new Todo
                </Typography>
            </Grid>
            <Grid item >
                {/* <TodoForm /> */}
                <FormikTestForm />
            </Grid>
        </Grid>
    )
}

export default NewTodo