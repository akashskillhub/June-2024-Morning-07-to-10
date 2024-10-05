import { useEffect } from "react"

const ErrorHandler = ({ error, resetErrorBoundary }) => {
    useEffect(() => {
        resetErrorBoundary()
    }, [])
    return <div>
        <p>{error.message}</p>
        <button onClick={resetErrorBoundary}>Retry</button>
    </div>
}
export default ErrorHandler