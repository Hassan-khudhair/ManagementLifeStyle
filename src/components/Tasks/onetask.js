import React from 'react'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function onetask({ updateDone, deleteTask, updateTaskTodo, task, setUpdateDone }) {
    return (
        <div>
            <div className={task.done ? 'task taskDone' : 'task'}>
                <input type="text" className='inputTask' value={task.task} readOnly />
                <FontAwesomeIcon
                    icon={faTrashAlt}
                    className='taskIcon'
                    onClick={() => deleteTask(task.id)} />
                <input
                    type="checkbox"
                    className='checkboxTask'
                    onClick={() => updateTaskTodo(task.id)}
                    checked={task.done}
                    onChange={(e) => setUpdateDone(e.target.checked)} />

            </div>
        </div>
    )
}


