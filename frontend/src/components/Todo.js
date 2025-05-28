import { FaDeleteLeft } from "react-icons/fa6";

import { useState } from "react";

import { update_todo } from "../api/endpoints";

const Todo = ({id, todo_name, completed, deleteTodo}) =>{

    const [isChecked, setChecked] = useState(completed)

    const handleDelete = async() => {
       await deleteTodo(id);
    }

    const handleComplete = async() => {
        update_todo(id, !isChecked)
        setChecked(!isChecked)

    }
    return(
        <div className='todo'>
            <div className='todo-container'>
                <input 
                    checked={isChecked} 
                    onChange={handleComplete} 
                    type='checkbox' 
                />
                <h3 className={isChecked ? 'completed' : ''}>{todo_name}</h3>
                <FaDeleteLeft 
                    onClick={handleDelete} 
                    size='20px'
                    className="delete-icon"
                />

            </div>

        </div>
    )

}

export default Todo;