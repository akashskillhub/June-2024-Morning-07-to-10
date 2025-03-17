import { NextResponse } from 'next/server'
const middleware = () => {
    console.log("middleware called")

    return NextResponse.next()
}
export default middleware