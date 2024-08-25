import React from 'react'

const BasicValidation = () => {
    const handleSubmit = e => {
        // SPA
        // e.preventDefault()
        console.log("form submitted")
    }
    // formik
    // react-hook-form
    return <>
        {/* <form action="test.py" mathod="POST" > */}
        <form  >
            <input type="text" required />
            <button onClick={handleSubmit}>submit</button>
        </form>
    </>
}

export default BasicValidation