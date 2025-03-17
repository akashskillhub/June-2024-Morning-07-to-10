"use client" // CSR
import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {
    const [count, setCount] = useState(10)
    return <>
        <Head>
            <title>admin page</title>
            <meta name='description' content='admin panel page' />
        </Head>
        <div> admin page</div>
        <h1>{count}</h1>
        <Link href="/admin/123">details</Link>
    </>
}


export default page