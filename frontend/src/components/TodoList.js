import Todo from "./Todo";

const TodoList = ({todos}) => {
    return(
        <div className= 'todo-list'>
            {
                todos.map((todo) => {
                    return (
                        <Todo />
                    )
                })
        
            }
           
        </div>
    )
}

export default TodoList;