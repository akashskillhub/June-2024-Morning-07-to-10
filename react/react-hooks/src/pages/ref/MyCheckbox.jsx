import React, { useRef, useState } from 'react'

const MyCheckbox = () => {
    const [isChecked, setIsChecked] = useState(false)
    const customCheckbox = useRef()
    return <>
        <input type="checkbox" ref={customCheckbox} style={{ display: "none" }} />
        <div
            onClick={e => {
                customCheckbox.current.checked = !customCheckbox.current.checked
                setIsChecked(customCheckbox.current.checked)
            }}
            style={{
                height: 20,
                width: 20,
                border: "1px solid black",
                borderRadius: "20px",
                backgroundColor: isChecked ? "green" : "",
                color: isChecked ? "white" : "black",
                fontSize: "18px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
            {isChecked ? <i class="bi bi-check2"></i> : ""}
        </div>
    </>
}

export default MyCheckbox