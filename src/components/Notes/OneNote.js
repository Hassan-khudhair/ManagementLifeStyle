import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'


export default function OneNote({  note, deleteNote,  setNewNote, setNewTitle }) {
    return (
        <div className='soloNote' style={{backgroundColor:note.bgColor}}>
            <FontAwesomeIcon icon={faTrashCan} className='trashIcon' onClick={() => deleteNote(note.id)} />
            <div className='headNote'>
                <input
                    type="text"
                    className='textHead'
                    placeholder='Title of Note . . . '
                    readOnly
                    value={note.title}
                    onChange={(e) => setNewTitle(e.target.value)} />
            </div>
            <div>
                <textarea
                    type="text"
                    className='textNote'
                    placeholder='write your notes . . .'
                    onChange={(e) => setNewNote(e.target.value)}
                    value={note.note}
                    readOnly
                />
            </div>
            
        </div>
    )
}

