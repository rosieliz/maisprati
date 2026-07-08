import { useState } from "react";

function Textarea({ callback, initialValue }) {
    const [value, setValue] = useState(initialValue || "");

    function cancelEdit() {
        if (callback) callback(initialValue);
    }

    function confirmEdit(event) {
        if (callback && event.code === "Enter") callback(event.target.value);
    }

    return (
        <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={cancelEdit}
            onKeyDown={confirmEdit}
        />
    );
}

export default Textarea;
