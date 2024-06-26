import { useGetByIdQuery } from '../../features/auth/authApiSlice'
import { useDeletePostMutation } from '../../features/posts/postApiSlice'
import { useSelector } from 'react-redux'
import convertTime from '../../utils/convertTime'
import userAvatar from '../../assets/user.png'
export default function PostCard({ post }) {
  const [deletePost, { isLoading }] = useDeletePostMutation()
  const { data } = useGetByIdQuery(post.author)
  const user = useSelector((state) => state.auth.user)
  const { day, month, year, hours, minutes, amOrPm } = convertTime(post.date)
  function handleDeletePost() {
    if (!confirm('Are you sure you want to delete this post?')) return

    deletePost(post._id)
  }
  return (
    <div className="group flex items-center relative   justify-center flex-grow-1 flex-shrink-0 w-full h-full bg-white border border-gray-200 rounded-md shadow-none cursor-pointer hover:shadow-lg">
      {post?.author === user?.id && (
        <span
          onClick={isLoading ? '' : handleDeletePost}
          className="hidden absolute hover:scale-150 top-1 right-4 group-hover:block"
        >
          x
        </span>
      )}
      <div className="flex flex-col space-y-1.5 items-start flex-1 h-[198px]  lg:px-0 px-4 py-5 max-w-xs md:w-full overflow-hidden">
        <div className="flex flex-row mb-2">
          <div>
            <img
              className="rounded-full"
              src={userAvatar}
              alt="avatar"
              width="40px"
            />
          </div>
          <div className="ml-2">
            <p
              title={user?.isMember ? '' : 'Join the club the see post details'}
              className={`text-sm font-medium leading-none text-gray-400 ${
                user?.isMember ? 'text-gray-800' : ''
              }`}
            >
              {user?.isMember || post?.author === user?.id ? data?.user.fullName : 'Anonymous'}
            </p>
            <div className="flex justify-start mt-1 space-x-6">
              <div className="flex justify-between text-white">
                <svg
                  className="mr-1 fill-current"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 2.5H3C2.44772 2.5 2 2.94772 2 3.5V9.5C2 10.0523 2.44772 10.5 3 10.5H9C9.55228 10.5 10 10.0523 10 9.5V3.5C10 2.94772 9.55228 2.5 9 2.5Z"
                    stroke="#4B5563"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 1.5V3.5"
                    stroke="#4B5563"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 1.5V3.5"
                    stroke="#4B5563"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 5.5H10"
                    stroke="#4B5563"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-sm leading-none text-gray-600">
                  {user?.isMember || post?.author === user?.id ? `${day} ${month}, ${year}` : '*******'}
                </p>
              </div>
              <div className="flex justify-end text-white">
                <svg
                  className="mx-1 fill-current"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 10.5C8.48528 10.5 10.5 8.48528 10.5 6C10.5 3.51472 8.48528 1.5 6 1.5C3.51472 1.5 1.5 3.51472 1.5 6C1.5 8.48528 3.51472 10.5 6 10.5Z"
                    stroke="#4B5563"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 3.5V6L7.5 7.5"
                    stroke="#4B5563"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-sm leading-none text-gray-600">
                  {user?.isMember || post?.author === user?.id? `${hours}:${minutes} ${amOrPm}` : '*******'}
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-lg font-medium leading-none text-gray-800">
          {post.title}
        </p>
        <p className="text-sm break-words leading-tight whitespace-normal  text-gray-500">
          {post.content}
        </p>
      </div>
    </div>
  )
}
