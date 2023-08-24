import React, {  useState } from 'react';
import { db } from '../../firebase/firebase';
import {  addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore';
import OneTask from './onetask.js'

export default function Todo({todo  , todocollectionref , getTodo}) {

  
  const [newTask, setNewTask] = useState('');
  const [updateDone, setUpdateDone] = useState(false);
  const [newDone, setNewDone] = useState(false);

  const addTask = async (e) => {
    if (e.key === 'Enter') {
      try {
        await addDoc(todocollectionref, {
          task: newTask,
          done: newDone,
        });
        getTodo();
      } catch (error) {
        console.error(error)
      }
      e.target.value = '';
    }
  }

  const deleteTask = async (id) => {
    const itemDoc = doc(db, 'todo', id);
    await deleteDoc(itemDoc);
    getTodo();
  }



  const updateTaskTodo = async (id) => {
    const todoDoc = doc(db, "todo", id);
    await updateDoc(todoDoc, { done: updateDone });
    getTodo();
  };



  return (
    <div className='todo'>
      <h3>To Do List Daily </h3>
      {todo.map((task) =>
        <OneTask task={task} setUpdateDone={setUpdateDone} updateTaskTodo={updateTaskTodo} deleteTask={deleteTask} addTask={addTask} />
      )}
      <div className="task">
        <input type="text"
          className='inputTask'
          autoFocus onKeyDown={addTask}
          onChange={(e) => setNewTask(e.target.value)} />
      </div>

    </div>
  )
}

