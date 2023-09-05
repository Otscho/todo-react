import React from "react";
import TodoLayout from  "./TodoLayout"
import TodosCompleted from "./TodosCompleted";
import {Grid} from "@mui/material";

const TodoPage: React.FC = () => {
    return (
        <Grid container >
            <Grid item xs={12}><TodosCompleted/></Grid>
            <Grid item xs={12}><TodoLayout/></Grid>
        </Grid>
    )
}

export default TodoPage