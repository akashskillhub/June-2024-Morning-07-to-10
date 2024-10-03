import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBlogs } from '../redux/blogActions'

const BasicPagination = () => {
    const [pagi, setPagi] = useState({ start: 0, limit: 2 })
    const { allBlogs, total } = useSelector(state => state.articles)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllBlogs(pagi))
    }, [pagi])
    return <>
        <select value={pagi.limit} onChange={e => setPagi({ start: 0, limit: e.target.value })}>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="10">10</option>
        </select>
        <hr />
        {
            total && [...Array(Math.ceil(total / pagi.limit))].map((item, i) => <button
                type="button"
                onClick={e => setPagi({ ...pagi, start: pagi.limit * i })}
                className="btn btn-outline-primary mx-2">{i + 1}</button>)
        }
        <hr />
        {
            allBlogs && allBlogs.map(item => <div class="card my-3" key={item.id}>
                <div class="card-header">{item.title}</div>
                <div class="card-body">{item.desc}</div>
            </div>)
        }
    </>
}

export default BasicPagination