import React, {useEffect, useState} from 'react';
import './App.css';
import AddTaskInput from './components/molecules/AddTaskInput/AddTaskInput';
import TaskList from "./components/molecules/TaskList/TaskList";

function App() {
    const getLocalStorage:any = localStorage.getItem('todoTasks')
    const [tasks, setTasks] = useState<any>(JSON.parse(getLocalStorage) || [{ id: '123', title: 'Test title task 1', desc: "Test desc task 1", completed: false }]);

    useEffect(() => {
        localStorage.setItem('todoTasks', JSON.stringify(tasks))
    }, [tasks])

    const addTask = (title:string, desc:string) => {
        const newTask = { id: Date.now(), title: title, desc: desc, completed: false };
        setTasks([...tasks, newTask]);
        localStorage.setItem('todoTasks', JSON.stringify([...tasks, newTask]))
    };

    const editTask = (id:string, title:string, desc:string) => {
        setTasks(tasks.map((task:any) => (task.id === id ? { ...task, title, desc } : task)));
    };

    const deleteTask = (id:string) => {
        setTasks(tasks.filter((task:any) => task.id !== id));
    };

    const toggleCompleted = (id:string) => {
        setTasks(tasks.map((task:any) => task.id === id ? { ...task, completed: !task.completed } : task));
    };

    const clearTasks = () => {
        setTasks([]);
    };

    const getCompletedTasks = () => tasks.filter((task:any) => task.completed);
    const getUncompletedTasks = () => tasks.filter((task:any) => !task.completed);

  return (
    <div className="App">
      <div className={'content-container'}>
          <h1>My Tasks</h1>
          <AddTaskInput onAddTask={addTask}/>
          <div className={'task-list-header'}>
              <p className="summary-task">
                  {getUncompletedTasks().length} tasks left
              </p>
              <p className="summary-task">
                  {getCompletedTasks().length} tasks completed
              </p>
              <button onClick={clearTasks}>Clear all tasks</button>
          </div>
          { tasks.length ?
              <TaskList tasks={tasks} onEditTask={editTask} onDeleteTask={deleteTask} onToggleCompleted={toggleCompleted}/>
          : <div>
              <p>Empty task</p>
            </div>
          }
      </div>
    </div>
  );
}

export default App;
