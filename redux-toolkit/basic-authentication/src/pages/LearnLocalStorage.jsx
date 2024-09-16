import React, { useState } from 'react'

const LearnLocalStorage = () => {
    return <>
        <div>LearnLocalStorage</div>
        <button onClick={e => localStorage.setItem("kahipn", JSON.stringify(["dell", "hp"]))}>add</button>
        <button onClick={e => localStorage.removeItem("kahipn")}>remove</button>
    </>

}

export default LearnLocalStorage