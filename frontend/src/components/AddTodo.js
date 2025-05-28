import { useState } from "react";

const AddTodo = ({addTodo}) => {
    const [input, setInput] = useState('')

    const handleAdd = () => {
        if (input.trim()) {
            addTodo(input);
            setInput('');
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAdd();
        }
    }

    return (
        <div className="add-todo">
            <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="add-input"
                type='text'
                placeholder="Add a new todo..."
            />
            <button 
                onClick={handleAdd} 
                className="add-button"
                disabled={!input.trim()}
            >
                Add Todo
            </button>
        </div>
    )
}

export default AddTodo;