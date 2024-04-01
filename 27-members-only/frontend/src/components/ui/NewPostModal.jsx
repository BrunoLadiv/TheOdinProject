import { useEffect, useState } from 'react'
import { useCreatePostMutation } from '../../features/posts/postApiSlice'

export default function NewPostModal({ setShowNewPostModal }) {
  const [createPost, { data, error, isLoading }] = useCreatePostMutation()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  if (data?.message === 'Post created successfully') {
    setTimeout(() => {
      setShowNewPostModal(false)
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
    if (!title || !content) return
    createPost({ title, content })
  }
  return (
    <div className="absolute  w-full min-h-screen inset-0 bg-gray-800 bg-opacity-75 backdrop-blur-lg ">
      <div className="flex items-center justify-center px-4 py-8">
        <div className="relative p-6  rounded shadow-lg w-96 bg-gray-800 translate-y-1/2">
          <p className="text-lg font-bold leading-none text-gray-800 dark:text-gray-100">
            New Post
          </p>
          <form onSubmit={handleSubmit} className="mt-5">
            <div className="flex flex-col mt-4">
              <div>
                <input
                  maxLength="280"
                  required
                  placeholder="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-3 mt-2 text-xs font-medium leading-3 text-gray-500 border border-gray-200 rounded-lg resize-none dark:text-gray-400 bg-gray-50 dark:bg-gray-700 dark:border-gray-700 focus:outline-none"
                ></input>
              </div>
              <textarea
                maxLength="180"
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="what are you thinking ?"
                className="px-4 py-3 mt-2 text-xs font-medium leading-3 text-gray-500 border border-gray-200 rounded-lg resize-none h-36 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 dark:border-gray-700 focus:outline-none"
              ></textarea>
            </div>
            {data?.message && (
              <p className="text-green-500 mt-2">{data.message}</p>
            )}
            {error && <p className="text-red-600 mt-2">{error.message}</p>}

            <button
              type="submit"
              disabled={isLoading}
              id="submit"
              className="px-5 py-3 mt-5 text-xs font-semibold leading-3 text-gray-100 bg-indigo-700 rounded focus:outline-none dark:bg-indigo-600 hover:bg-opacity-80"
            >
              Create
            </button>
          </form>
          <div
            className="absolute top-0 right-0 m-3 text-gray-400 text-gray-600 transition duration-150 ease-in-out cursor-pointer dark:text-gray-100"
            onClick={() => setShowNewPostModal(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Close"
              className="icon icon-tabler icon-tabler-x"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
