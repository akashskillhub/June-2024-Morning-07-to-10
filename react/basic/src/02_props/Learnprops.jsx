import React from 'react'

const Learnprops = () => {
    return <div>
        <div>Learnprops</div>
        {/* 👇 function call */}
        {/* <Child x={10} y={20}></Child> */}
        {/*       👆 prop */}

        {/* <Child brand="dell" price={2500} /> */}

        <Child brand="apple"> hello </Child>
        {/*                   👆 children */}
    </div>
}

const Child = (arg) => {
    console.log(arg)

    return <div>
        <h1>Child</h1>
    </div>
}

export default Learnprops