import React from 'react'

const Account = () => {
    // dateFns
    const x = new Date()
    let day = x.getDate()
    day = day < 10 ? `0${day}` : day

    let month = x.getMonth() + 1
    month = month < 10 ? `0${month}` : month

    const year = x.getFullYear()

    return <>
        <input type="date" min={`${year}-${month}-${day}`} />
        <input type="time" />
        <textarea></textarea>
        <button>Book Now</button>
    </>
}


export default Account