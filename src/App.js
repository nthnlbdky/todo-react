import { useState } from 'react'
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
      {
        id: 1,
        text: 'School Appointment',
        day: 'Feb 5th',
        time: '12:00 PM',
        reminder: true,

      },
      {
        id: 2,
        text: 'Dentist Appointment',
        day: 'March 5th',
        time: '2:00 PM',
        reminder: true,

      },
      {
        id: 3,
        text: 'Client Appointment',
        day: 'Oct 15th',
        time: '1:00 PM',
        reminder: true,

      }
    ])
    //Add Task
    const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
    }

    //Delete Task
    const deleteTask = (id)=>{
      setTasks(tasks.filter((task)=> task.id !== id))
    }
    const onToggleReminder = (id) => {
      setTasks(tasks.map(task =>
        task.id === id ? {...task, reminder:!task.reminder } :task))
    }

  return (
    <div className="container">
      <Header/>
      <AddTask addTask={addTask}/>
      {tasks.length >0 ? <Tasks tasks={tasks} onDelete = {deleteTask} onToggleReminder={onToggleReminder}/> : 'No task to show'}
    </div>
  );
}

export default App;
