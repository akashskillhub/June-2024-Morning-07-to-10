import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBlogs } from '../redux/blogActions'
import InfiniteScroll from 'react-infinite-scroll-component'

const InfinitePagination = () => {
    const [pagi, setPagi] = useState({ start: 0, limit: 2 })
    const { allBlogs, total } = useSelector(state => state.articles)
    const dispatch = useDispatch()
    const [index, setIndex] = useState(0)
    const getBlogs = () => {
        dispatch(getAllBlogs({ ...pagi, start: index * pagi.limit }))
        setIndex(index + 1)
    }

    useEffect(() => {
        // dispatch(getAllBlogs(pagi))
        getBlogs()
    }, [pagi])

    return <>

        {
            allBlogs && <InfiniteScroll
                dataLength={allBlogs.length}
                hasMore={allBlogs.length != total}
                next={getBlogs}
                endMessage={<h1>Bas kar</h1>}
            >

                {
                    allBlogs.map(item => <div className='vh-100 bg-danger mb-3' key={item.id}>
                        <h1 className='text-light'>{item.title}</h1>
                    </div>)
                }
            </InfiniteScroll>
        }

    </>
}

export default InfinitePagination