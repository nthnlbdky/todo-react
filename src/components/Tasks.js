import Task from './Task'

const Tasks = ({tasks, onDelete, onToggleReminder}) => {
    return (
        <div>
            {
                tasks.map(task => {
                    return (<Task key={task.id} task={task} onDelete = {onDelete} onToggleReminder={onToggleReminder}/>)
                })
            }
           
        </div>
    )
}

export default Tasks
