import React from 'react';
import {TaskListProps} from './TaskList.props';
import './TaskList.styles.css';
import Task from "../Task/Task";

const TaskList: React.FC<TaskListProps> = ({
   tasks,
   onEditTask,
   onDeleteTask,
   onToggleCompleted
}) => {
    const reversedTasks = tasks.slice().reverse();
    return (
        <ul className="task-list-board">
            {reversedTasks.map((task:any) => (
                <Task
                    key={task.id}
                    task={task}
                    onEditTask={onEditTask}
                    onDeleteTask={onDeleteTask}
                    onToggleCompleted={onToggleCompleted}
                />
            ))}
        </ul>
    );
};

export default TaskList;