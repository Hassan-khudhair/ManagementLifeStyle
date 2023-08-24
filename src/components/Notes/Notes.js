import React, {  useState, useRef } from 'react';
import { db } from '../../firebase/firebase.js';
import {  addDoc, deleteDoc, doc } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCirclePlus, faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import OneNote from './OneNote.js';

export default function Notes({notesCollectionRef , notes , setNotes , getNotes}) {
    const [newTitle, setNewTitle] = useState('');
    const [newNote, setNewNote] = useState('');
    const [newBgColor, setNewBgColor] = useState('');



    const addNote = async () => {
        try {
            await addDoc(notesCollectionRef, {
                title: newTitle,
                note: newNote,
                bgColor: newBgColor,
            });
            getNotes();
            addNoteEmpty();
        } catch (error) {
            console.error(error)
        }
        SoloNote.current.style.display = 'none';
        
    }

    const deleteNote = async (id) => {
        const noteDoc = doc(db, 'notes', id);
        await deleteDoc(noteDoc);
        getNotes();
    }


    const changeColor = (e) => {
        SoloNote.current.style.backgroundColor = e.currentTarget.style.backgroundColor;
    }

    const SoloNote = useRef();
    const addNoteEmpty = () => {
        SoloNote.current.style.display = 'flex';
    }


    return (
        <div className='notes'>
            {notes.map((note) => (
                <OneNote note={note}
                    deleteNote={deleteNote}
                    addNote={addNote}
                    setNotes={setNotes}
                    setNewNote={setNewNote}
                    setNewTitle={setNewTitle}
                    newTitle={newTitle}
                    changeColor={changeColor}
                    newBgColor={newBgColor}
                    setNewBgColor={setNewBgColor}
                />
            ))
            }


            <div className='soloNote soloNoteColor' style={{ display: 'none' , backgroundColor:newBgColor}} ref={SoloNote}>

                <div className='headNote'>
                    <input
                        type="text"
                        className='textHead'
                        placeholder='Title of Note . . . '
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                    />
                </div>
                <div>
                    <textarea
                        type="text"
                        className='textNote'
                        placeholder='write your notes . . .'
                        value={newNote}
                        onChange={(e) => setNewNote(e.target.value)}
                    />
                </div>
                <div className='submitNote' onClick={addNote}>
                    <FontAwesomeIcon icon={faFloppyDisk} />
                    <span>save</span>
                </div>

                <div className="colors">
                    <button 
                    style={{ backgroundColor: "#B9D9EB" }} 
                    className='active' 
                    onClick={(e) => {
                        changeColor(e)
                        setNewBgColor(e.currentTarget.style.backgroundColor)
                    }}
                    ></button>
                    <button 
                    style={{ backgroundColor: "#FFC0CB" }} 
                    className="active" 
                    onClick={(e) =>{ 
                        changeColor(e)
                        setNewBgColor(e.currentTarget.style.backgroundColor)
                    }}
                    ></button>
                    <button 
                    style={{ backgroundColor: "#93C572" }} 
                    className=" active" 
                    onClick={(e) =>{ 
                        changeColor(e)
                        setNewBgColor(e.currentTarget.style.backgroundColor)
                    }}
                    ></button>
                    <button 
                    style={{ backgroundColor: "#F5F5DC" }} 
                    className=" active" 
                    onClick={(e) =>{ 
                        changeColor(e)
                        setNewBgColor(e.currentTarget.style.backgroundColor)
                    }}
                    ></button>
                </div>
            </div>

            

            <div className='plusElement' onClick={() => addNoteEmpty()}>
                <FontAwesomeIcon icon={faFileCirclePlus} className='plusIcon' />
                <p>Add Note . . .</p>
            </div>
        </div>
    )
}

