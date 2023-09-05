import TodoHeader from "./component/todo/TodoHeader";
import AppLayout from "./component/application/AppLayout";
import TodoPage from "./component/todo/TodoPage";
import { useLocation} from "react-router-dom";
import PageNotFoundPage from "./component/page_not_found/PageNotFound";
import AboutPage from "./component/about/about";
import useTodoInitDataHook from "./model/todo_data_init_hook";

const TodoApp = () => {
    useTodoInitDataHook()
    let body = <PageNotFoundPage />
    switch (useLocation().pathname){
        case '/': body = <TodoPage />; break
        case '/todo': body = <TodoPage />; break
        case '/about': body = <AboutPage />; break
    }

    return (
        <AppLayout
            header=<TodoHeader/>
            body={body}
            />
    )
}
export default TodoApp