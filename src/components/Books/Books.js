import React, {  useState } from 'react';
import { db } from '../../firebase/firebase.js';
import {  addDoc, deleteDoc, doc } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import DialogAddBook from './DialogAddBook.js';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

export default function Books({books  , getBooks , BooksCollectionRef}) {
    const [openDialog, setOpenDisplay] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newAuther, setNewAuther] = useState('');

    const addBook = async () => {
        try {
            await addDoc(BooksCollectionRef, {
                title: newTitle,
                auther: newAuther,
            });
            getBooks();
        } catch (error) {
            console.error(error)
        }
    }

    const deleteBook = async (id) => {
        const noteDoc = doc(db, 'books', id);
        await deleteDoc(noteDoc);
        getBooks();
    }


    const OpenAddBook = () => {
        setOpenDisplay(true);
    }

    let coutns=1;


    return (
        <div className="books">
            <div className="head-books">
                <h1>my library</h1>
                <div className="button">
                    <FontAwesomeIcon icon={faPlus} className='icon-button-book' onClick={OpenAddBook} />
                </div>
            </div>
            <ul className="list-books">
                {
                    books.map((item) =>
                        <li className="book" key={item.id}>
                            <h3><span>{coutns++} - </span> {item.title}</h3>
                            <p>{item.auther}</p>
                            <FontAwesomeIcon icon={faTrashAlt} className='icon-delete-book' onClick={()=>deleteBook(item.id)}/>
                        </li>
                    )
                }
            </ul>

            <DialogAddBook
                openDialog={openDialog}
                setOpenDisplay={setOpenDisplay}
                setNewTitle={setNewTitle}
                setNewAuther={setNewAuther}
                addBook={addBook}
            />
        </div>

    )
}

