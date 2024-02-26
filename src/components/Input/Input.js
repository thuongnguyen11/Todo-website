import React, { useEffect, useRef, useState } from "react";
import NoteLists from '../NoteLists/NoteLists';
import './Input.css';

function Input(props) {
  const formRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    props.onNewNote(e.target[0].value);
    formRef.current.reset();
  }


  return (
    <form onSubmit={onSubmit} ref={formRef}>
      <input
        type="text"
        className="input"
        name="input"
      >
      </input>

    </form>
  );


}

export default Input;