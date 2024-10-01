import { useState } from "react"

export default function LoginForm({ login, isLoading, error }) {
  const [userCred, setUserCred] = useState({ email: "", password: "" })
  console.log(userCred)
  function handleLogin(e) {
    e.preventDefault()
    if (!userCred.email || !userCred.password) return
    login(userCred)

  }

  return (
    <div className="flex h-full md:mt-34 justify-center bg-white dark:bg-gray-950 mt-14 md:p-12">
      <form onSubmit={handleLogin}>
        <div className="max-w-sm rounded-3xl bg-gradient-to-b from-sky-300 to-purple-500 p-px dark:from-gray-800 dark:to-transparent">
          <div className="rounded-[calc(1.5rem-1px)] bg-white md:px-10 md:p-12 p-6 dark:bg-gray-900">

            <div className="space-y-8">
              <div className="space-y-6">
                <input
                  className="w-full bg-transparent text-gray-600 dark:text-white dark:border-gray-700 rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-600 invalid:border-red-500 dark:placeholder-gray-300"
                  placeholder="Email"
                  type="email"
                  name="email"
                  id="email"
                  value={userCred.email}
                  onChange={(e) => setUserCred({ ...userCred, email: e.target.value })}
                />

                <input
                  className="w-full bg-transparent text-gray-600 dark:text-white dark:border-gray-700 rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-600 invalid:border-red-500 dark:placeholder-gray-300"
                  placeholder="Password"
                  type="password"
                  name="password"
                  id="password"
                  value={userCred.password}
                  onChange={(e) => setUserCred({ ...userCred, password: e.target.value })}
                />
              </div>

              <button disabled={isLoading} className="h-9 px-3 w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-700 transition duration-500 rounded-md text-white">
                Signin
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
