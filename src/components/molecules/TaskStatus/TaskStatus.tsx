import React from 'react';
import {TaskStatusProps} from './TaskStatus.props';
import './TaskStatus.styles.css';

const TaskStatus: React.FC<TaskStatusProps> = ({
   completed
}) => {
    return (
        <div className={`status-container ${completed ? "completed" : "pending"}`}>
            <span>{completed ? "Completed" : "Pending"}</span>
        </div>
    );
};

export default TaskStatus;