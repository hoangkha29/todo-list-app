import React, {useState} from 'react';
import {TaskProps} from './Task.props';
import './Task.styles.css';
import {MdOutlineDone} from "react-icons/md";
import {RxCross2} from "react-icons/rx";
import {AiOutlineDelete} from "react-icons/ai";
import {CiEdit} from "react-icons/ci";
import TaskStatus from "../TaskStatus/TaskStatus";

const Task: React.FC<TaskProps> = ({
   task,
   onEditTask,
   onDeleteTask,
   onToggleCompleted
}) => {
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(task.title);
    const [desc, setDesc] = useState(task.desc);
    const [completed, setCompleted] = useState(task.completed);

    const handleEdit = () => {
        setEditing(true);
    };

    const handleCancel = () => {
        setEditing(false);
        setTitle(task.title);
    };

    const handleDone = () => {
        if (title.trim()) {
            onEditTask(task.id, title.trim(), desc);
            setEditing(false);
        }
    };

    const handleDelete = (e:any) => {
        e.preventDefault();
        onDeleteTask(task.id);
    };

    const handleToggleCompleted = () => {
        onToggleCompleted(task.id);
        setCompleted(!completed)
    };

    const handleChangeTitle = (e:any) => {
        setTitle(e.target.value);
    };

    const handleChangeDesc = (e:any) => {
        setDesc(e.target.value);
    };

    return (
        <li className="task-todo">
            {editing ? (
                <form onSubmit={handleDone} className="form-edit">
                    <div className="task-title edit">
                        <input type="text" value={title} onChange={handleChangeTitle} placeholder={"Add title..."} className=""/>
                        <input type="text" value={desc} onChange={handleChangeDesc} placeholder={"Add description..."} className=""/>
                    </div>
                    <div className="task-action edit">
                        <button type="submit">
                            <MdOutlineDone size={20} className="" />
                        </button>
                        <button type="button" onClick={handleCancel}>
                            <RxCross2 size={20} className="" />
                        </button>
                    </div>
                </form>
            ) : (
                <div className="task-container">
                    <div className="task-detail">
                        <input type="checkbox" checked={task.completed} onChange={handleToggleCompleted} className="task-checkbox"/>

                        <div className={"details"}>
                            <span className={`task-title ${task.completed ? "completed" : ""}`}>
                              {task.title}
                            </span>
                                <span className={`task-desc ${task.completed ? "completed" : ""}`}>
                              {task.desc}
                            </span>
                        </div>

                        <TaskStatus completed={completed}/>
                    </div>
                    <div className={`task-action`}>
                        <button onClick={handleEdit}>
                            <CiEdit size={20} className=""/>
                        </button>
                        <button onClick={handleDelete}>
                            <AiOutlineDelete size={18} className=""/>
                        </button>
                    </div>
                </div>
            )}
        </li>
    );
};

export default Task;