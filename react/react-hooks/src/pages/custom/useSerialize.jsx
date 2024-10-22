import React from 'react'

const useSerialize = (data) => {
    return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export default useSerialize