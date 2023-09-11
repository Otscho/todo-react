import  Todo from "./Todo"
class TodoImpl implements Todo {
    completed: boolean;
    id: number | string | null;
    title: string;

    constructor(title: string) {
        this.id = null
        this.title = title
        this.completed = false
    }
}

export default  TodoImpl