import { useEffect, useState } from 'react'
import { useBecomeMemberMutation } from '../../features/auth/authApiSlice'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../../features/auth/authSlice'

const BecomeMember = ({ setShowBecomeMemberModal }) => {
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const [becomeMember, { data, isLoading, error }] = useBecomeMemberMutation()

  if (data?.message === 'You are now a member!') {
    dispatch(
      setCredentials({user: data.user})
    )
    setTimeout(() => {
      setShowBecomeMemberModal(false)
    }, 1000)
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])
  function handleSubmit(e) {
    e.preventDefault()
    becomeMember({ password })
  }
  return (
    <div
      className="absolute z-30 w-full min-h-screen inset-0 bg-gray-800 bg-opacity-75 backdrop-blur-lg"
      id="modal"
    >
      <div
        role="alert"
        className="container translate-y-1/2 mx-auto w-11/12 md:w-2/3 max-w-lg"
      >
        <form
          onSubmit={handleSubmit}
          className="py-8 px-5 md:px-32 bg-white shadow-md rounded border border-gray-400"
        >
          <div className="w-full flex justify-center text-gray-600 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-lock"
              width={56}
              height={56}
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <rect x={5} y={11} width={14} height={10} rx={2} />
              <circle cx={12} cy={16} r={1} />
              <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
            </svg>
          </div>
          <h1 className="text-center text-gray-800 font-lg font-bold tracking-normal leading-tight mb-5">
            Become a Club Member
          </h1>
          <input
            id="pass"
            className="mb-5 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            placeholder="Enter Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <p className="text-red-500 text-sm">{error.data.message}</p>
          )}
          {data && <p className="text-green-500 text-sm">{data.message}</p>}
          <div className="flex items-center justify-center w-full">
            <button
              type={'submit'}
              className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
            >
              Submit
            </button>
            <button
              className="focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
              onClick={() => setShowBecomeMemberModal(false)}
              disabled={isLoading}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default BecomeMember
