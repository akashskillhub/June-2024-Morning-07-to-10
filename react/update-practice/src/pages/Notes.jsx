import React from 'react'

const Notes = () => {
    /*
        step 1
            createNote
            readNote
            
        step 2
            create handleChange function to get values from inputs
            
        step 3
            display all notes in table
            
        step 4
            create deleteNote and add delete note functionality
            
        step 5
            add updateNote logic (you can refer previiouse code)
    */
    return <>
        <input type="text" placeholder='enter task' />
        <input type="text" placeholder='enter desc' />
        <select >
            <option selected disabled>Choose priority</option>
            <option value="1">High</option>
            <option value="2">Medium</option>
            <option value="3">Low</option>
        </select>
        <button>add note</button>
    </>
}

export default Notes