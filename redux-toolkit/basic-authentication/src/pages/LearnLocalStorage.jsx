import React, { useState } from 'react'

const LearnLocalStorage = () => {
    return <>
        <div>LearnLocalStorage</div>
        <button onClick={e => localStorage.setItem("kahipn", JSON.stringify(["dell", "hp"]))}>add</button>
        <button onClick={e => localStorage.removeItem("kahipn")}>remove</button>
        <button onClick={e => {
            const x = JSON.parse(localStorage.getItem("kahipn"))
            console.log(x)

            // const y = JSON.parse(x)
            // console.log(y);

        }}>get</button>
    </>

}

export default LearnLocalStorage