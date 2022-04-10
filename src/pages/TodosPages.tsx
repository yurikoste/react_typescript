import React, {useState, useEffect} from "react";
import {ToDoForm} from '../components/ToDoForm';
import {ToDoList} from '../components/ToDoList';
import {ITodo} from '../interfaces';


export const TodosPage: React.FunctionComponent = () => {
    let [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        setTodos(saved)
    }, [])

    useEffect (() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
        title: title,
        id: Date.now(),
        completed: false
        }
        // setTodos([newTodo, ...todos])
        setTodos(prev => [newTodo, ...prev])
    }

    const toggleHandler = (id: number) => { 
        setTodos(prev => 
        prev.map(todo => {
        if (todo.id === id) {
            todo.completed = !todo.completed
        }
        return todo
        }))
    }

    const removeHandler =  (id: number) => {
        let should_remove = window.confirm("Are you sure?")
        if (should_remove) {
        setTodos(prev => prev.filter(todo => todo.id !== id))
        }
    }

    return <React.Fragment>
        <ToDoForm onAdd={addHandler} />
        <ToDoList 
            todos={todos} 
            onToggle={toggleHandler} 
            onRemove={removeHandler}/>
    </React.Fragment>
}