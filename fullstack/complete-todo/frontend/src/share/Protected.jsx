import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const Protected = ({ compo }) => {
    const { user } = useSelector(state => state.auth)
    return user ? compo : <Navigate to="/login" />
}

export default Protected