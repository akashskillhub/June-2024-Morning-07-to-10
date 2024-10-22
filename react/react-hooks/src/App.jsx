import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import MyState from './pages/state/MyState'
import Myeffect from './pages/effect/Myeffect'
import Mycontext from './pages/context/Mycontext'
import Myreducer from './pages/state/Myreducer'
import Myref from './pages/ref/Myref'
import MyCheckbox from './pages/ref/MyCheckbox'
import MyuseMemo from './pages/performance/MyuseMemo'
import MyOnlyMemo from './pages/performance/MyOnlyMemo'
import Test from './pages/custom/Test'
import Dynamic from './pages/custom/Dynamic'

const App = () => {
  return <>
    <BrowserRouter>
      <p><Link to="/">State</Link></p>
      <p><Link to="/effect">effect</Link></p>
      <p><Link to="/context">context</Link></p>
      <p><Link to="/reduce">reduce</Link></p>
      <p><Link to="/ref">ref</Link></p>
      <p><Link to="/ref-checkbox">ref checkbox</Link></p>
      <p><Link to="/usememo">use memo</Link></p>
      <p><Link to="/onlymemo">only memo</Link></p>
      <p><Link to="/custom">custom</Link></p>
      <p><Link to="/dynamic">dynamic</Link></p>
      <Routes>
        <Route path='/' element={<MyState />} />
        <Route path='/effect' element={<Myeffect />} />
        <Route path='/context' element={<Mycontext />} />
        <Route path='/reduce' element={<Myreducer />} />
        <Route path='/ref' element={<Myref />} />
        <Route path='/ref-checkbox' element={<MyCheckbox />} />
        <Route path='/usememo' element={<MyuseMemo />} />
        <Route path='/onlymemo' element={<MyOnlyMemo />} />
        <Route path='/custom' element={<Test />} />
        <Route path='/dynamic' element={<Dynamic />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App