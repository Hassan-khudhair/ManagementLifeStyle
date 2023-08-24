import React from 'react'

function DialogAddBook({openDialog ,setOpenDisplay ,setNewTitle ,setNewAuther , addBook}) {
    const closeAddBook = () => {
        setOpenDisplay(false);
    }
  return (
        <dialog open={openDialog} className='dialog' >
            <div className='formDialog'>
                <h3>Add New Book</h3>
                <div className="inputGroup">
                    <label htmlFor="">Name of Book</label>
                    <input type="text" onChange={(e)=>setNewTitle(e.target.value)}  />
                    <label htmlFor="">for Auther</label>
                    <input type="text"  onChange={(e)=>setNewAuther(e.target.value)}  />
                    <input type="submit" value="Add This Book" onClick={addBook} />
                </div>

                <button onClick={closeAddBook} className='buttonGroup'>cancel</button>
            </div>
        </dialog>
  )
}

export default DialogAddBook