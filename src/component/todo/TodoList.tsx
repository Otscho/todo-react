import React from 'react';
import { List } from "@mui/material"
import { useStoreState } from "../../store/StoreModel"
import TodoListItem from "./TodoListItem"
import TodoListItemNew from "./TodoListItemNew";

const TodoList: React.FC = () => {
    const todos = useStoreState((state) => state.todoModel.todos)
    return (
        <List>
            <TodoListItemNew/>
            { todos.map(
                (todo)=>{
                    return <TodoListItem todo={todo}/>
                })
            }
        </List>
    )
}

export default TodoList