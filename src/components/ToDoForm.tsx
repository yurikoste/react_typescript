import React, {useState, useRef} from "react";

interface ToDoFormProps {
    onAdd(title: string): void
}

export const ToDoForm: React.FunctionComponent<ToDoFormProps> = (props) => {
    // let [title, setTitle] = useState<string>('')

    let ref = useRef<HTMLInputElement>(null)

    // let changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }

    let keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value)
            // console.log(ref.current!.value)
            ref.current!.value = ''
            // console.log(title)
            // setTitle('')
        }
    }

    return (
        <div className="input-field mt2">
            <input 
            // onChange={changeHandler} 
            // value={title} 
            ref={ref}
            type='text' 
            id='title' 
            placeholder="Task name"
            onKeyPress={keyPressHandler}/>
            <label htmlFor="title" className="active">
               Task name
            </label>
        </div>
    )
    }