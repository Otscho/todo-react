import React from 'react';
import {useStoreState} from "../../store/StoreModel";
import NewTodo from "./NewTodo";
import EditTodo from "./EditTodo";

const TodoView = () => {
    const selectedTodo =
        useStoreState((state)=>state.todoModel.selectedTodo)
    return (
        selectedTodo == null
        ?<NewTodo />
        :<EditTodo />
    )
};

export default TodoView;