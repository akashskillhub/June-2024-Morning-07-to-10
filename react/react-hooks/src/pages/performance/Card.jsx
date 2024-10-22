import React, { memo } from 'react'

const Card = ({ data }) => {
    console.log("card called")

    return <>
        {data.map((item, index) => <div key={item + index}>
            {item}
        </div>)}
    </>
}

export default memo(Card)