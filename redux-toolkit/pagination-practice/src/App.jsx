import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBlogs } from './redux/blogActions'

const App = () => {
  const [pagi, setPagi] = useState({ start: 0, limit: 2 })
  const dispatch = useDispatch()
  const { allBlogs, loading, total } = useSelector(state => state.articles)

  useEffect(() => {
    dispatch(getAllBlogs(pagi))
  }, [pagi])
  return <>
    <div className="container">
      <div className="row">
        <div className="col-sm-6 offset-sm-3">

          <select
            className="form-select my-2"
            value={pagi.limit}
            onChange={e => setPagi({ ...pagi, limit: e.target.value })}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>


          <button
            className='btn btn-outline-primary btn-sm mx-1'
            disabled={pagi.start === 0}
            onClick={e => setPagi({ ...pagi, start: pagi.start - pagi.limit })}
          >Prev</button>
          {
            total && [...Array(Math.ceil(total / pagi.limit))].map((item, i) => <button
              onClick={e => setPagi({ ...pagi, start: i * pagi.limit })}
              className={`btn btn-sm mx-1 ${(i * pagi.limit) === pagi.start ? "btn-primary" : "btn-outline-primary"}`}>
              {i + 1}
            </button>)
          }
          <button
            onClick={e => setPagi({ ...pagi, start: pagi.start + pagi.limit })}
            disabled={pagi.start === (Math.ceil(total / pagi.limit) * pagi.limit) - pagi.limit}
            className='btn btn-outline-primary btn-sm mx-1'>Next</button>
          {
            allBlogs && allBlogs.map(item => <div className="card my-3" key={item.id}>
              <div className="card-header">{item.title}</div>
              <div className="card-body">{item.desc}</div>
            </div>)
          }
        </div>
      </div>
    </div>

  </>
}

export default App