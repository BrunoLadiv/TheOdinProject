import { useLoginMutation } from "../features/auth/authApiSlice"
import { setCredentials } from "../features/auth/authSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

import LoginForm from "../components/LoginForm"
import { useEffect } from "react"

const AdminPage = () => {
  const [login, { data, isLoading, error }] = useLoginMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = useSelector(state => state.auth.token)


  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  if (data?.token) {
    localStorage.setItem('token', data.token)
    localStorage.setItem('user', JSON.stringify(data.user))
    dispatch(setCredentials({ user: data.user, token: data.token }))
    navigate('/')

  }



  return (
    <div>
      <LoginForm login={login} isLoading={isLoading} error={error} />

    </div>
  )
}

export default AdminPage
