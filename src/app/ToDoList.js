import { useState } from "react"
import { tasks } from "./Data"
function Task({task}) {
    const [taskState,setTaskState] = useState('❌')
    return(
        <>
            <br/>
            <textarea defaultValue={task.description}></textarea>
            <button onClick={() => setTaskState(taskState == '❌' ? '✔️' : '❌')}>
                {taskState}
            </button>
        </>
        
    )
}

function TaskList({tareas}) {
    return(
        <>
            {tareas}
        </>
    )
}
export default function ToDoList() {
    const [tareas,setTask] = useState(
        tasks.map(
            (task) => (
                <Task task={task} key={task.id}/>
            )
        )
    )
    function addTask(){
        let task = {
            id : tareas.length,
            description : 'Vacio'
        }
        tasks.push(task)
        
        setTask(
            tasks.map(
                (task) => (
                    <Task task={task} key={task.id}/>
                )
            )
        )
    }
    return(
        <>
            <TaskList tareas={tareas}/>
            <button key={'Boton'} onClick={addTask}>Add Task</button>
        </>
    )
}
