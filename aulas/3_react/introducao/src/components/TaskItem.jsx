import "../styles/TaskItem.css";
import { useState } from "react";
import Textarea from "./Textarea";

function TaskItem({ task }) {
    const [done, setDone] = useState(task.done);
    const [isEdit, setIsEdit] = useState(false);
    const [text, setText] = useState(task.text);

    function removeItem(event) {
        event.target.parentElement.parentElement.remove();
    }

    return (
        <div>
            {isEdit
                ? <Textarea
                    initialValue={text}
                    callback={(value) => {
                        setText(value);
                        setIsEdit(false);
                    }}
                  />
                : <li className="task-item">
                    <button
                        title="Remover"
                        onClick={removeItem}
                    >X</button>
                    <button
                        title="Editar"
                        onClick={() => setIsEdit(true)}
                    >/</button>
                    <label
                        className="task-item__text"
                        style={{
                            textDecoration: done ? "line-through" : "unset"
                        }}
                    >
                        <input
                            className="task-item__checkbox"
                            type="checkbox"
                            checked={done}
                            onChange={() => setDone(!done)}
                        />
                        {text}
                    </label>
                </li>
            }
        </div>
    );
}

export default TaskItem;
