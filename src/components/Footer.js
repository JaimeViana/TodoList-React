import React, { useContext, useState } from 'react';
import { DataContext } from './DataProvider';

export default function Footer() {
    const [checkAll, setCheckAll] = useState(false);
    const [todos, setTodos] = useContext(DataContext);

    const handleCheckAll = () => {
        const newTodos = [...todos]
        newTodos.forEach(todo => {
            todo.complete = !checkAll
        });
        setTodos(newTodos);
        setCheckAll(!checkAll);
    }

    const newTodosComplete = () => {
        return todos.filter(todo => todo.complete === false);
    }

    const deleteTodo = () => {

        setTodos(newTodosComplete());
        setCheckAll(false);

    }

    return (

        <div>
            {
                todos.length === 0 ? <h2>The list is clear. Don't you have something to add?</h2>
                    : <div className="row">
                        <label htmlFor="all">
                            <input type="checkbox" name="all" id="all"
                                onClick={handleCheckAll} checked={checkAll} />
            ALL
          </label>
                        <p>You have {newTodosComplete().length} to do</p>
                        <button id="delete" onClick={deleteTodo}>Delete</button>
                    </div>
            }

        </div>
    )
}
