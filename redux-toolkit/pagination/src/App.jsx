import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBlogs } from './redux/blogActions'

const App = () => {
  const dispatch = useDispatch()
  const { allBlogs, total } = useSelector(state => state.articles)
  const [start, setStart] = useState(0)
  const [limit, setLimit] = useState(2)

  useEffect(() => {
    dispatch(getAllBlogs({ start, limit }))
  }, [limit, start])

  return <>
    <h1>start {start}</h1>
    <h1>limit {limit}</h1>
    <h1>{Math.ceil(total / limit)}</h1>
    <select onChange={e => {
      setLimit(e.target.value)
      setStart(0)
    }}>
      <option value="2">2</option>
      <option value="5">5</option>
      <option value="10">10</option>
    </select>
    {
      allBlogs && allBlogs.map(item => <div key={item.id} className='card my-2 w-25'>
        <div className='card-header' >{item.title}</div>
      </div>)
    }
    {
      allBlogs && [...Array(Math.ceil(total / limit))].map((item, i) => <button onClick={e => setStart(i)}>{i}</button>)
    }
  </>
}

export default App