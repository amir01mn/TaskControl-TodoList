import { FaDeleteLeft } from "react-icons/fa6";


const Todo = ({todo_name}) =>{
    return(
        <div className='todo'>
            <div className='todo-container'>
                <input type='checkbox' />
                <h3>{todo_name}</h3>
                <FaDeleteLeft size = '20px'/>

            </div>

        </div>
    )

}

export default Todo;