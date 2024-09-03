import React, { useContext } from 'react'
import { UserContext } from '../App'

const Footer = () => {
    const { logginUser } = useContext(UserContext)
    return <>
        <div>Footer</div>
        <p>{logginUser.name}</p>
    </>

}

export default Footer