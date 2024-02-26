
import { useState } from 'react';
import { STATUS } from '../../core/constants';
import Toggle from '../Toggle/Toggle';
import './NoteItem.css';

function NoteItem({ note, onDelete, onUpdateStatusItem }) {
  const onUpdateStatus = (stt) => {
    onUpdateStatusItem({...note, status: stt})
  }


  return (
    <li className='item'>
      <Toggle noteStatus={note.status} onUpdateStatus={onUpdateStatus} />
      <div className={note.status === STATUS.ACTIVE ? "active" : "completed"}>{note.note}</div>
      <button onClick={() => onDelete(note.id)}> x </button>
    </li>
  );
}

export default NoteItem;