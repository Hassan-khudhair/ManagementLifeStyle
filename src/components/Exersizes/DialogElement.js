import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';
import { addDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { useState } from 'react';


export default function DialogElement({ openDialogOne, setOpenDisplayOne, exersizeDayOne, getExersizeDayOne, exrDayOneCollectionRef }) {


    const [newNameExr, setNewNameExr] = useState('');
    const [newCount, setNewCount] = useState(0);
    const [newSet, setNewSet] = useState(0);


    const addExrDayOne = async () => {
        try {
            await addDoc(exrDayOneCollectionRef, {
                nameExr: newNameExr,
                count: newCount,
                set: newSet,
            });
            getExersizeDayOne();
        } catch (error) {
            console.error(error)
        }
    }

    const deleteExr = async (id) => {
        const exersizeDoc = doc(db, 'exersizes/V3axnrV8tJWFEQEcMwKb/day-one', id);
        await deleteDoc(exersizeDoc);
        getExersizeDayOne();
    }


    var x = 1;
    const closeEditExr = () => {
        setOpenDisplayOne(false);
    }


    return (
        <dialog open={openDialogOne} className=' dialog' >
            <div className='formDialog'>
                <h3>Add and Edit of Exersizes routine</h3>
                <div className="inputGroup">
                    <input type="text" placeholder='Enter Name of Exersize'  onChange={(e) => setNewNameExr(e.target.value)} />
                    <input type="number" placeholder='set' onChange={(e) => setNewSet(e.target.value)} />
                    <input type="number" placeholder='count' onChange={(e) => setNewCount(e.target.value)} />
                    <input type="submit" value="Add" onClick={addExrDayOne} />
                </div>

                <table className='table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>name of Exersize</th>
                            <th>sets</th>
                            <th>conts</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {exersizeDayOne.map((item) => (
                            <tr>
                                <td>{x++}</td>
                                <td>{item.nameExr}</td>
                                <td>{item.set}</td>
                                <td>{item.count}</td>
                                <td><Button variant="danger" onClick={() => deleteExr(item.id)}><FontAwesomeIcon icon={faTrashAlt} /></Button></td>
                            </tr>
                        ))}



                    </tbody>
                </table>

                <button onClick={closeEditExr} className='buttonGroup'>cancel</button>
            </div>
        </dialog>
    )
}

