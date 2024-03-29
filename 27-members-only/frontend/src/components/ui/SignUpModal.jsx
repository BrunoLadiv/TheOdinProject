import { useEffect } from 'react'
function SignUpModal({ setShowSignUpModal, setShowSignInModal }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])
  return (
    <>
      <div className="absolute  w-full min-h-screen inset-0 bg-gray-800 bg-opacity-75 backdrop-blur-lg">
        <div
          role="alert"
          className="container mx-auto w-11/12 md:w-2/3 max-w-lg flex justify-center translate-y-1/2"
        >
          <div className="relative w-11/12 sm:w-8/12 md:w-10/12 bg-gray-800 shadow  rounded">
            <div className="md:px-10 py-4 px-5 md:py-6">
              <p className="text-2xl font-bold leading-normal text-white ">
                Sign up
              </p>
              <div>
                <div className="bg-gray-50 dark:bg-gray-700 border rounded dark:border-gray-700 border-gray-200 mt-5">
                  <input
                    className="py-3 pl-4 bg-transparent text-sm font-medium leading-none text-gray-600 placeholder-gray-600 dark:placeholder-gray-300 dark:text-gray-300 w-full focus:outline-none"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="bg-gray-50 mt-3 dark:bg-gray-700 border rounded dark:border-gray-700 border-gray-200">
                  <input
                    className="py-3 pl-4 bg-transparent text-sm font-medium leading-none text-gray-600 placeholder-gray-600 dark:placeholder-gray-300 dark:text-gray-300 w-full focus:outline-none"
                    type="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="md:flex items-center justify-between mt-4 md:mt-6">
                <p className="text-xs leading-3 text-gray-600 dark:text-gray-300 ">
                  Already have an account?{' '}
                  <span
                    onClick={() => {
                      setShowSignUpModal(false)
                      setShowSignInModal(true)
                    }}
                    aria-hidden="true"
                    className="cursor-pointer text-indigo-700 dark:text-indigo-600 underline font-semibold"
                  >
                    Sign In
                  </span>
                </p>
                <button className="mt-4 md:mt-0 md:ml-10 p-3 bg-indigo-700 dark:bg-indigo-600 hover:bg-opacity-80 rounded focus:outline-none">
                  <p className="text-sm font-medium leading-none text-gray-100">
                    Create account
                  </p>
                </button>
              </div>
            </div>
            <div
              onClick={() => setShowSignUpModal(false)}
              aria-hidden="true"
              className="cursor-pointer absolute top-0 right-0 m-3 text-gray-800 transition duration-150 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Close"
                className="icon icon-tabler icon-tabler-x"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1={18} y1={6} x2={6} y2={18} />
                <line x1={6} y1={6} x2={18} y2={18} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUpModal
