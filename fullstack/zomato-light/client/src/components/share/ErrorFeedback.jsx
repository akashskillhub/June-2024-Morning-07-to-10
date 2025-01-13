import React from 'react'

const ErrorFeedback = ({ error }, { reserErrorBoundary }) => {
    return <>
        <p className='text-danger'>{JSON.stringify(error.message)}</p>
        <button onClick={reserErrorBoundary}>retry</button>
    </>
}

export default ErrorFeedback