import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil} from '@fortawesome/free-solid-svg-icons'
import DialogElement from './DialogElement.js';
import DialogElementTwo from './DialogElementTwo.js'

export default function Exersize(props) {



    const [openDialogOne, setOpenDisplayOne] = useState(false);
    const [openDialogTwo, setOpenDisplayTwo] = useState(false);
    const openEditExrOne = () => {
        setOpenDisplayOne(true);
    }
    const openEditExrTwo = () => {
        setOpenDisplayTwo(true);
    }

    return (
        <div className="exersizes">
            <h1>list of Exersizes for this month</h1>
            <div className="container">
                <div className="exersize">
                    <FontAwesomeIcon icon={faPencil} className='iconExersize' onClick={openEditExrOne} />
                    <h3>Day One</h3>
                    <ul className="listExersizes">
                        {
                            props.exersizeDayOne.map((item) => (
                                <li>{item.nameExr} <span>{item.set} x {item.count} </span></li>
                            ))
                        }

                    </ul>
                </div>
                <div className="exersize">
                    <FontAwesomeIcon icon={faPencil} className='iconExersize'  onClick={openEditExrTwo}  />
                    <h3>Day tow</h3>
                    <ul className="listExersizes">
                        {
                            props.exersizeDayTwo.map((item) => (
                                <li>{item.nameExr} <span>{item.set} x {item.count} </span></li>
                            ))
                        }
                    </ul>
                </div>
            </div>


            <DialogElement
                openDialogOne={openDialogOne}
                setOpenDisplayOne={setOpenDisplayOne}
                exersizeDayOne={props.exersizeDayOne}
                getExersizeDayOne={props.getExersizeDayOne}
                exrDayOneCollectionRef={props.exrDayOneCollectionRef}
            />

            <DialogElementTwo
                openDialogTwo={openDialogTwo}
                setOpenDisplayTwo={setOpenDisplayTwo}
                exersizeDayTwo={props.exersizeDayTwo}
                getExersizeDayTwo={props.getExersizeDayTwo}
                exrDayTwoCollectionRef={props.exrDayTwoCollectionRef}
            />


        </div>
    )
}

