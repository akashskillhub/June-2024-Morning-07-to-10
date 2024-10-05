import About from "../pages/About";
import Conatct from "../pages/Conatct";
import Home from "../pages/Home";
import Setting from "../pages/Setting";

export const allRoutes = [
    { label: "HOME", path: "/", element: <Home></Home> },
    { label: "ABOUT", path: "/about", element: <About></About> },
    { label: "CONATCT", path: "/contact", element: <Conatct></Conatct> },
    { label: "setting", path: "/setting", element: <Setting></Setting> },
]