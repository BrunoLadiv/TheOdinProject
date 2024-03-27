/* eslint-disable react/prop-types */
function Button({ type = 'primary', children }) {
  if (type === 'secondary') {
    return (
      <button className="px-6 py-2 mx-2 my-2 text-sm text-indigo-700 transition duration-150 ease-in-out bg-white border border-indigo-700 rounded hover:border-indigo-600 hover:text-indigo-600">
        {children}
      </button>
    )
  }
  return (
    <button className="px-6 py-2 mx-2 my-2 text-sm text-white transition duration-150 ease-in-out bg-indigo-700 rounded hover:bg-indigo-600">
      {children}
    </button>
  )
}
export default Button
