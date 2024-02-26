import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Input from "../components/Input/Input";
import NoteLists from "../components/NoteLists/NoteLists";
import { NOTES_LIST_STORAGE_KEY, STATUS } from "../core/constants";

import './Home.css';

function Home() {
    const [notes, setNotes] = useState([]);
    const [displayNotes, setDisplayNotes] = useState([...notes]);
    const [statusFilter, seStatusFilter] = useState(null);


    const onNewNote = (note) => {
        setNotes([{ note: note, status: STATUS.ACTIVE, id: Date.now() }, ...notes]);
        localStorage.setItem(NOTES_LIST_STORAGE_KEY, JSON.stringify([{ note: note, status: STATUS.ACTIVE, id: Date.now() }, ...notes]));
    }

    const onDeleteNote = (noteId) => {
        const n = notes.filter((note) => note.id !== noteId)
        setNotes(n);
        localStorage.setItem(NOTES_LIST_STORAGE_KEY, JSON.stringify(n));

    }

    const onUpdateStatusNoteItem = (item) => {
        const index = notes.findIndex(note => note.id === item.id);
        const obj = [...notes];
        obj[index].status = item.status;
        setNotes(obj);
        localStorage.setItem(NOTES_LIST_STORAGE_KEY, JSON.stringify(obj));

    }

    const onClearCompleted = () => {
        const updateNote = notes.filter(note => note.status !== STATUS.COMPLETED);
        setNotes(updateNote);
        localStorage.setItem(NOTES_LIST_STORAGE_KEY, JSON.stringify(updateNote));

    }

    const onDisplayNotes = (stt) => {
        if (stt == null) {
            setDisplayNotes(notes);
        } else {
            const x = notes.filter(note => note.status === stt);
            setDisplayNotes(x);
        }
    }

    const onFilterNotes = (stt) => {
        seStatusFilter(stt);
        onDisplayNotes(stt);

    }

    useEffect(() => {
        onDisplayNotes(statusFilter);
    }, [notes]);

    useEffect(() => {
        const notesList = localStorage.getItem(NOTES_LIST_STORAGE_KEY);
        const obj = JSON.parse(notesList);
        setNotes(obj || []);

    }, [])

    return (
        <div className="home">
            <Input onNewNote={onNewNote} />

            <NoteLists noteLists={displayNotes} onDeleteNote={onDeleteNote} onUpdateStatusNoteItem={onUpdateStatusNoteItem} />
            <Footer noteLists={notes} onClearCompleted={onClearCompleted} onFilterNotes={onFilterNotes} />

        </div>
    )
}

export default Home;