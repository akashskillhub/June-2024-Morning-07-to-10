import React from 'react'
import useDynamicform from './useDynamicform'

const Dynamic = () => {
    const { ui, data } = useDynamicform([
        { name: "profile", type: "file" },
        { name: "fname", type: "text" },
        { name: "lname", type: "text" },
        { name: "email", type: "email" },
        { name: "password", type: "password" },
        { name: "dob", type: "date" },
        { name: "city", type: "select", options: ["delhi", "pune", "mumbai"] },
        { name: "address", type: "textarea" },
        { name: "gender", type: "radio", options: ["male", "female"] },
        { name: "skills", type: "checkbox", options: ["javascript", "react", "python", "angular"] },
        {
            name: "save", type: "button", click: () => {
                console.log(data);
            }
        },
    ])
    return <div style={{ minHeight: "200vh" }}>
        <h1>Dynamic Form</h1>
        <div className="container">
            <div class="card">
                <div class="card-header">Dynamic Form</div>
                <div class="card-body">{ui}</div>
            </div>
        </div>
    </div>
}

export default Dynamic

// react-bootstrap
// mui
// tailwind

// react routing
// form
// redux
// CRUD