import React, { useState } from 'react'
import { Button, Collapse } from 'react-bootstrap'

const RBS_Collapse = () => {
    const [show, setShow] = useState(false)
    return <>
        <Button onClick={e => setShow(!show)}>Toggle</Button>
        <Collapse in={show}>
            <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate sunt autem. Minima labore iste reiciendis, fugiat expedita facere asperiores exercitationem fuga rerum, molestias est, assumenda incidunt. Dolorum, eius labore?
            </h1>
        </Collapse>
    </>
}

export default RBS_Collapse