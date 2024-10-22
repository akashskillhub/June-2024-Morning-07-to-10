import React from 'react'
import { Button } from 'react-bootstrap'

const RBS_Button = () => {
    const solid = [
        "primary",
        "secondary",
        "info",
        "success",
        "danger",
        "warning",
        "dark",
        "light"]
    const outline = [
        "outline-primary",
        "outline-secondary",
        "outline-info",
        "outline-success",
        "outline-danger",
        "outline-warning",
        "outline-dark",
        "outline-light"]

    return <div className='container'>
        {
            solid.map(item => <Button key={item} variant={item}>{item}</Button>)
        }
        <hr />
        {
            outline.map(item => <Button key={item} variant={item}>{item}</Button>)
        }

        <hr />
        <Button size='lg'>large</Button>
        <Button >medium</Button>
        <Button size='sm'>small</Button>
    </div>
}

export default RBS_Button