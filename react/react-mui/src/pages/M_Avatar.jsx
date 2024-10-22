import { Avatar, AvatarGroup, Chip } from '@mui/material'
import React from 'react'

const M_Avatar = () => {
    return <>
        <Avatar alt="Remy Sharp" src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

        <hr />
        <AvatarGroup max={2}>
            <Avatar alt="Remy Sharp" src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Avatar alt="Travis Howard" src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Avatar alt="Cindy Baker" src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Avatar alt="Agnes Walker" src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Avatar alt="Trevor Henderson" src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </AvatarGroup>

        <hr />
        <Chip label="john doe" color='success' />
        <Chip label="Ross doe" />
        <Chip label="ethan doe" />

    </>
}

export default M_Avatar