import { useLoginMutation } from "../features/auth/authApiSlice"
import { setCredentials } from "../features/auth/authSlice"
import { useDispatch } from "react-redux"

import LoginForm from "../components/LoginForm"

const AdminPage = () => {
  const [login, { data, isLoading, error }] = useLoginMutation()
  const dispatch = useDispatch()

  if (data?.token) {
    localStorage.setItem('token', data.token)
    localStorage.setItem('user', JSON.stringify(data.user))
    dispatch(setCredentials({ user: data.user, token: data.token }))

  }

  return (
    <div>
      <LoginForm login={login} isLoading={isLoading} error={error} />

    </div>
  )
}

export default AdminPage
