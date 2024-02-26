import React, { useEffect, useState } from "react";

import NoteItem from '../NoteItem/NoteItem';

import './NoteLists.css';

function NoteLists({ noteLists, onDeleteNote, onUpdateStatusNoteItem }) {

  const onDelete = (id) => {
    onDeleteNote(id);
  }

  const onUpdateStatusItem = (item) => {
    onUpdateStatusNoteItem(item);
  }

  return (
    <ul className='noteslist'>
      {noteLists.map((note) => {
        return (
            <NoteItem note={note} onDelete={onDelete} key={note.id} onUpdateStatusItem={onUpdateStatusItem} />
        )
      })}
    </ul>
  );
}

export default NoteLists;