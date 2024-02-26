import React, { useEffect, useState } from "react";

import IconDone from "../../assets/icon_done.svg";
import { STATUS } from "../../core/constants";
import './Toggle.css';

function Toggle({ noteStatus, onUpdateStatus }) {

    const [status, setStatus] = useState(noteStatus === STATUS.ACTIVE ? true : false);

    const onToggle = () => {
        setStatus(!status);
        onUpdateStatus(noteStatus === STATUS.ACTIVE ? STATUS.COMPLETED : STATUS.ACTIVE );
    }

    return (
        <div onClick={() => onToggle()}>
            <div className="toggle" >
                <div className="checkbox"></div>
                {status ?
                    <></>
                    :
                    <img src={IconDone} width="25" height="25" className="icon-done" />
                }
            </div>
        </div>
    )
}

export default Toggle;