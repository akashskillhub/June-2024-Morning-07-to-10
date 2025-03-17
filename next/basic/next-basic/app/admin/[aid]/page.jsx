"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const { aid } = useParams()
    return (
        <div>admin details page {aid}</div>
    )
}

export default page