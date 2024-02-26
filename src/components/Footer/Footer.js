
import { useEffect, useState } from 'react';
import { STATUS } from '../../core/constants';
import Filter from '../Filters/Filters';
import './Footer.css';

function Footer({ noteLists, onClearCompleted, onFilterNotes}) {
    const [numItemLeft, setNumItemLeft] = useState(0);
    const [checkCompleted, setCheckCompleted] = useState(false);
    const countItemLeft = (notes) => {
        const itemLeft = notes.filter((note) => note.status === STATUS.ACTIVE);
        setNumItemLeft(itemLeft.length);
    }

    const onCheckCompleted = (notes) => {
        const completed = notes.filter((note) => note.status === STATUS.COMPLETED);
        setCheckCompleted(completed.length > 0 ? true : false);
    }


    const onFilter = (stt) => {
        onFilterNotes(stt)
    }

    useEffect(() => {
        countItemLeft(noteLists);
        onCheckCompleted(noteLists);
    }, [noteLists]);

    return (
        <div className="footer">
            <div>{numItemLeft} item left</div>
            <Filter noteLists={noteLists} onFilter={onFilter} />

            <button className={checkCompleted ? "btn-clear" : "btn-hidden"} onClick={() => onClearCompleted()}>Clear completed</button>
        </div>
    )
}

export default Footer;