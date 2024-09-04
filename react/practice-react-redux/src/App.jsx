import { BrowserRouter, Route, Routes } from "react-router-dom"
import Counter from "./pages/Counter"
import Todo from "./pages/Todo"

const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Todo />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App