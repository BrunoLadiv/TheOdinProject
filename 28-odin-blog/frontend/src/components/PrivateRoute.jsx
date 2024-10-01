import CreatePost from "../pages/CreatePost"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const PrivateRoute = () => {
  const token = useSelector(state => state.auth.token)
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate("/admin"); 
    }
  }, [token, navigate]);

  if(!token) return null

  return (
    <CreatePost />
  )
}

export default PrivateRoute
