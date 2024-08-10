import { Demo } from "./01_jsx/basic"
import Contact from "./01_jsx/Contact"
import Dummy from "./01_jsx/dummy"
import Learnjsx from "./01_jsx/Learnjsx"
import Learnprops from "./02_props/Learnprops"
import Practiceprops from "./02_props/Practiceprops"
import LearnState from "./03_state/LearnState"
import PracticeState from "./03_state/PracticeState"
import Practicetest from "./practice/Practicetest"
// import { Dummy } from "./01_jsx/dummy"

const App = () => {
  return <div>
    <h1>Welcome to React</h1>
    {/* 👇 function call */}
    {/* <Demo></Demo> */}
    {/* <Test></Test> */}
    {/* <Dummy></Dummy> */}
    {/* <Contact></Contact> */}
    {/* <Learnjsx></Learnjsx> */}
    {/* <Learnprops></Learnprops> */}
    {/* <Practiceprops></Practiceprops> */}
    {/* <Practiceprops /> */}
    <Practicetest />
    {/* <LearnState /> */}
    {/* <PracticeState /> */}
  </div>
}

export default App