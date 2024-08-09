const Test = ({ zz, cart, clickFn, price }) => {
    return <div>
        <h1>test</h1>
        <p>{zz}</p>
        <h1>{cart}</h1>
        <h1>price = {price}</h1>
        <button onClick={clickFn}>click me</button>
    </div>
}
export default Test