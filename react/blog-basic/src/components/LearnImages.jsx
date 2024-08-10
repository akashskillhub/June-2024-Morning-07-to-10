import React from 'react'
import test from "./../assets/2.jpg"
const LearnImages = () => {
    return <>
        <div>LearnImages</div>
        <img
            src="https://images.unsplash.com/photo-1723201969694-d47fd1b7fb61?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="" height={100} />

        <img src={test} height={100} alt="" />
    </>

}

export default LearnImages