import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faNoteSticky,  faDumbbell, faBook } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function home({books , notes, todo ,  exersizeDayOne,exersizeDayTwo  }) {



    return (
        <div className='cartNotes'>
            <Link to='/todo' className='linkElement'>
                <div className="card-item">
                    <FontAwesomeIcon icon={faList} className='iconCart' />
                    <h1>To do list</h1>
                    <p>click to move on </p>
                    <span className='count'>{todo.length}</span>
                </div>
            </Link>
            <Link to='/note' className='linkElement'>
                <div className="card-item">
                    <FontAwesomeIcon icon={faNoteSticky} className='iconCart' />
                    <h1>Notes</h1>
                    <p>click to move on </p>
                    <span className='count'>{notes.length}</span>
                </div>
            </Link>
            <Link to='/book' className='linkElement'>
                <div className="card-item">
                    <FontAwesomeIcon icon={faBook} className='iconCart' />
                    <h1>Bookshelf</h1>
                    <p>click to move on </p>
                    <span className='count'>{books.length}</span>
                </div>
            </Link>
            <Link to='/exersize' className='linkElement'>
                <div className="card-item">
                    <FontAwesomeIcon icon={faDumbbell} className='iconCart' />
                    <h1>Exersize</h1>
                    <p>click to move on </p>
                    <span className='count'>{exersizeDayOne.length + exersizeDayTwo.length}</span>
                </div>
            </Link>
        
        </div>
    )
}