import { version } from "os";
import React from "react";
import { ITodo } from "../interfaces";

type TodoListProps = {
    todos: ITodo[]
    // onToggle(id: number): void
    onToggle: (id: number) => void
    onRemove: (id: number) => void
}

export const ToDoList: React.FunctionComponent<TodoListProps> = ({todos, onRemove, onToggle}) => {
    if (todos.length === 0) {
        return <p className="center">There is no active tasks</p>
    }

    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault()
        onRemove(id)
    }

    return (
        <ul>
            {todos.map(todo => {
                const classes = ['todo']
                if (todo.completed) {
                    console.log('completed')
                    classes.push('completed')
                } 
                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)}/>
                            <span>{todo.title}</span>
                            <i 
                            className="material-icons red-text" 
                            onClick={event => removeHandler(event, todo.id)}>
                            delete    
                            </i>
                        </label>
            </li>
                )
            })}
            
        </ul>
    )
}