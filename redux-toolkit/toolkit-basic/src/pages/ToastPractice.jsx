import React from 'react'
import { toast } from 'react-toastify'

const ToastPractice = () => {
    return <>
        <button onClick={e => toast.info("info")}>info</button>
        <button onClick={e => toast.success("success")}>success</button>
        <button onClick={e => toast.warning("warning")}>warning</button>
        <button onClick={e => toast.error("error")}>error</button>
    </>
}

export default ToastPractice