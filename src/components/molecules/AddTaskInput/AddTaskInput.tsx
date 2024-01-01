import React, {useState} from 'react';
import {AddTaskInputProps} from './AddTaskInput.props';
import './AddTaskInput.styles.css';
import { CiCirclePlus } from "react-icons/ci";

const AddTaskInput: React.FC<AddTaskInputProps> = ({
   onAddTask
}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const handleSubmit = (e:any) => {
        e.preventDefault();
        if (title.trim()) {
            onAddTask(title.trim(), desc);
            setTitle("");
            setDesc("");
        }
    };

    return (
      <form onSubmit={handleSubmit}>
        <div className={'input-container'}>
          <CiCirclePlus size={28} className="icon-plus" />
          <div className={'input-task'}>
              <input
                  className=""
                  type="text"
                  placeholder="Add a new task..."
                  value={title}
                  onChange={(title) => setTitle(title.target.value)}
              />
              <input
                  className=""
                  type="text"
                  placeholder="Add a new description..."
                  value={desc}
                  onChange={(desc) => setDesc(desc.target.value)}
              />
          </div>
          <button className="btnSubmit" type="submit">
            ADD
          </button>
        </div>
      </form>
    );
};

export default AddTaskInput;