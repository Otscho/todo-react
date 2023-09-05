import Todo from "../model/Todo";

interface TodoService {
    add(todo: Todo): Promise<Todo>
    delete(tod: Todo): Promise<null>
    readAll(): Promise<Todo[]>
    update(todo: Todo): Promise<Todo>
}

export default TodoService